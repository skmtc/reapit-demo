import {
  transactionModelPagedResult,
  transactionModel,
  nominalAccountModelPagedResult,
  nominalAccountModel,
  CreateSupplierInvoiceModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiTransactionsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  tenancyId?: Array<string> | undefined
  status?: Array<'awaitingAuthorisation' | 'awaitingPosting' | 'posted' | 'rejected'> | undefined
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
  ledger?: Array<'landlord' | 'tenant' | 'vendor'> | undefined
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
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  outstandingFrom?: number | undefined
  outstandingTo?: number | undefined
}
export const getApiTransactionsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  propertyId,
  landlordId,
  tenancyId,
  status,
  type,
  ledger,
  category,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  outstandingFrom,
  outstandingTo,
}: UseGetApiTransactionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/transactions/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, propertyId, landlordId, tenancyId, status, type, ledger, category, createdFrom, createdTo, modifiedFrom, modifiedTo, outstandingFrom, outstandingTo }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return transactionModelPagedResult.parse(data)
}
export const useGetApiTransactions = (args: UseGetApiTransactionsArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTransactionsIdArgs = { id: string }
export const getApiTransactionsIdFn = async ({ id }: UseGetApiTransactionsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/transactions/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return transactionModel.parse(data)
}
export const useGetApiTransactionsId = (args: UseGetApiTransactionsIdArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsIdFn(args),
  })

  return result
}
export type UseGetApiTransactionsNominalAccountsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  appliesToWorksOrders?: boolean | undefined
}
export const getApiTransactionsNominalAccountsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  appliesToWorksOrders,
}: UseGetApiTransactionsNominalAccountsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/transactions/nominalAccounts${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, appliesToWorksOrders }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return nominalAccountModelPagedResult.parse(data)
}
export const useGetApiTransactionsNominalAccounts = (args: UseGetApiTransactionsNominalAccountsArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsNominalAccountsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTransactionsNominalAccountsIdArgs = { id: string }
export const getApiTransactionsNominalAccountsIdFn = async ({ id }: UseGetApiTransactionsNominalAccountsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/transactions/nominalAccounts/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return nominalAccountModel.parse(data)
}
export const useGetApiTransactionsNominalAccountsId = (args: UseGetApiTransactionsNominalAccountsIdArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsNominalAccountsIdFn(args),
  })

  return result
}
export type UseCreateSupplierInvoiceArgs = { body: CreateSupplierInvoiceModel }
export const createSupplierInvoiceFn = async ({ body }: UseCreateSupplierInvoiceArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/transactions/supplierInvoices${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useCreateSupplierInvoice = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createSupplierInvoiceFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Transactions'] })
    },
  })
}
