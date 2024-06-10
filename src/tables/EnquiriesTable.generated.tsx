import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiEnquiries } from '@/services/Enquiries.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { EnquiryModel } from '@/schemas/enquiryModel.generated.tsx'

export const useEnquiriesTableColumnHelper = createColumnHelper<EnquiryModel>()
export type UseEnquiriesTableArgs = {
  sortBy?: string | null | undefined
  enquiryType?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  columns: ColumnsList<EnquiryModel>
}
export const getuseEnquiriesTableColumn = (property: string, modelConfig: ModelConfig<EnquiryModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useEnquiriesTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useEnquiriesTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useEnquiriesTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useEnquiriesTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useEnquiriesTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('title', () => {
      const { label: header, format, width, minWidth } = modelConfig['title']

      return useEnquiriesTableColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('forename', () => {
      const { label: header, format, width, minWidth } = modelConfig['forename']

      return useEnquiriesTableColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('surname', () => {
      const { label: header, format, width, minWidth } = modelConfig['surname']

      return useEnquiriesTableColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('enquiryType', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiryType']

      return useEnquiriesTableColumnHelper.accessor((row) => row.enquiryType, {
        id: 'enquiryType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('message', () => {
      const { label: header, format, width, minWidth } = modelConfig['message']

      return useEnquiriesTableColumnHelper.accessor((row) => row.message, {
        id: 'message',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useEnquiriesTableColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingConsent']

      return useEnquiriesTableColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('position', () => {
      const { label: header, format, width, minWidth } = modelConfig['position']

      return useEnquiriesTableColumnHelper.accessor((row) => row.position, {
        id: 'position',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeId']

      return useEnquiriesTableColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return useEnquiriesTableColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useEnquiriesTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('sourceName', () => {
      const { label: header, format, width, minWidth } = modelConfig['sourceName']

      return useEnquiriesTableColumnHelper.accessor((row) => row.sourceName, {
        id: 'sourceName',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('homePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['homePhone']

      return useEnquiriesTableColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('workPhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['workPhone']

      return useEnquiriesTableColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['mobilePhone']

      return useEnquiriesTableColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('email', () => {
      const { label: header, format, width, minWidth } = modelConfig['email']

      return useEnquiriesTableColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('address', () => {
      const { label: header, format, width, minWidth } = modelConfig['address']

      return useEnquiriesTableColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buying', () => {
      const { label: header, format, width, minWidth } = modelConfig['buying']

      return useEnquiriesTableColumnHelper.accessor((row) => row.buying, {
        id: 'buying',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('renting', () => {
      const { label: header, format, width, minWidth } = modelConfig['renting']

      return useEnquiriesTableColumnHelper.accessor((row) => row.renting, {
        id: 'renting',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedrooms']

      return useEnquiriesTableColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyIds']

      return useEnquiriesTableColumnHelper.accessor((row) => row.propertyIds, {
        id: 'propertyIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useEnquiriesTableColumnHelper.accessor((row) => row._eTag, {
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
export const useEnquiriesTable = (args: UseEnquiriesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiEnquiries({
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
