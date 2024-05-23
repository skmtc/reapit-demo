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
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return invoicesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return invoicesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return invoicesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return invoicesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('reference', () => {
      return invoicesColumnHelper.accessor((row) => row.reference, {
        id: 'reference',
        header: label('reference'),
        cell: (info) => format(info.getValue(), 'reference'),
      })
    })
    .with('negotiatorId', () => {
      return invoicesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('propertyId', () => {
      return invoicesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('description', () => {
      return invoicesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('status', () => {
      return invoicesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('date', () => {
      return invoicesColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format(info.getValue(), 'date'),
      })
    })
    .with('dueDate', () => {
      return invoicesColumnHelper.accessor((row) => row.dueDate, {
        id: 'dueDate',
        header: label('dueDate'),
        cell: (info) => format(info.getValue(), 'dueDate'),
      })
    })
    .with('isRaised', () => {
      return invoicesColumnHelper.accessor((row) => row.isRaised, {
        id: 'isRaised',
        header: label('isRaised'),
        cell: (info) => format(info.getValue(), 'isRaised'),
      })
    })
    .with('netAmount', () => {
      return invoicesColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format(info.getValue(), 'netAmount'),
      })
    })
    .with('vatAmount', () => {
      return invoicesColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format(info.getValue(), 'vatAmount'),
      })
    })
    .with('outstandingAmount', () => {
      return invoicesColumnHelper.accessor((row) => row.outstandingAmount, {
        id: 'outstandingAmount',
        header: label('outstandingAmount'),
        cell: (info) => format(info.getValue(), 'outstandingAmount'),
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
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('negotiatorId', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('propertyId', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('invoiceId', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header: label('invoiceId'),
        cell: (info) => format(info.getValue(), 'invoiceId'),
      })
    })
    .with('description', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('type', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('date', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format(info.getValue(), 'date'),
      })
    })
    .with('netAmount', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format(info.getValue(), 'netAmount'),
      })
    })
    .with('vatAmount', () => {
      return invoicesPaymentsColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format(info.getValue(), 'vatAmount'),
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
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('negotiatorId', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('propertyId', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('invoiceId', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header: label('invoiceId'),
        cell: (info) => format(info.getValue(), 'invoiceId'),
      })
    })
    .with('description', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('date', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format(info.getValue(), 'date'),
      })
    })
    .with('netAmount', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format(info.getValue(), 'netAmount'),
      })
    })
    .with('vatAmount', () => {
      return invoicesCreditsColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format(info.getValue(), 'vatAmount'),
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
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return invoicesChargesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('type', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('invoiceId', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.invoiceId, {
        id: 'invoiceId',
        header: label('invoiceId'),
        cell: (info) => format(info.getValue(), 'invoiceId'),
      })
    })
    .with('propertyId', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('negotiatorId', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('vatCode', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.vatCode, {
        id: 'vatCode',
        header: label('vatCode'),
        cell: (info) => format(info.getValue(), 'vatCode'),
      })
    })
    .with('description', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('netAmount', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format(info.getValue(), 'netAmount'),
      })
    })
    .with('vatAmount', () => {
      return invoicesChargesColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format(info.getValue(), 'vatAmount'),
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
