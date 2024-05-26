import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
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
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
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

  return z
    .object({
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
    .parse(data)
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
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
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
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

  return z
    .object({
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
    .parse(data)
}
export const useGetApiTransactionsNominalAccountsId = (args: UseGetApiTransactionsNominalAccountsIdArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsNominalAccountsIdFn(args),
  })

  return result
}
export type UsePostApiTransactionsSupplierInvoicesArgs = {
  body: /** Request body used to create a new supplier invoice */
  {
    worksOrderId?: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
    string | undefined
    propertyId?: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    companyId?: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    tenancyId?: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    description: /** The supplier invoice work description */ string
    accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */ string
    invoiceRef: /** The invoice reference */ string
    negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
    string
    invoiceDate: /** The invoice date */ string
    dueDate?: /** The date the invoice should be paid by */ string | undefined
    netAmount: /** The invoice net amount */ number
    taxAmount: /** The invoice tax amount */ number
  }
}
export const postApiTransactionsSupplierInvoicesFn = async ({ body }: UsePostApiTransactionsSupplierInvoicesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/transactions/supplierInvoices${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
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
export const usePostApiTransactionsSupplierInvoices = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTransactionsSupplierInvoicesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Transactions'] })
    },
  })
}
