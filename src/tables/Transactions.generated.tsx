import { transactionModel, TransactionModel } from '@/schemas/transactionModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiTransactions, useGetApiTransactionsNominalAccounts } from 'services/Transactions.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { nominalAccountModel, NominalAccountModel } from '@/schemas/nominalAccountModel.generated.tsx'

export const useTransactionsTableColumnHelper = createColumnHelper<TransactionModel>();
export type UseTransactionsTableArgs = {sortBy?: string | undefined, id?: Array<string> | undefined, propertyId?: Array<string> | undefined, landlordId?: Array<string> | undefined, tenancyId?: Array<string> | undefined, status?: Array<'awaitingAuthorisation' | 'awaitingPosting' | 'posted' | 'rejected'> | undefined, type?: Array<'creditAdjustment' | 'creditNoteCorrection' | 'creditNoteGoodwillPayment' | 'creditNoteRefund' | 'creditNoteRepayment' | 'creditNoteWriteOff' | 'debitAdjustment' | 'deposit' | 'float' | 'invoice' | 'journal' | 'openingBalanceDr' | 'openingBalancingCr' | 'payment' | 'reserveFunds' | 'transfer'> | undefined, ledger?: Array<'landlord' | 'tenant' | 'vendor'> | undefined, category?: Array<'advertisingCharge' | 'accountTransfer' | 'bankCharges' | 'buyerAdminFee' | 'buyerDeposit' | 'buyerPayment' | 'deposit' | 'depositDeduction' | 'depositRefund' | 'depositTransfer' | 'depositTransferToAgent' | 'depositTransferToLandlord' | 'depositTransferToScheme' | 'estateServiceCharge' | 'estateWorksOrder' | 'estateUnitWorksOrder' | 'externalCredit' | 'externalAgentFee' | 'freeholderPayment' | 'float' | 'groundRent' | 'goodwillPayment' | 'holdingDeposit' | 'introducingTenantFee' | 'landlordAdminFee' | 'landlordTax' | 'landlordPayment' | 'landlordToSupplierPayment' | 'landlordWorksOrder' | 'leaseholderAdminFee' | 'leaseholderPayment' | 'leaseholderRepayment' | 'leaseholderWorksOrder' | 'lettingFee' | 'managementFee' | 'paymentSurcharge' | 'receipt' | 'rent' | 'rentGuarantee' | 'rentInsurance' | 'recoveryPayment' | 'reserveFund' | 'tenantAdminFee' | 'tenantPayment' | 'tenantToLandlordPayment' | 'tenantToSupplierPayment' | 'trustAccountingInvoice' | 'tenantWorksOrder' | 'vacantManagementFee' | 'vendorAdminFee' | 'vendorCommission' | 'vendorPayment' | 'vendorToSupplierPayment' | 'worksOrderPayment'> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, outstandingFrom?: number | undefined, outstandingTo?: number | undefined, columns: ColumnsList<TransactionModel>};
export const getuseTransactionsTableColumn = (property:string, modelConfig: ModelConfig<TransactionModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTransactionsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTransactionsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTransactionsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTransactionsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTransactionsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('category', () => {
      const { label: header, format, width, minWidth } = modelConfig['category']

      return useTransactionsTableColumnHelper.accessor(row => row.category, {
      id: 'category',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useTransactionsTableColumnHelper.accessor(row => row.type, {
      id: 'type',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('transactionType', () => {
      const { label: header, format, width, minWidth } = modelConfig['transactionType']

      return useTransactionsTableColumnHelper.accessor(row => row.transactionType, {
      id: 'transactionType',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useTransactionsTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTransactionsTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('ledger', () => {
      const { label: header, format, width, minWidth } = modelConfig['ledger']

      return useTransactionsTableColumnHelper.accessor(row => row.ledger, {
      id: 'ledger',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return useTransactionsTableColumnHelper.accessor(row => row.netAmount, {
      id: 'netAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('taxAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['taxAmount']

      return useTransactionsTableColumnHelper.accessor(row => row.taxAmount, {
      id: 'taxAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('grossAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['grossAmount']

      return useTransactionsTableColumnHelper.accessor(row => row.grossAmount, {
      id: 'grossAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('outstanding', () => {
      const { label: header, format, width, minWidth } = modelConfig['outstanding']

      return useTransactionsTableColumnHelper.accessor(row => row.outstanding, {
      id: 'outstanding',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('companyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['companyId']

      return useTransactionsTableColumnHelper.accessor(row => row.companyId, {
      id: 'companyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('landlordId', () => {
      const { label: header, format, width, minWidth } = modelConfig['landlordId']

      return useTransactionsTableColumnHelper.accessor(row => row.landlordId, {
      id: 'landlordId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useTransactionsTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTransactionsTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTransactionsTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTransactionsTable = (args: UseTransactionsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTransactions({
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
export const useTransactionsNominalAccountsTableColumnHelper = createColumnHelper<NominalAccountModel>();
export type UseTransactionsNominalAccountsTableArgs = {sortBy?: string | undefined, id?: Array<string> | undefined, appliesToWorksOrders?: boolean | undefined, columns: ColumnsList<NominalAccountModel>};
export const getuseTransactionsNominalAccountsTableColumn = (property:string, modelConfig: ModelConfig<NominalAccountModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('name', () => {
      const { label: header, format, width, minWidth } = modelConfig['name']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row.name, {
      id: 'name',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('appliesToWorksOrders', () => {
      const { label: header, format, width, minWidth } = modelConfig['appliesToWorksOrders']

      return useTransactionsNominalAccountsTableColumnHelper.accessor(row => row.appliesToWorksOrders, {
      id: 'appliesToWorksOrders',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTransactionsNominalAccountsTable = (args: UseTransactionsNominalAccountsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTransactionsNominalAccounts({
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