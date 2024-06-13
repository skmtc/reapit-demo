import { invoiceModelPagedResult } from '@/schemas/invoiceModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { paymentModelPagedResult } from '@/schemas/paymentModelPagedResult.generated.tsx'
import { creditModelPagedResult } from '@/schemas/creditModelPagedResult.generated.tsx'
import { chargeModelPagedResult } from '@/schemas/chargeModelPagedResult.generated.tsx'

export type GetApiInvoicesFnArgs = {
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
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
}
export const getApiInvoicesFn = async ({
  pageNumber,
  pageSize,
  sortBy,
  negotiatorId,
  propertyId,
  status,
  dateFrom,
  dateTo,
  dueDateFrom,
  dueDateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiInvoicesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/${querySerialiser({ args: { pageNumber, pageSize, sortBy, negotiatorId, propertyId, status, dateFrom, dateTo, dueDateFrom, dueDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return invoiceModelPagedResult.parse(data)
}
export const useGetApiInvoices = (args: GetApiInvoicesFnArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiInvoicesPaymentsFnArgs = {
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  invoiceId?: Array<string> | null | undefined
  type?: Array<'payment' | 'accountPayment' | 'advertisingPayment' | 'buyerDeposit'> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
}
export const getApiInvoicesPaymentsFn = async ({
  pageNumber,
  pageSize,
  sortBy,
  negotiatorId,
  propertyId,
  invoiceId,
  type,
  dateFrom,
  dateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiInvoicesPaymentsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/payments${querySerialiser({ args: { pageNumber, pageSize, sortBy, negotiatorId, propertyId, invoiceId, type, dateFrom, dateTo, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return paymentModelPagedResult.parse(data)
}
export const useGetApiInvoicesPayments = (args: GetApiInvoicesPaymentsFnArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesPaymentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiInvoicesCreditsFnArgs = {
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  invoiceId?: Array<string> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
}
export const getApiInvoicesCreditsFn = async ({
  pageNumber,
  pageSize,
  sortBy,
  negotiatorId,
  propertyId,
  invoiceId,
  dateFrom,
  dateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiInvoicesCreditsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/credits${querySerialiser({ args: { pageNumber, pageSize, sortBy, negotiatorId, propertyId, invoiceId, dateFrom, dateTo, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return creditModelPagedResult.parse(data)
}
export const useGetApiInvoicesCredits = (args: GetApiInvoicesCreditsFnArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesCreditsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiInvoicesChargesFnArgs = {
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  invoiceId?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
}
export const getApiInvoicesChargesFn = async ({
  pageNumber,
  pageSize,
  sortBy,
  negotiatorId,
  propertyId,
  invoiceId,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiInvoicesChargesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/charges${querySerialiser({ args: { pageNumber, pageSize, sortBy, negotiatorId, propertyId, invoiceId, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return chargeModelPagedResult.parse(data)
}
export const useGetApiInvoicesCharges = (args: GetApiInvoicesChargesFnArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesChargesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
