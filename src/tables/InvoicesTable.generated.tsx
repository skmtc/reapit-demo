import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiInvoices } from '@/services/Invoices.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { InvoiceModel } from '@/schemas/invoiceModel.generated.tsx'

export const useInvoicesTableColumnHelper = createColumnHelper<InvoiceModel>()
export type UseInvoicesTableArgs = {
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  status?: Array<'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  dueDateFrom?: string | null | undefined
  dueDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  columns: ColumnsList<InvoiceModel>
}
export const getuseInvoicesTableColumn = (property: string, modelConfig: ModelConfig<InvoiceModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useInvoicesTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useInvoicesTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useInvoicesTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useInvoicesTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useInvoicesTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('reference', () => {
      const { label: header, format, width, minWidth } = modelConfig['reference']

      return useInvoicesTableColumnHelper.accessor((row) => row.reference, {
        id: 'reference',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useInvoicesTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useInvoicesTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useInvoicesTableColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useInvoicesTableColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return useInvoicesTableColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('dueDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['dueDate']

      return useInvoicesTableColumnHelper.accessor((row) => row.dueDate, {
        id: 'dueDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isRaised', () => {
      const { label: header, format, width, minWidth } = modelConfig['isRaised']

      return useInvoicesTableColumnHelper.accessor((row) => row.isRaised, {
        id: 'isRaised',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return useInvoicesTableColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return useInvoicesTableColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('outstandingAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['outstandingAmount']

      return useInvoicesTableColumnHelper.accessor((row) => row.outstandingAmount, {
        id: 'outstandingAmount',
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
export const useInvoicesTable = (args: UseInvoicesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoices({
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
