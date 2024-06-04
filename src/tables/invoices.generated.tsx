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
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiInvoices,
  useGetApiInvoicesPayments,
  useGetApiInvoicesCredits,
  useGetApiInvoicesCharges,
} from '@/services/invoices.generated.ts'

export type InvoicesArgs = {
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
export type InvoicesPaymentsArgs = {
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
export type InvoicesCreditsArgs = {
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
export type InvoicesChargesArgs = {
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

export const invoicesColumnHelper = createColumnHelper<InvoiceModel>()

export const getInvoicesColumn = (property: string, modelConfig: ModelConfig<InvoiceModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return invoicesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return invoicesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return invoicesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return invoicesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return invoicesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('reference', () => {
      const { label: header, format, width, minWidth } = modelConfig['reference']

      return invoicesColumnHelper.accessor((row) => row.reference, {
        id: 'reference',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return invoicesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return invoicesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return invoicesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return invoicesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return invoicesColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('dueDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['dueDate']

      return invoicesColumnHelper.accessor((row) => row.dueDate, {
        id: 'dueDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isRaised', () => {
      const { label: header, format, width, minWidth } = modelConfig['isRaised']

      return invoicesColumnHelper.accessor((row) => row.isRaised, {
        id: 'isRaised',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return invoicesColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return invoicesColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('outstandingAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['outstandingAmount']

      return invoicesColumnHelper.accessor((row) => row.outstandingAmount, {
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

export const useInvoicesTable = (args: InvoicesArgs) => {
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
export const invoicesPaymentsColumnHelper = createColumnHelper<PaymentModel>()

export const getInvoicesPaymentsColumn = (property: string, modelConfig: ModelConfig<PaymentModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return invoicesPaymentsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return invoicesPaymentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return invoicesPaymentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return invoicesPaymentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return invoicesPaymentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return invoicesPaymentsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return invoicesPaymentsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('invoiceId', () => {
      const { label: header, format, width, minWidth } = modelConfig['invoiceId']

      return invoicesPaymentsColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return invoicesPaymentsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return invoicesPaymentsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return invoicesPaymentsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return invoicesPaymentsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return invoicesPaymentsColumnHelper.accessor((row) => row.vatAmount, {
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

export const useInvoicesPaymentsTable = (args: InvoicesPaymentsArgs) => {
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
export const invoicesCreditsColumnHelper = createColumnHelper<CreditModel>()

export const getInvoicesCreditsColumn = (property: string, modelConfig: ModelConfig<CreditModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return invoicesCreditsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return invoicesCreditsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return invoicesCreditsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return invoicesCreditsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return invoicesCreditsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return invoicesCreditsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return invoicesCreditsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('invoiceId', () => {
      const { label: header, format, width, minWidth } = modelConfig['invoiceId']

      return invoicesCreditsColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return invoicesCreditsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return invoicesCreditsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return invoicesCreditsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return invoicesCreditsColumnHelper.accessor((row) => row.vatAmount, {
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

export const useInvoicesCreditsTable = (args: InvoicesCreditsArgs) => {
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
export const invoicesChargesColumnHelper = createColumnHelper<ChargeModel>()

export const getInvoicesChargesColumn = (property: string, modelConfig: ModelConfig<ChargeModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return invoicesChargesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return invoicesChargesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return invoicesChargesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return invoicesChargesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return invoicesChargesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return invoicesChargesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('invoiceId', () => {
      const { label: header, format, width, minWidth } = modelConfig['invoiceId']

      return invoicesChargesColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return invoicesChargesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return invoicesChargesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatCode', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatCode']

      return invoicesChargesColumnHelper.accessor((row) => row.vatCode, {
        id: 'vatCode',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return invoicesChargesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return invoicesChargesColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return invoicesChargesColumnHelper.accessor((row) => row.vatAmount, {
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

export const useInvoicesChargesTable = (args: InvoicesChargesArgs) => {
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
