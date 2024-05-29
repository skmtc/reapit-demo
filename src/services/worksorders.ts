import {
  worksOrderModelPagedResult,
  CreateWorksOrderModel,
  worksOrderModel,
  UpdateWorksOrderModel,
  worksOrderItemModelPagedResult,
  CreateWorksOrderItemModel,
  worksOrderItemModel,
  UpdateWorksOrderItemModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiWorksOrdersArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined
  id?: Array<string> | undefined
  companyId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
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
    | undefined
  tenancyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  completedFrom?: string | undefined
  completedTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  requiredFrom?: string | undefined
  requiredTo?: string | undefined
  metadata?: Array<string> | undefined
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
}: UseGetApiWorksOrdersArgs) => {
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
export const useGetApiWorksOrders = (args: UseGetApiWorksOrdersArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateWorksOrderArgs = { body: CreateWorksOrderModel }
export const createWorksOrderFn = async ({ body }: UseCreateWorksOrderArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateWorksOrder = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createWorksOrderFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UseGetApiWorksOrdersIdArgs = {
  id: string
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiWorksOrdersIdFn = async ({ id, embed, extrasField }: UseGetApiWorksOrdersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return worksOrderModel.parse(data)
}
export const useGetApiWorksOrdersId = (args: UseGetApiWorksOrdersIdArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdFn(args),
  })

  return result
}
export type UsePatchApiWorksOrdersIdArgs = { 'If-Match'?: string; id: string; body: UpdateWorksOrderModel }
export const patchApiWorksOrdersIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiWorksOrdersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
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
export const usePatchApiWorksOrdersId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiWorksOrdersIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UseGetApiWorksOrdersIdItemsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  id: string
}
export const getApiWorksOrdersIdItemsFn = async ({ pageSize, pageNumber, id }: UseGetApiWorksOrdersIdItemsArgs) => {
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
export const useGetApiWorksOrdersIdItems = (args: UseGetApiWorksOrdersIdItemsArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateWorksOrderItemArgs = { id: string; body: CreateWorksOrderItemModel }
export const createWorksOrderItemFn = async ({ id, body }: UseCreateWorksOrderItemArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
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
export const useCreateWorksOrderItem = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createWorksOrderItemFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UseGetApiWorksOrdersIdItemsItemIdArgs = { id: string; itemId: string }
export const getApiWorksOrdersIdItemsItemIdFn = async ({ id, itemId }: UseGetApiWorksOrdersIdItemsItemIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return worksOrderItemModel.parse(data)
}
export const useGetApiWorksOrdersIdItemsItemId = (args: UseGetApiWorksOrdersIdItemsItemIdArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsItemIdFn(args),
  })

  return result
}
export type UseDeleteApiWorksOrdersIdItemsItemIdArgs = { id: string; itemId: string }
export const deleteApiWorksOrdersIdItemsItemIdFn = async ({ id, itemId }: UseDeleteApiWorksOrdersIdItemsItemIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, itemId }),
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
export const useDeleteApiWorksOrdersIdItemsItemId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiWorksOrdersIdItemsItemIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UsePatchApiWorksOrdersIdItemsItemIdArgs = {
  'If-Match'?: string
  id: string
  itemId: string
  body: UpdateWorksOrderItemModel
}
export const patchApiWorksOrdersIdItemsItemIdFn = async ({
  'If-Match': IfMatch,
  id,
  itemId,
  body,
}: UsePatchApiWorksOrdersIdItemsItemIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, itemId, body }),
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
export const usePatchApiWorksOrdersIdItemsItemId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiWorksOrdersIdItemsItemIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
