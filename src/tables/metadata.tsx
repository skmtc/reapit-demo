import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiMetadata } from '@/services/metadata.ts'

export const metadataBody = z.object({
  id: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  entityType: z.string().nullable().optional(),
  entityId: z.string().nullable().optional(),
  metadata: z.string().nullable().optional(),
})
export type MetadataBody = {
  id?: string | undefined | null
  modified?: string | undefined | null
  entityType?: string | undefined | null
  entityId?: string | undefined | null
  metadata?: string | undefined | null
}
export type MetadataArgs = {
  entityType?: string | undefined | null
  id?: Array<string> | undefined | null
  entityId?: Array<string> | undefined | null
  filter?: Array<string> | undefined | null
  columns: ColumnsList<MetadataBody>
}

export const metadataColumnHelper = createColumnHelper<MetadataBody>()

export const getMetadataColumn = (property: string, { label, format }: ConfigItemLookup<MetadataBody>) => {
  return match(property)
    .with('id', () => {
      return metadataColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('modified', () => {
      return metadataColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('entityType', () => {
      return metadataColumnHelper.accessor((row) => row.entityType, {
        id: 'entityType',
        header: label('entityType'),
        cell: (info) => format(info.getValue(), 'entityType'),
      })
    })
    .with('entityId', () => {
      return metadataColumnHelper.accessor((row) => row.entityId, {
        id: 'entityId',
        header: label('entityId'),
        cell: (info) => format(info.getValue(), 'entityId'),
      })
    })
    .with('metadata', () => {
      return metadataColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
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
