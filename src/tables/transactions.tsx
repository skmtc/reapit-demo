import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiTransactions, useGetApiTransactionsNominalAccounts } from '@/services/transactions.ts'

export const transactionsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  category: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  transactionType: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  ledger: z.string().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  taxAmount: z.number().nullable().optional(),
  grossAmount: z.number().nullable().optional(),
  outstanding: z.number().nullable().optional(),
  companyId: z.string().nullable().optional(),
  landlordId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  tenancyId: z.string().nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type TransactionsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  category?: string | undefined | null
  type?: string | undefined | null
  transactionType?: string | undefined | null
  description?: string | undefined | null
  status?: string | undefined | null
  ledger?: string | undefined | null
  netAmount?: number | undefined | null
  taxAmount?: number | undefined | null
  grossAmount?: number | undefined | null
  outstanding?: number | undefined | null
  companyId?: string | undefined | null
  landlordId?: string | undefined | null
  propertyId?: string | undefined | null
  tenancyId?: string | undefined | null
  _eTag?: string | undefined | null
}
export type TransactionsArgs = {
  sortBy?: string | undefined | null
  id?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  landlordId?: Array<string> | undefined | null
  tenancyId?: Array<string> | undefined | null
  status?: Array<'awaitingAuthorisation' | 'awaitingPosting' | 'posted' | 'rejected'> | undefined | null
  type?:
    | Array<
        | 'creditAdjustment'
        | 'creditNoteCorrection'
        | 'creditNoteGoodwillPayment'
        | 'creditNoteRefund'
        | 'creditNoteRepayment'
        | 'creditNoteWriteOff'
        | 'debitAdjustment'
        | 'deposit'
        | 'float'
        | 'invoice'
        | 'journal'
        | 'openingBalanceDr'
        | 'openingBalancingCr'
        | 'payment'
        | 'reserveFunds'
        | 'transfer'
      >
    | undefined
    | null
  ledger?: Array<'landlord' | 'tenant' | 'vendor'> | undefined | null
  category?:
    | Array<
        | 'advertisingCharge'
        | 'accountTransfer'
        | 'bankCharges'
        | 'buyerAdminFee'
        | 'buyerDeposit'
        | 'buyerPayment'
        | 'deposit'
        | 'depositDeduction'
        | 'depositRefund'
        | 'depositTransfer'
        | 'depositTransferToAgent'
        | 'depositTransferToLandlord'
        | 'depositTransferToScheme'
        | 'estateServiceCharge'
        | 'estateWorksOrder'
        | 'estateUnitWorksOrder'
        | 'externalCredit'
        | 'externalAgentFee'
        | 'freeholderPayment'
        | 'float'
        | 'groundRent'
        | 'goodwillPayment'
        | 'holdingDeposit'
        | 'introducingTenantFee'
        | 'landlordAdminFee'
        | 'landlordTax'
        | 'landlordPayment'
        | 'landlordToSupplierPayment'
        | 'landlordWorksOrder'
        | 'leaseholderAdminFee'
        | 'leaseholderPayment'
        | 'leaseholderRepayment'
        | 'leaseholderWorksOrder'
        | 'lettingFee'
        | 'managementFee'
        | 'paymentSurcharge'
        | 'receipt'
        | 'rent'
        | 'rentGuarantee'
        | 'rentInsurance'
        | 'recoveryPayment'
        | 'reserveFund'
        | 'tenantAdminFee'
        | 'tenantPayment'
        | 'tenantToLandlordPayment'
        | 'tenantToSupplierPayment'
        | 'trustAccountingInvoice'
        | 'tenantWorksOrder'
        | 'vacantManagementFee'
        | 'vendorAdminFee'
        | 'vendorCommission'
        | 'vendorPayment'
        | 'vendorToSupplierPayment'
        | 'worksOrderPayment'
      >
    | undefined
    | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  outstandingFrom?: number | undefined | null
  outstandingTo?: number | undefined | null
  columns: ColumnsList<TransactionsBody>
}
export const transactionsNominalAccountsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  appliesToWorksOrders: z.boolean().nullable().optional(),
})
export type TransactionsNominalAccountsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  name?: string | undefined | null
  appliesToWorksOrders?: boolean | undefined | null
}
export type TransactionsNominalAccountsArgs = {
  sortBy?: string | undefined | null
  id?: Array<string> | undefined | null
  appliesToWorksOrders?: boolean | undefined | null
  columns: ColumnsList<TransactionsNominalAccountsBody>
}

export const transactionsColumnHelper = createColumnHelper<TransactionsBody>()

export const getTransactionsColumn = (property: string, { label, format }: ConfigItemLookup<TransactionsBody>) => {
  return match(property)
    .with('_links', () => {
      return transactionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return transactionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return transactionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return transactionsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return transactionsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('category', () => {
      return transactionsColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header: label('category'),
        cell: (info) => format(info.getValue(), 'category'),
      })
    })
    .with('type', () => {
      return transactionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('transactionType', () => {
      return transactionsColumnHelper.accessor((row) => row.transactionType, {
        id: 'transactionType',
        header: label('transactionType'),
        cell: (info) => format(info.getValue(), 'transactionType'),
      })
    })
    .with('description', () => {
      return transactionsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('status', () => {
      return transactionsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('ledger', () => {
      return transactionsColumnHelper.accessor((row) => row.ledger, {
        id: 'ledger',
        header: label('ledger'),
        cell: (info) => format(info.getValue(), 'ledger'),
      })
    })
    .with('netAmount', () => {
      return transactionsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format(info.getValue(), 'netAmount'),
      })
    })
    .with('taxAmount', () => {
      return transactionsColumnHelper.accessor((row) => row.taxAmount, {
        id: 'taxAmount',
        header: label('taxAmount'),
        cell: (info) => format(info.getValue(), 'taxAmount'),
      })
    })
    .with('grossAmount', () => {
      return transactionsColumnHelper.accessor((row) => row.grossAmount, {
        id: 'grossAmount',
        header: label('grossAmount'),
        cell: (info) => format(info.getValue(), 'grossAmount'),
      })
    })
    .with('outstanding', () => {
      return transactionsColumnHelper.accessor((row) => row.outstanding, {
        id: 'outstanding',
        header: label('outstanding'),
        cell: (info) => format(info.getValue(), 'outstanding'),
      })
    })
    .with('companyId', () => {
      return transactionsColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('landlordId', () => {
      return transactionsColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header: label('landlordId'),
        cell: (info) => format(info.getValue(), 'landlordId'),
      })
    })
    .with('propertyId', () => {
      return transactionsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('tenancyId', () => {
      return transactionsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('_eTag', () => {
      return transactionsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTransactionsTable = (args: TransactionsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTransactions({
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
export const transactionsNominalAccountsColumnHelper = createColumnHelper<TransactionsNominalAccountsBody>()

export const getTransactionsNominalAccountsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<TransactionsNominalAccountsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('name', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format(info.getValue(), 'name'),
      })
    })
    .with('appliesToWorksOrders', () => {
      return transactionsNominalAccountsColumnHelper.accessor((row) => row.appliesToWorksOrders, {
        id: 'appliesToWorksOrders',
        header: label('appliesToWorksOrders'),
        cell: (info) => format(info.getValue(), 'appliesToWorksOrders'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTransactionsNominalAccountsTable = (args: TransactionsNominalAccountsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTransactionsNominalAccounts({
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
