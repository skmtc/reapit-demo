import { metadataModel, MetadataModel } from '@/schemas/metadataModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiMetadata } from 'services/Metadata.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useMetadataTableColumnHelper = createColumnHelper<MetadataModel>()
export type UseMetadataTableArgs = {
  entityType?: string | undefined
  id?: Array<string> | undefined
  entityId?: Array<string> | undefined
  filter?: Array<string> | undefined
  columns: ColumnsList<MetadataModel>
}
export const getuseMetadataTableColumn = (property: string, modelConfig: ModelConfig<MetadataModel>) => {
  return match(property)
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useMetadataTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useMetadataTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('entityType', () => {
      const { label: header, format, width, minWidth } = modelConfig['entityType']

      return useMetadataTableColumnHelper.accessor((row) => row.entityType, {
        id: 'entityType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('entityId', () => {
      const { label: header, format, width, minWidth } = modelConfig['entityId']

      return useMetadataTableColumnHelper.accessor((row) => row.entityId, {
        id: 'entityId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useMetadataTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export const useMetadataTable = (args: UseMetadataTableArgs) => {
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
