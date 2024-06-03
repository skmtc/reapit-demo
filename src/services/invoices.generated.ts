import {
  invoiceModelPagedResult,
  paymentModelPagedResult,
  creditModelPagedResult,
  chargeModelPagedResult,
  invoiceDetailModel,
  paymentModel,
  creditModel,
  chargeModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type UseGetApiInvoicesArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
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
}: UseGetApiInvoicesArgs) => {
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
export const useGetApiInvoices = (args: UseGetApiInvoicesArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiInvoicesPaymentsArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
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
}: UseGetApiInvoicesPaymentsArgs) => {
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
export const useGetApiInvoicesPayments = (args: UseGetApiInvoicesPaymentsArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesPaymentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiInvoicesCreditsArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
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
}: UseGetApiInvoicesCreditsArgs) => {
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
export const useGetApiInvoicesCredits = (args: UseGetApiInvoicesCreditsArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesCreditsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiInvoicesChargesArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
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
}: UseGetApiInvoicesChargesArgs) => {
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
export const useGetApiInvoicesCharges = (args: UseGetApiInvoicesChargesArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesChargesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiInvoicesIdArgs = { id: string }
export const getApiInvoicesIdFn = async ({ id }: UseGetApiInvoicesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return invoiceDetailModel.parse(data)
}
export const useGetApiInvoicesId = ({ id }: UseGetApiInvoicesIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices', id],
    queryFn: () => getApiInvoicesIdFn({ id }),
  })

  return result
}
export type UseGetApiInvoicesPaymentsIdArgs = { id: string }
export const getApiInvoicesPaymentsIdFn = async ({ id }: UseGetApiInvoicesPaymentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/payments/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return paymentModel.parse(data)
}
export const useGetApiInvoicesPaymentsId = ({ id }: UseGetApiInvoicesPaymentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices', id],
    queryFn: () => getApiInvoicesPaymentsIdFn({ id }),
  })

  return result
}
export type UseGetApiInvoicesCreditsIdArgs = { id: string }
export const getApiInvoicesCreditsIdFn = async ({ id }: UseGetApiInvoicesCreditsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/credits/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return creditModel.parse(data)
}
export const useGetApiInvoicesCreditsId = ({ id }: UseGetApiInvoicesCreditsIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices', id],
    queryFn: () => getApiInvoicesCreditsIdFn({ id }),
  })

  return result
}
export type UseGetApiInvoicesChargesIdArgs = { id: string }
export const getApiInvoicesChargesIdFn = async ({ id }: UseGetApiInvoicesChargesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/charges/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return chargeModel.parse(data)
}
export const useGetApiInvoicesChargesId = ({ id }: UseGetApiInvoicesChargesIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices', id],
    queryFn: () => getApiInvoicesChargesIdFn({ id }),
  })

  return result
}
