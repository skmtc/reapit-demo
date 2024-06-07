import { propertyImageModel, PropertyImageModel } from '@/schemas/propertyImageModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiPropertyImages } from 'services/PropertyImages.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const usePropertyImagesTableColumnHelper = createColumnHelper<PropertyImageModel>();
export type UsePropertyImagesTableArgs = {sortBy?: string | undefined, id?: Array<string> | undefined, embed?: Array<'property'> | undefined, propertyId?: Array<string> | undefined, type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, fromArchive?: boolean | undefined, metadata?: Array<string> | undefined, columns: ColumnsList<PropertyImageModel>};
export const getusePropertyImagesTableColumn = (property:string, modelConfig: ModelConfig<PropertyImageModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return usePropertyImagesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return usePropertyImagesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return usePropertyImagesTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return usePropertyImagesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return usePropertyImagesTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return usePropertyImagesTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('url', () => {
      const { label: header, format, width, minWidth } = modelConfig['url']

      return usePropertyImagesTableColumnHelper.accessor(row => row.url, {
      id: 'url',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('caption', () => {
      const { label: header, format, width, minWidth } = modelConfig['caption']

      return usePropertyImagesTableColumnHelper.accessor(row => row.caption, {
      id: 'caption',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return usePropertyImagesTableColumnHelper.accessor(row => row.type, {
      id: 'type',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('order', () => {
      const { label: header, format, width, minWidth } = modelConfig['order']

      return usePropertyImagesTableColumnHelper.accessor(row => row.order, {
      id: 'order',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return usePropertyImagesTableColumnHelper.accessor(row => row.fromArchive, {
      id: 'fromArchive',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return usePropertyImagesTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const usePropertyImagesTable = (args: UsePropertyImagesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertyImages({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};