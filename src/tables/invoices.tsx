import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiInvoices,
  useGetApiInvoicesPayments,
  useGetApiInvoicesCredits,
  useGetApiInvoicesCharges,
} from '@/services/invoices.ts'

export const invoicesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  reference: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  date: z.string().nullable().optional(),
  dueDate: z.string().nullable().optional(),
  isRaised: z.boolean().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  vatAmount: z.number().nullable().optional(),
  outstandingAmount: z.number().nullable().optional(),
})
export type InvoicesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  reference?: string | undefined | null
  negotiatorId?: string | undefined | null
  propertyId?: string | undefined | null
  description?: string | undefined | null
  status?: string | undefined | null
  date?: string | undefined | null
  dueDate?: string | undefined | null
  isRaised?: boolean | undefined | null
  netAmount?: number | undefined | null
  vatAmount?: number | undefined | null
  outstandingAmount?: number | undefined | null
}
export type InvoicesArgs = {
  sortBy?: string | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  status?: Array<'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'> | undefined | null
  dateFrom?: string | undefined | null
  dateTo?: string | undefined | null
  dueDateFrom?: string | undefined | null
  dueDateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<InvoicesBody>
}
export const invoicesPaymentsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  invoiceId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  date: z.string().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  vatAmount: z.number().nullable().optional(),
})
export type InvoicesPaymentsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  negotiatorId?: string | undefined | null
  propertyId?: string | undefined | null
  invoiceId?: string | undefined | null
  description?: string | undefined | null
  type?: string | undefined | null
  date?: string | undefined | null
  netAmount?: number | undefined | null
  vatAmount?: number | undefined | null
}
export type InvoicesPaymentsArgs = {
  sortBy?: string | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  invoiceId?: Array<string> | undefined | null
  type?: Array<'payment' | 'accountPayment' | 'advertisingPayment' | 'buyerDeposit'> | undefined | null
  dateFrom?: string | undefined | null
  dateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<InvoicesPaymentsBody>
}
export const invoicesCreditsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  invoiceId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  date: z.string().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  vatAmount: z.number().nullable().optional(),
})
export type InvoicesCreditsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  negotiatorId?: string | undefined | null
  propertyId?: string | undefined | null
  invoiceId?: string | undefined | null
  description?: string | undefined | null
  date?: string | undefined | null
  netAmount?: number | undefined | null
  vatAmount?: number | undefined | null
}
export type InvoicesCreditsArgs = {
  sortBy?: string | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  invoiceId?: Array<string> | undefined | null
  dateFrom?: string | undefined | null
  dateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<InvoicesCreditsBody>
}
export const invoicesChargesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  invoiceId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  vatCode: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  vatAmount: z.number().nullable().optional(),
})
export type InvoicesChargesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  type?: string | undefined | null
  invoiceId?: string | undefined | null
  propertyId?: string | undefined | null
  negotiatorId?: string | undefined | null
  vatCode?: string | undefined | null
  description?: string | undefined | null
  netAmount?: number | undefined | null
  vatAmount?: number | undefined | null
}
export type InvoicesChargesArgs = {
  sortBy?: string | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  invoiceId?: Array<string> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<InvoicesChargesBody>
}

export const invoicesColumnHelper = createColumnHelper<InvoicesBody>()

export const getInvoicesColumn = (property: string, { label, format }: ConfigItemLookup<InvoicesBody>) => {
  return match(property)
    .with('_links', () => {
      return invoicesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return invoicesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return invoicesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return invoicesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return invoicesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('reference', () => {
      return invoicesColumnHelper.accessor((row) => row.reference, {
        id: 'reference',
        header: label('reference'),
        cell: (info) => format('reference', info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      return invoicesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format('negotiatorId', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return invoicesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('description', () => {
      return invoicesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format('description', info.getValue()),
      })
    })
    .with('status', () => {
      return invoicesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format('status', info.getValue()),
      })
    })
    .with('date', () => {
      return invoicesColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format('date', info.getValue()),
      })
    })
    .with('dueDate', () => {
      return invoicesColumnHelper.accessor((row) => row.dueDate, {
        id: 'dueDate',
        header: label('dueDate'),
        cell: (info) => format('dueDate', info.getValue()),
      })
    })
    .with('isRaised', () => {
      return invoicesColumnHelper.accessor((row) => row.isRaised, {
        id: 'isRaised',
        header: label('isRaised'),
        cell: (info) => format('isRaised', info.getValue()),
      })
    })
    .with('netAmount', () => {
      return invoicesColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format('netAmount', info.getValue()),
      })
    })
    .with('vatAmount', () => {
      return invoicesColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format('vatAmount', info.getValue()),
      })
    })
    .with('outstandingAmount', () => {
      return invoicesColumnHelper.accessor((row) => row.outstandingAmount, {
        id: 'outstandingAmount',
        header: label('outstandingAmount'),
        cell: (info) => format('outstandingAmount', info.getValue()),
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
export const invoicesPaymentsColumnHelper = createColumnHelper<InvoicesPaymentsBody>()

export const getInvoicesPaymentsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<InvoicesPaymentsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format('negotiatorId', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('invoiceId', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header: label('invoiceId'),
        cell: (info) => format('invoiceId', info.getValue()),
      })
    })
    .with('description', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format('description', info.getValue()),
      })
    })
    .with('type', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format('type', info.getValue()),
      })
    })
    .with('date', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format('date', info.getValue()),
      })
    })
    .with('netAmount', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format('netAmount', info.getValue()),
      })
    })
    .with('vatAmount', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format('vatAmount', info.getValue()),
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
export const invoicesCreditsColumnHelper = createColumnHelper<InvoicesCreditsBody>()

export const getInvoicesCreditsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<InvoicesCreditsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format('negotiatorId', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('invoiceId', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header: label('invoiceId'),
        cell: (info) => format('invoiceId', info.getValue()),
      })
    })
    .with('description', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format('description', info.getValue()),
      })
    })
    .with('date', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format('date', info.getValue()),
      })
    })
    .with('netAmount', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format('netAmount', info.getValue()),
      })
    })
    .with('vatAmount', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format('vatAmount', info.getValue()),
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
export const invoicesChargesColumnHelper = createColumnHelper<InvoicesChargesBody>()

export const getInvoicesChargesColumn = (
  property: string,
  { label, format }: ConfigItemLookup<InvoicesChargesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return invoicesChargesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return invoicesChargesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('type', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format('type', info.getValue()),
      })
    })
    .with('invoiceId', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header: label('invoiceId'),
        cell: (info) => format('invoiceId', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format('negotiatorId', info.getValue()),
      })
    })
    .with('vatCode', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.vatCode, {
        id: 'vatCode',
        header: label('vatCode'),
        cell: (info) => format('vatCode', info.getValue()),
      })
    })
    .with('description', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format('description', info.getValue()),
      })
    })
    .with('netAmount', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format('netAmount', info.getValue()),
      })
    })
    .with('vatAmount', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format('vatAmount', info.getValue()),
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
