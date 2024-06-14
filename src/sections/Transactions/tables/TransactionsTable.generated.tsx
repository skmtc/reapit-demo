import { transactionModelConfig } from '@/sections/Transactions/config/transactionModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiTransactions,
  useGetApiTransactionsNominalAccounts,
} from '@/sections/Transactions/services/Transactions.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { TransactionModel } from '@/schemas/transactionModel.generated.tsx'
import { nominalAccountModelConfig } from '@/sections/Transactions/config/nominalAccountModelConfig.example.tsx'
import { NominalAccountModel } from '@/schemas/nominalAccountModel.generated.tsx'

export const getTransactionsTableColumn = (
  property: string,
  modelConfig: ModelConfig<TransactionModel>,
  row: TransactionModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('category', () => ({
      id: 'category',
      label: modelConfig['category'].label,
      value: modelConfig['category'].format(row['category']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('transactionType', () => ({
      id: 'transactionType',
      label: modelConfig['transactionType'].label,
      value: modelConfig['transactionType'].format(row['transactionType']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('ledger', () => ({
      id: 'ledger',
      label: modelConfig['ledger'].label,
      value: modelConfig['ledger'].format(row['ledger']),
    }))
    .with('netAmount', () => ({
      id: 'netAmount',
      label: modelConfig['netAmount'].label,
      value: modelConfig['netAmount'].format(row['netAmount']),
    }))
    .with('taxAmount', () => ({
      id: 'taxAmount',
      label: modelConfig['taxAmount'].label,
      value: modelConfig['taxAmount'].format(row['taxAmount']),
    }))
    .with('grossAmount', () => ({
      id: 'grossAmount',
      label: modelConfig['grossAmount'].label,
      value: modelConfig['grossAmount'].format(row['grossAmount']),
    }))
    .with('outstanding', () => ({
      id: 'outstanding',
      label: modelConfig['outstanding'].label,
      value: modelConfig['outstanding'].format(row['outstanding']),
    }))
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('landlordId', () => ({
      id: 'landlordId',
      label: modelConfig['landlordId'].label,
      value: modelConfig['landlordId'].format(row['landlordId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseTransactionsTableArgs = {
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  landlordId?: Array<string> | null | undefined
  tenancyId?: Array<string> | null | undefined
  status?: Array<'awaitingAuthorisation' | 'awaitingPosting' | 'posted' | 'rejected'> | null | undefined
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
    | null
    | undefined
  ledger?: Array<'landlord' | 'tenant' | 'vendor'> | null | undefined
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
    | null
    | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  outstandingFrom?: number | null | undefined
  outstandingTo?: number | null | undefined
  fieldNames: (keyof TransactionModel)[]
}
export const useTransactionsTable = (args: UseTransactionsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTransactions({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TransactionModel => c in row)
        .map((fieldName) => getTransactionsTableColumn(fieldName, transactionModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getTransactionsNominalAccountsTableColumn = (
  property: string,
  modelConfig: ModelConfig<NominalAccountModel>,
  row: NominalAccountModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('name', () => ({
      id: 'name',
      label: modelConfig['name'].label,
      value: modelConfig['name'].format(row['name']),
    }))
    .with('appliesToWorksOrders', () => ({
      id: 'appliesToWorksOrders',
      label: modelConfig['appliesToWorksOrders'].label,
      value: modelConfig['appliesToWorksOrders'].format(row['appliesToWorksOrders']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseTransactionsNominalAccountsTableArgs = {
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  appliesToWorksOrders?: boolean | null | undefined
  fieldNames: (keyof NominalAccountModel)[]
}
export const useTransactionsNominalAccountsTable = (args: UseTransactionsNominalAccountsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTransactionsNominalAccounts({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof NominalAccountModel => c in row)
        .map((fieldName) => getTransactionsNominalAccountsTableColumn(fieldName, nominalAccountModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
