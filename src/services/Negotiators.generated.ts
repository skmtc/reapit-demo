import { negotiatorModelPagedResult } from '@/schemas/negotiatorModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateNegotiatorModel } from '@/schemas/createNegotiatorModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiNegotiatorsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'office'> | null | undefined
  id?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  email?: string | null | undefined
  name?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  active?: boolean | null | undefined
  metadata?: Array<string> | null | undefined
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
}: GetApiNegotiatorsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${querySerialiser({
      args: {
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
      },
      options: defaultQuerySerialiserOptions,
    })}`,
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
export const useGetApiNegotiators = (args: GetApiNegotiatorsFnArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators', args],
    queryFn: () => getApiNegotiatorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiNegotiatorsFnArgs = { body: CreateNegotiatorModel }
export const postApiNegotiatorsFn = async ({ body }: PostApiNegotiatorsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${querySerialiser({
      args: {},
      options: defaultQuerySerialiserOptions,
    })}`,
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
export const usePostApiNegotiators = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiNegotiatorsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    },
  })
}
