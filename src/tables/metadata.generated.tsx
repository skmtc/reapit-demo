import { metadataModel, MetadataModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiMetadata } from '@/services/metadata.generated.ts'

export type MetadataArgs = {
  entityType?: string | undefined
  id?: Array<string> | undefined
  entityId?: Array<string> | undefined
  filter?: Array<string> | undefined
  columns: ColumnsList<MetadataModel>
}

export const metadataColumnHelper = createColumnHelper<MetadataModel>()

export const getMetadataColumn = (property: string, modelConfig: ModelConfig<MetadataModel>) => {
  return match(property)
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return metadataColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return metadataColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('entityType', () => {
      const { label: header, format } = modelConfig['entityType']

      return metadataColumnHelper.accessor((row) => row.entityType, {
        id: 'entityType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('entityId', () => {
      const { label: header, format } = modelConfig['entityId']

      return metadataColumnHelper.accessor((row) => row.entityId, {
        id: 'entityId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return metadataColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useMetadataTable = (args: MetadataArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiMetadata({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
