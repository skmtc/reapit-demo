import {
  negotiatorModelPagedResult,
  CreateNegotiatorModel,
  negotiatorModel,
  UpdateNegotiatorModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiNegotiatorsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'office'> | undefined
  id?: Array<string> | undefined
  officeId?: Array<string> | undefined
  email?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  active?: boolean | undefined
  metadata?: Array<string> | undefined
}
export const getApiNegotiatorsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  officeId,
  email,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  active,
  metadata,
}: UseGetApiNegotiatorsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, officeId, email, name, createdFrom, createdTo, modifiedFrom, modifiedTo, active, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return negotiatorModelPagedResult.parse(data)
}
export const useGetApiNegotiators = (args: UseGetApiNegotiatorsArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators'],
    queryFn: () => getApiNegotiatorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateNegotiatorArgs = { body: CreateNegotiatorModel }
export const createNegotiatorFn = async ({ body }: UseCreateNegotiatorArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateNegotiator = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createNegotiatorFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    },
  })
}
export type UseGetApiNegotiatorsIdArgs = { id: string; embed?: Array<'office'> | undefined }
export const getApiNegotiatorsIdFn = async ({ id, embed }: UseGetApiNegotiatorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return negotiatorModel.parse(data)
}
export const useGetApiNegotiatorsId = ({ id, embed }: UseGetApiNegotiatorsIdArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators', id, embed],
    queryFn: () => getApiNegotiatorsIdFn({ id, embed }),
  })

  return result
}
export type UsePatchApiNegotiatorsIdArgs = { 'If-Match'?: string; id: string; body: UpdateNegotiatorModel }
export const patchApiNegotiatorsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiNegotiatorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
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
export const usePatchApiNegotiatorsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiNegotiatorsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    },
  })
}
