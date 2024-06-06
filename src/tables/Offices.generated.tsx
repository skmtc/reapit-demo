import { officeModel, OfficeModel } from 'schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiOffices } from 'services/Offices.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useOfficesTableColumnHelper = createColumnHelper<OfficeModel>();
export type UseOfficesTableArgs = {sortBy?: string | undefined, embed?: Array<'negotiators'> | undefined, id?: Array<string> | undefined, address?: string | undefined, name?: string | undefined, region?: string | undefined, active?: boolean | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, metadata?: Array<string> | undefined, extrasField?: Array<string> | undefined, columns: ColumnsList<OfficeModel>};
export const getuseOfficesTableColumn = (property:string, modelConfig: ModelConfig<OfficeModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useOfficesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useOfficesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useOfficesTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useOfficesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useOfficesTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('name', () => {
      const { label: header, format, width, minWidth } = modelConfig['name']

      return useOfficesTableColumnHelper.accessor(row => row.name, {
      id: 'name',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('manager', () => {
      const { label: header, format, width, minWidth } = modelConfig['manager']

      return useOfficesTableColumnHelper.accessor(row => row.manager, {
      id: 'manager',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return useOfficesTableColumnHelper.accessor(row => row.active, {
      id: 'active',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('region', () => {
      const { label: header, format, width, minWidth } = modelConfig['region']

      return useOfficesTableColumnHelper.accessor(row => row.region, {
      id: 'region',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('address', () => {
      const { label: header, format, width, minWidth } = modelConfig['address']

      return useOfficesTableColumnHelper.accessor(row => row.address, {
      id: 'address',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalContactDetails', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalContactDetails']

      return useOfficesTableColumnHelper.accessor(row => row.additionalContactDetails, {
      id: 'additionalContactDetails',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('workPhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['workPhone']

      return useOfficesTableColumnHelper.accessor(row => row.workPhone, {
      id: 'workPhone',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('email', () => {
      const { label: header, format, width, minWidth } = modelConfig['email']

      return useOfficesTableColumnHelper.accessor(row => row.email, {
      id: 'email',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useOfficesTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useOfficesTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return useOfficesTableColumnHelper.accessor(row => row.extrasField, {
      id: 'extrasField',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useOfficesTable = (args: UseOfficesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiOffices({
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