import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  propertyId?: string | undefined
  url?: string | undefined
  caption?: string | undefined
  type?: string | undefined
  order?: number | undefined
  fromArchive?: boolean | undefined
  _eTag?: string | undefined
}
export type PropertyImagesArgs = {
  sortBy?: string | undefined
  id?: Array<string> | undefined
  embed?: Array<'property'> | undefined
  propertyId?: Array<string> | undefined
  type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  fromArchive?: boolean | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<PropertyImagesBody>
}

export const propertyImagesColumnHelper = createColumnHelper<PropertyImagesBody>()

export const getPropertyImagesColumn = (property: string, modelConfig: ModelConfig<PropertyImagesBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertyImagesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertyImagesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertyImagesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertyImagesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertyImagesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return propertyImagesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('url', () => {
      const { label: header, format } = modelConfig['url']

      return propertyImagesColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('caption', () => {
      const { label: header, format } = modelConfig['caption']

      return propertyImagesColumnHelper.accessor((row) => row.caption, {
        id: 'caption',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return propertyImagesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('order', () => {
      const { label: header, format } = modelConfig['order']

      return propertyImagesColumnHelper.accessor((row) => row.order, {
        id: 'order',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return propertyImagesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertyImagesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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
