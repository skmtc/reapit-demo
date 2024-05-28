import { conveyancingModelPagedResult } from '@/models/conveyancingModelPagedResult.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { conveyancingModel } from '@/models/conveyancingModel.ts'
import { UpdateConveyancingModel } from '@/models/updateConveyancingModel.ts'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateDownwardLinkModel } from '@/models/createDownwardLinkModel.ts'
import { CreateUpwardLinkModel } from '@/models/createUpwardLinkModel.ts'

export type UseGetApiConveyancingArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  buyerId?: Array<string> | undefined
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined
  metadata?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export const getApiConveyancingFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  propertyId,
  buyerId,
  embed,
  metadata,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiConveyancingArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, propertyId, buyerId, embed, metadata, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return conveyancingModelPagedResult.parse(data)
}
export const useGetApiConveyancing = (args: UseGetApiConveyancingArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiConveyancingIdArgs = {
  id: string
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined
}
export const getApiConveyancingIdFn = async ({ id, embed }: UseGetApiConveyancingIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return conveyancingModel.parse(data)
}
export const useGetApiConveyancingId = (args: UseGetApiConveyancingIdArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdFn(args),
  })

  return result
}
export type UsePatchApiConveyancingIdArgs = { 'If-Match'?: string; id: string; body: UpdateConveyancingModel }
export const patchApiConveyancingIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiConveyancingIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiConveyancingId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiConveyancingIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseGetApiConveyancingIdChainArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
}
export const getApiConveyancingIdChainFn = async ({
  id,
  pageSize,
  pageNumber,
  sortBy,
}: UseGetApiConveyancingIdChainArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/chain${querySerialiser({ args: { pageSize, pageNumber, sortBy }, options: defaultQuerySerialiserOptions })}`,
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

  return conveyancingModelPagedResult.parse(data)
}
export const useGetApiConveyancingIdChain = (args: UseGetApiConveyancingIdChainArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdChainFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateDownwardChainArgs = { id: string; body: CreateDownwardLinkModel }
export const createDownwardChainFn = async ({ id, body }: UseCreateDownwardChainArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/downward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateDownwardChain = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createDownwardChainFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseDeleteApiConveyancingIdDownwardArgs = { id: string }
export const deleteApiConveyancingIdDownwardFn = async ({ id }: UseDeleteApiConveyancingIdDownwardArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/downward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id }),
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
export const useDeleteApiConveyancingIdDownward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiConveyancingIdDownwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseCreateUpwardChainArgs = { id: string; body: CreateUpwardLinkModel }
export const createUpwardChainFn = async ({ id, body }: UseCreateUpwardChainArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/upward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateUpwardChain = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createUpwardChainFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseDeleteApiConveyancingIdUpwardArgs = { id: string }
export const deleteApiConveyancingIdUpwardFn = async ({ id }: UseDeleteApiConveyancingIdUpwardArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/upward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id }),
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
export const useDeleteApiConveyancingIdUpward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiConveyancingIdUpwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
