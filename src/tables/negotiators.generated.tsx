import { negotiatorModel, NegotiatorModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiNegotiators } from '@/services/negotiators.generated.ts'

export type NegotiatorsArgs = {
  sortBy?: string | undefined
  embed?: Array<'office'> | undefined
  id?: Array<string> | undefined
  officeId?: Array<string> | undefined
  email?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  active?: boolean | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<NegotiatorModel>
}

export const negotiatorsColumnHelper = createColumnHelper<NegotiatorModel>()

export const getNegotiatorsColumn = (property: string, modelConfig: ModelConfig<NegotiatorModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return negotiatorsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return negotiatorsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return negotiatorsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return negotiatorsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return negotiatorsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('name', () => {
      const { label: header, format } = modelConfig['name']

      return negotiatorsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('jobTitle', () => {
      const { label: header, format } = modelConfig['jobTitle']

      return negotiatorsColumnHelper.accessor((row) => row.jobTitle, {
        id: 'jobTitle',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeId', () => {
      const { label: header, format } = modelConfig['officeId']

      return negotiatorsColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('workPhone', () => {
      const { label: header, format } = modelConfig['workPhone']

      return negotiatorsColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format } = modelConfig['mobilePhone']

      return negotiatorsColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('email', () => {
      const { label: header, format } = modelConfig['email']

      return negotiatorsColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('profileImageUrl', () => {
      const { label: header, format } = modelConfig['profileImageUrl']

      return negotiatorsColumnHelper.accessor((row) => row.profileImageUrl, {
        id: 'profileImageUrl',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return negotiatorsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('diaryNegotiatorIds', () => {
      const { label: header, format } = modelConfig['diaryNegotiatorIds']

      return negotiatorsColumnHelper.accessor((row) => row.diaryNegotiatorIds, {
        id: 'diaryNegotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('diaryOfficeIds', () => {
      const { label: header, format } = modelConfig['diaryOfficeIds']

      return negotiatorsColumnHelper.accessor((row) => row.diaryOfficeIds, {
        id: 'diaryOfficeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalContactDetails', () => {
      const { label: header, format } = modelConfig['additionalContactDetails']

      return negotiatorsColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return negotiatorsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return negotiatorsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useNegotiatorsTable = (args: NegotiatorsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiNegotiators({
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
