import { CreateWorksOrderModel } from '@/schemas/createWorksOrderModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'
import { worksOrderModelPagedResult } from '@/schemas/worksOrderModelPagedResult.generated.tsx'
import { worksOrderItemModelPagedResult } from '@/schemas/worksOrderItemModelPagedResult.generated.tsx'

export type CreateApiWorksOrdersFnArgs = { body: CreateWorksOrderModel }
export const createApiWorksOrdersFn = async ({ body }: CreateApiWorksOrdersFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiWorksOrders = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiWorksOrdersFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type CreateApiWorksOrdersIdItemsFnArgs = { id: string; body: CreateWorksOrderItemModel }
export const createApiWorksOrdersIdItemsFn = async ({ id, body }: CreateApiWorksOrdersIdItemsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiWorksOrdersIdItems = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiWorksOrdersIdItemsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type GetApiWorksOrdersFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | null | undefined
  id?: Array<string> | null | undefined
  companyId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  status?:
    | Array<
        | 'pendingApproval'
        | 'pendingQuote'
        | 'raised'
        | 'raisedToChase'
        | 'landlordToComplete'
        | 'complete'
        | 'cancelled'
        | 'quoteAccepted'
      >
    | null
    | undefined
  tenancyId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  completedFrom?: string | null | undefined
  completedTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  requiredFrom?: string | null | undefined
  requiredTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
}
export const getApiWorksOrdersFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  companyId,
  negotiatorId,
  propertyId,
  status,
  tenancyId,
  typeId,
  extrasField,
  completedFrom,
  completedTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  requiredFrom,
  requiredTo,
  metadata,
}: GetApiWorksOrdersFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, companyId, negotiatorId, propertyId, status, tenancyId, typeId, extrasField, completedFrom, completedTo, createdFrom, createdTo, modifiedFrom, modifiedTo, requiredFrom, requiredTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return worksOrderModelPagedResult.parse(data)
}
export const useGetApiWorksOrders = (args: GetApiWorksOrdersFnArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiWorksOrdersIdItemsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  id: string
}
export const getApiWorksOrdersIdItemsFn = async ({ pageSize, pageNumber, id }: GetApiWorksOrdersIdItemsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return worksOrderItemModelPagedResult.parse(data)
}
export const useGetApiWorksOrdersIdItems = (args: GetApiWorksOrdersIdItemsFnArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
