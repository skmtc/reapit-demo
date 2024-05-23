import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiAreas } from '@/services/areas.ts'

export const areasBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  type: z.string().nullable().optional(),
  area: z.array(z.string()).nullable().optional(),
  departmentIds: z.array(z.string()).nullable().optional(),
  officeIds: z.array(z.string()).nullable().optional(),
  parentIds: z.array(z.string()).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type AreasBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  name?: string | undefined | null
  active?: boolean | undefined | null
  type?: string | undefined | null
  area?: Array<string> | undefined | null
  departmentIds?: Array<string> | undefined | null
  officeIds?: Array<string> | undefined | null
  parentIds?: Array<string> | undefined | null
  _eTag?: string | undefined | null
}
export type AreasArgs = {
  sortBy?: string | undefined | null
  id?: Array<string> | undefined | null
  departmentId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  name?: string | undefined | null
  active?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<AreasBody>
}

export const areasColumnHelper = createColumnHelper<AreasBody>()

export const getAreasColumn = (property: string, { label, format }: ConfigItemLookup<AreasBody>) => {
  return match(property)
    .with('_links', () => {
      return areasColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return areasColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return areasColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return areasColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return areasColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('name', () => {
      return areasColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format(info.getValue(), 'name'),
      })
    })
    .with('active', () => {
      return areasColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format(info.getValue(), 'active'),
      })
    })
    .with('type', () => {
      return areasColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('area', () => {
      return areasColumnHelper.accessor((row) => row.area, {
        id: 'area',
        header: label('area'),
        cell: (info) => format(info.getValue(), 'area'),
      })
    })
    .with('departmentIds', () => {
      return areasColumnHelper.accessor((row) => row.departmentIds, {
        id: 'departmentIds',
        header: label('departmentIds'),
        cell: (info) => format(info.getValue(), 'departmentIds'),
      })
    })
    .with('officeIds', () => {
      return areasColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header: label('officeIds'),
        cell: (info) => format(info.getValue(), 'officeIds'),
      })
    })
    .with('parentIds', () => {
      return areasColumnHelper.accessor((row) => row.parentIds, {
        id: 'parentIds',
        header: label('parentIds'),
        cell: (info) => format(info.getValue(), 'parentIds'),
      })
    })
    .with('_eTag', () => {
      return areasColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useAreasTable = (args: AreasArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiAreas({
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
