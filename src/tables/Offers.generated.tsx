import { offerModel, OfferModel } from 'schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiOffers } from 'services/Offers.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useOffersTableColumnHelper = createColumnHelper<OfferModel>();
export type UseOffersTableArgs = {sortBy?: string | undefined, embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | undefined, id?: Array<string> | undefined, applicantId?: Array<string> | undefined, propertyId?: Array<string> | undefined, status?: Array<'pending' | 'withdrawn' | 'rejected' | 'accepted' | 'noteOfInterest' | 'noteOfInterestWithdrawn'> | undefined, address?: string | undefined, name?: string | undefined, amountFrom?: number | undefined, amountTo?: number | undefined, dateFrom?: string | undefined, dateTo?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, metadata?: Array<string> | undefined, columns: ColumnsList<OfferModel>};
export const getuseOffersTableColumn = (property:string, modelConfig: ModelConfig<OfferModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useOffersTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useOffersTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useOffersTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useOffersTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useOffersTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('currency', () => {
      const { label: header, format, width, minWidth } = modelConfig['currency']

      return useOffersTableColumnHelper.accessor(row => row.currency, {
      id: 'currency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return useOffersTableColumnHelper.accessor(row => row.applicantId, {
      id: 'applicantId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('companyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['companyId']

      return useOffersTableColumnHelper.accessor(row => row.companyId, {
      id: 'companyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contactId', () => {
      const { label: header, format, width, minWidth } = modelConfig['contactId']

      return useOffersTableColumnHelper.accessor(row => row.contactId, {
      id: 'contactId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useOffersTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useOffersTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return useOffersTableColumnHelper.accessor(row => row.date, {
      id: 'date',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('amount', () => {
      const { label: header, format, width, minWidth } = modelConfig['amount']

      return useOffersTableColumnHelper.accessor(row => row.amount, {
      id: 'amount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useOffersTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('inclusions', () => {
      const { label: header, format, width, minWidth } = modelConfig['inclusions']

      return useOffersTableColumnHelper.accessor(row => row.inclusions, {
      id: 'inclusions',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('exclusions', () => {
      const { label: header, format, width, minWidth } = modelConfig['exclusions']

      return useOffersTableColumnHelper.accessor(row => row.exclusions, {
      id: 'exclusions',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('conditions', () => {
      const { label: header, format, width, minWidth } = modelConfig['conditions']

      return useOffersTableColumnHelper.accessor(row => row.conditions, {
      id: 'conditions',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return useOffersTableColumnHelper.accessor(row => row.related, {
      id: 'related',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useOffersTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useOffersTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useOffersTable = (args: UseOffersTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiOffers({
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