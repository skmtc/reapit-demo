import { referralModel, ReferralModel } from '@/schemas/referralModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiReferrals } from 'services/Referrals.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useReferralsTableColumnHelper = createColumnHelper<ReferralModel>()
export type UseReferralsTableArgs = {
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
export const getuseReferralsTableColumn = (property: string, modelConfig: ModelConfig<ReferralModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useReferralsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useReferralsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useReferralsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useReferralsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useReferralsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('referralTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['referralTypeId']

      return useReferralsTableColumnHelper.accessor((row) => row.referralTypeId, {
        id: 'referralTypeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useReferralsTableColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useReferralsTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useReferralsTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return useReferralsTableColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contactId', () => {
      const { label: header, format, width, minWidth } = modelConfig['contactId']

      return useReferralsTableColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useReferralsTableColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('amount', () => {
      const { label: header, format, width, minWidth } = modelConfig['amount']

      return useReferralsTableColumnHelper.accessor((row) => row.amount, {
        id: 'amount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('paid', () => {
      const { label: header, format, width, minWidth } = modelConfig['paid']

      return useReferralsTableColumnHelper.accessor((row) => row.paid, {
        id: 'paid',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('accepted', () => {
      const { label: header, format, width, minWidth } = modelConfig['accepted']

      return useReferralsTableColumnHelper.accessor((row) => row.accepted, {
        id: 'accepted',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return useReferralsTableColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useReferralsTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useReferralsTableColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export const useReferralsTable = (args: UseReferralsTableArgs) => {
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
