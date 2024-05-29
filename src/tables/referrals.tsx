import { referralModel, ReferralModel, referralTypeModel, ReferralTypeModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { z } from 'zod'
import { useGetApiReferrals, useGetApiReferralsTypes } from '@/services/referrals.ts'

export type ReferralsArgs = {
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  referralTypeId?: Array<string> | undefined
  status?: Array<'sent' | 'inProgress' | 'succeeded' | 'cancelled' | 'failed' | 'paid' | 'declined'> | undefined
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | undefined
  sortBy?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<ReferralModel>
}
export type ReferralsTypesArgs = {
  id?: Array<string> | undefined
  sortBy?: string | undefined
  columns: ColumnsList<ReferralTypeModel>
}

export const referralsColumnHelper = createColumnHelper<ReferralModel>()

export const getReferralsColumn = (property: string, modelConfig: ModelConfig<ReferralModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return referralsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return referralsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return referralsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return referralsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return referralsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('referralTypeId', () => {
      const { label: header, format } = modelConfig['referralTypeId']

      return referralsColumnHelper.accessor((row) => row.referralTypeId, {
        id: 'referralTypeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return referralsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return referralsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return referralsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('applicantId', () => {
      const { label: header, format } = modelConfig['applicantId']

      return referralsColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contactId', () => {
      const { label: header, format } = modelConfig['contactId']

      return referralsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return referralsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('amount', () => {
      const { label: header, format } = modelConfig['amount']

      return referralsColumnHelper.accessor((row) => row.amount, {
        id: 'amount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('paid', () => {
      const { label: header, format } = modelConfig['paid']

      return referralsColumnHelper.accessor((row) => row.paid, {
        id: 'paid',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('accepted', () => {
      const { label: header, format } = modelConfig['accepted']

      return referralsColumnHelper.accessor((row) => row.accepted, {
        id: 'accepted',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('related', () => {
      const { label: header, format } = modelConfig['related']

      return referralsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return referralsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return referralsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useReferralsTable = (args: ReferralsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiReferrals({
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
export const referralsTypesColumnHelper = createColumnHelper<ReferralTypeModel>()

export const getReferralsTypesColumn = (property: string, modelConfig: ModelConfig<ReferralTypeModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return referralsTypesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return referralsTypesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return referralsTypesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('name', () => {
      const { label: header, format } = modelConfig['name']

      return referralsTypesColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useReferralsTypesTable = (args: ReferralsTypesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiReferralsTypes({
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
