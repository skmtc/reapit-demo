import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiResthooks } from '@/services/resthooks.ts'

export const resthooksBody = z.object({
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  url: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  topicIds: z.array(z.string()).nullable().optional(),
  active: z.boolean().nullable().optional(),
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
export type ResthooksBody = {
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  url?: string | undefined | null
  description?: string | undefined | null
  topicIds?: Array<string> | undefined | null
  active?: boolean | undefined | null
  ignoreEtagOnlyChanges?: boolean | undefined | null
}
export type ResthooksArgs = {
  sortBy?: string | undefined | null
  active?: boolean | undefined | null
  columns: ColumnsList<ResthooksBody>
}

export const resthooksColumnHelper = createColumnHelper<ResthooksBody>()

export const getResthooksColumn = (property: string, { label, format }: ConfigItemLookup<ResthooksBody>) => {
  return match(property)
    .with('id', () => {
      return resthooksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return resthooksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return resthooksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('url', () => {
      return resthooksColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header: label('url'),
        cell: (info) => format('url', info.getValue()),
      })
    })
    .with('description', () => {
      return resthooksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format('description', info.getValue()),
      })
    })
    .with('topicIds', () => {
      return resthooksColumnHelper.accessor((row) => row.topicIds, {
        id: 'topicIds',
        header: label('topicIds'),
        cell: (info) => format('topicIds', info.getValue()),
      })
    })
    .with('active', () => {
      return resthooksColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format('active', info.getValue()),
      })
    })
    .with('ignoreEtagOnlyChanges', () => {
      return resthooksColumnHelper.accessor((row) => row.ignoreEtagOnlyChanges, {
        id: 'ignoreEtagOnlyChanges',
        header: label('ignoreEtagOnlyChanges'),
        cell: (info) => format('ignoreEtagOnlyChanges', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useResthooksTable = (args: ResthooksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiResthooks({
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
