import {
  landlordModel,
  LandlordModel,
  landlordContactRelationshipModel,
  LandlordContactRelationshipModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiLandlords, useGetApiLandlordsIdRelationships } from '@/services/landlords.generated.ts'

export type LandlordsArgs = {
  sortBy?: string | undefined
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined
  id?: Array<string> | undefined
  email?: Array<string> | undefined
  officeId?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  active?: boolean | undefined
  address?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<LandlordModel>
}
export type LandlordsIdRelationshipsArgs = { id: string; columns: ColumnsList<LandlordContactRelationshipModel> }

export const landlordsColumnHelper = createColumnHelper<LandlordModel>()

export const getLandlordsColumn = (property: string, modelConfig: ModelConfig<LandlordModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return landlordsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return landlordsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return landlordsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return landlordsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return landlordsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return landlordsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('solicitorId', () => {
      const { label: header, format } = modelConfig['solicitorId']

      return landlordsColumnHelper.accessor((row) => row.solicitorId, {
        id: 'solicitorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeId', () => {
      const { label: header, format } = modelConfig['officeId']

      return landlordsColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('source', () => {
      const { label: header, format } = modelConfig['source']

      return landlordsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('related', () => {
      const { label: header, format } = modelConfig['related']

      return landlordsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return landlordsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('extrasField', () => {
      const { label: header, format } = modelConfig['extrasField']

      return landlordsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return landlordsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useLandlordsTable = (args: LandlordsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlords({
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
export const landlordsIdRelationshipsColumnHelper = createColumnHelper<LandlordContactRelationshipModel>()

export const getLandlordsIdRelationshipsColumn = (
  property: string,
  modelConfig: ModelConfig<LandlordContactRelationshipModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('landlordId', () => {
      const { label: header, format } = modelConfig['landlordId']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedType', () => {
      const { label: header, format } = modelConfig['associatedType']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedId', () => {
      const { label: header, format } = modelConfig['associatedId']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isMain', () => {
      const { label: header, format } = modelConfig['isMain']

      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useLandlordsIdRelationshipsTable = (args: LandlordsIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlordsIdRelationships({
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
