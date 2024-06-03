import {
  invoiceModel,
  InvoiceModel,
  paymentModel,
  PaymentModel,
  creditModel,
  CreditModel,
  chargeModel,
  ChargeModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiInvoices,
  useGetApiInvoicesPayments,
  useGetApiInvoicesCredits,
  useGetApiInvoicesCharges,
} from '@/services/invoices.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export type UseInvoicesTableArgs = {
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?: Array<'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'> | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  dueDateFrom?: string | undefined
  dueDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<InvoiceModel>
}
export type UseInvoicesPaymentsTableArgs = {
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  type?: Array<'payment' | 'accountPayment' | 'advertisingPayment' | 'buyerDeposit'> | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<PaymentModel>
}
export type UseInvoicesCreditsTableArgs = {
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<CreditModel>
}
export type UseInvoicesChargesTableArgs = {
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<ChargeModel>
}

export const useInvoicesTableColumnHelper = createColumnHelper<InvoiceModel>()

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
export const useInvoicesPaymentsTableColumnHelper = createColumnHelper<PaymentModel>()

export const getuseInvoicesPaymentsTableColumn = (property: string, modelConfig: ModelConfig<PaymentModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('invoiceId', () => {
      const { label: header, format, width, minWidth } = modelConfig['invoiceId']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return useInvoicesPaymentsTableColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
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

export const useInvoicesPaymentsTable = (args: UseInvoicesPaymentsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoicesPayments({
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
export const useInvoicesCreditsTableColumnHelper = createColumnHelper<CreditModel>()

export const getuseInvoicesCreditsTableColumn = (property: string, modelConfig: ModelConfig<CreditModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('invoiceId', () => {
      const { label: header, format, width, minWidth } = modelConfig['invoiceId']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return useInvoicesCreditsTableColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
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

export const useInvoicesCreditsTable = (args: UseInvoicesCreditsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoicesCredits({
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
export const useInvoicesChargesTableColumnHelper = createColumnHelper<ChargeModel>()

export const getuseInvoicesChargesTableColumn = (property: string, modelConfig: ModelConfig<ChargeModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('invoiceId', () => {
      const { label: header, format, width, minWidth } = modelConfig['invoiceId']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatCode', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatCode']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.vatCode, {
        id: 'vatCode',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return useInvoicesChargesTableColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
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

export const useInvoicesChargesTable = (args: UseInvoicesChargesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoicesCharges({
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
