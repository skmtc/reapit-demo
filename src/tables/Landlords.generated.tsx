import { landlordModel, LandlordModel } from '@/schemas/landlordModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiLandlords, useGetApiLandlordsIdRelationships } from 'services/Landlords.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { landlordContactRelationshipModel, LandlordContactRelationshipModel } from '@/schemas/landlordContactRelationshipModel.generated.tsx'

export const useLandlordsTableColumnHelper = createColumnHelper<LandlordModel>();
export type UseLandlordsTableArgs = {sortBy?: string | undefined, embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined, id?: Array<string> | undefined, email?: Array<string> | undefined, officeId?: Array<string> | undefined, extrasField?: Array<string> | undefined, active?: boolean | undefined, address?: string | undefined, name?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, metadata?: Array<string> | undefined, columns: ColumnsList<LandlordModel>};
export const getuseLandlordsTableColumn = (property:string, modelConfig: ModelConfig<LandlordModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useLandlordsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useLandlordsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useLandlordsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useLandlordsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useLandlordsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return useLandlordsTableColumnHelper.accessor(row => row.active, {
      id: 'active',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('solicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['solicitorId']

      return useLandlordsTableColumnHelper.accessor(row => row.solicitorId, {
      id: 'solicitorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('officeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeId']

      return useLandlordsTableColumnHelper.accessor(row => row.officeId, {
      id: 'officeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return useLandlordsTableColumnHelper.accessor(row => row.source, {
      id: 'source',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return useLandlordsTableColumnHelper.accessor(row => row.related, {
      id: 'related',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useLandlordsTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return useLandlordsTableColumnHelper.accessor(row => row.extrasField, {
      id: 'extrasField',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useLandlordsTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useLandlordsTable = (args: UseLandlordsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlords({
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
export const useLandlordsIdRelationshipsTableColumnHelper = createColumnHelper<LandlordContactRelationshipModel>();
export type UseLandlordsIdRelationshipsTableArgs = {id: string, columns: ColumnsList<LandlordContactRelationshipModel>};
export const getuseLandlordsIdRelationshipsTableColumn = (property:string, modelConfig: ModelConfig<LandlordContactRelationshipModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('landlordId', () => {
      const { label: header, format, width, minWidth } = modelConfig['landlordId']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.landlordId, {
      id: 'landlordId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.associatedType, {
      id: 'associatedType',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.associatedId, {
      id: 'associatedId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('isMain', () => {
      const { label: header, format, width, minWidth } = modelConfig['isMain']

      return useLandlordsIdRelationshipsTableColumnHelper.accessor(row => row.isMain, {
      id: 'isMain',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useLandlordsIdRelationshipsTable = (args: UseLandlordsIdRelationshipsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlordsIdRelationships({
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