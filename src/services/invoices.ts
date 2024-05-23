import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type UseGetApiInvoicesArgs = {
  pageNumber?: number | undefined | null
  pageSize?: number | undefined | null
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
export const useGetApiInvoices = (args: UseGetApiInvoicesArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesFn(args),
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
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
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
      charges: z
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
            type: z.string().nullable().optional(),
            invoiceId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            vatCode: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      credits: z
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
            negotiatorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            invoiceId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            date: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      payments: z
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
            negotiatorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            invoiceId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            date: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
    })
    .parse(data)
}
export const useGetApiInvoicesId = (args: UseGetApiInvoicesIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesIdFn(args),
  })

  return result
}
export type UseGetApiInvoicesPaymentsArgs = {
  pageNumber?: number | undefined | null
  pageSize?: number | undefined | null
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
            negotiatorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            invoiceId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            date: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
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
export const useGetApiInvoicesPayments = (args: UseGetApiInvoicesPaymentsArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesPaymentsFn(args),
    placeholderData: keepPreviousData,
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
      negotiatorId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      invoiceId: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      date: z.string().nullable().optional(),
      netAmount: z.number().nullable().optional(),
      vatAmount: z.number().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiInvoicesPaymentsId = (args: UseGetApiInvoicesPaymentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesPaymentsIdFn(args),
  })

  return result
}
export type UseGetApiInvoicesCreditsArgs = {
  pageNumber?: number | undefined | null
  pageSize?: number | undefined | null
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
            negotiatorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            invoiceId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            date: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
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
export const useGetApiInvoicesCredits = (args: UseGetApiInvoicesCreditsArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesCreditsFn(args),
    placeholderData: keepPreviousData,
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
      negotiatorId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      invoiceId: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      date: z.string().nullable().optional(),
      netAmount: z.number().nullable().optional(),
      vatAmount: z.number().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiInvoicesCreditsId = (args: UseGetApiInvoicesCreditsIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesCreditsIdFn(args),
  })

  return result
}
export type UseGetApiInvoicesChargesArgs = {
  pageNumber?: number | undefined | null
  pageSize?: number | undefined | null
  sortBy?: string | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  invoiceId?: Array<string> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
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
            type: z.string().nullable().optional(),
            invoiceId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            vatCode: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
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
export const useGetApiInvoicesCharges = (args: UseGetApiInvoicesChargesArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesChargesFn(args),
    placeholderData: keepPreviousData,
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
      type: z.string().nullable().optional(),
      invoiceId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      vatCode: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      netAmount: z.number().nullable().optional(),
      vatAmount: z.number().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiInvoicesChargesId = (args: UseGetApiInvoicesChargesIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesChargesIdFn(args),
  })

  return result
}
