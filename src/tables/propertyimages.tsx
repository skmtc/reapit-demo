import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiPropertyImages } from '@/services/propertyimages.ts'

export const propertyImagesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  url: z.string().nullable().optional(),
  caption: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  order: z.number().int().nullable().optional(),
  fromArchive: z.boolean().nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type PropertyImagesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  propertyId?: string | undefined | null
  url?: string | undefined | null
  caption?: string | undefined | null
  type?: string | undefined | null
  order?: number | undefined | null
  fromArchive?: boolean | undefined | null
  _eTag?: string | undefined | null
}
export type PropertyImagesArgs = {
  sortBy?: string | undefined | null
  id?: Array<string> | undefined | null
  embed?: Array<'property'> | undefined | null
  propertyId?: Array<string> | undefined | null
  type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  fromArchive?: boolean | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<PropertyImagesBody>
}

export const propertyImagesColumnHelper = createColumnHelper<PropertyImagesBody>()

export const getPropertyImagesColumn = (property: string, { label, format }: ConfigItemLookup<PropertyImagesBody>) => {
  return match(property)
    .with('_links', () => {
      return propertyImagesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return propertyImagesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertyImagesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertyImagesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertyImagesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('propertyId', () => {
      return propertyImagesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('url', () => {
      return propertyImagesColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header: label('url'),
        cell: (info) => format(info.getValue(), 'url'),
      })
    })
    .with('caption', () => {
      return propertyImagesColumnHelper.accessor((row) => row.caption, {
        id: 'caption',
        header: label('caption'),
        cell: (info) => format(info.getValue(), 'caption'),
      })
    })
    .with('type', () => {
      return propertyImagesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('order', () => {
      return propertyImagesColumnHelper.accessor((row) => row.order, {
        id: 'order',
        header: label('order'),
        cell: (info) => format(info.getValue(), 'order'),
      })
    })
    .with('fromArchive', () => {
      return propertyImagesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .with('_eTag', () => {
      return propertyImagesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertyImagesTable = (args: PropertyImagesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertyImages({
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
