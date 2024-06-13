import { CreateDownwardLinkModel } from '@/schemas/createDownwardLinkModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'
import { conveyancingModelPagedResult } from '@/schemas/conveyancingModelPagedResult.generated.tsx'

export type CreateDownwardChainFnArgs = { id: string; body: CreateDownwardLinkModel }
export const createDownwardChainFn = async ({ id, body }: CreateDownwardChainFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/downward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export type CreateUpwardChainFnArgs = { id: string; body: CreateUpwardLinkModel }
export const createUpwardChainFn = async ({ id, body }: CreateUpwardChainFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/upward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export type GetApiConveyancingFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  buyerId?: Array<string> | null | undefined
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | null | undefined
  metadata?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
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
}: GetApiConveyancingFnArgs) => {
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
export const useGetApiConveyancing = (args: GetApiConveyancingFnArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiConveyancingIdChainFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
}
export const getApiConveyancingIdChainFn = async ({
  id,
  pageSize,
  pageNumber,
  sortBy,
}: GetApiConveyancingIdChainFnArgs) => {
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
export const useGetApiConveyancingIdChain = (args: GetApiConveyancingIdChainFnArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdChainFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
