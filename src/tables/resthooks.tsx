import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  url?: string | undefined
  description?: string | undefined
  topicIds?: Array<string> | undefined
  active?: boolean | undefined
  ignoreEtagOnlyChanges?: boolean | undefined
}
export type ResthooksArgs = {
  sortBy?: string | undefined
  active?: boolean | undefined
  columns: ColumnsList<ResthooksBody>
}

export const resthooksColumnHelper = createColumnHelper<ResthooksBody>()

export const getResthooksColumn = (property: string, modelConfig: ModelConfig<ResthooksBody>) => {
  return match(property)
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return resthooksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return resthooksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return resthooksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('url', () => {
      const { label: header, format } = modelConfig['url']

      return resthooksColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return resthooksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('topicIds', () => {
      const { label: header, format } = modelConfig['topicIds']

      return resthooksColumnHelper.accessor((row) => row.topicIds, {
        id: 'topicIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return resthooksColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('ignoreEtagOnlyChanges', () => {
      const { label: header, format } = modelConfig['ignoreEtagOnlyChanges']

      return resthooksColumnHelper.accessor((row) => row.ignoreEtagOnlyChanges, {
        id: 'ignoreEtagOnlyChanges',
        header,
        cell: (info) => format(info.getValue()),
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
