import { CreateWebhookModel, UpdateWebhookModel, webhookModelPagedResult, webhookModel } from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateResthookArgs = { body: CreateWebhookModel }
export const createResthookFn = async ({ body }: UseCreateResthookArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateResthook = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createResthookFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    },
  })
}
export type UseUpdateResthookArgs = { id: string; body: UpdateWebhookModel }
export const updateResthookFn = async ({ id, body }: UseUpdateResthookArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
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
export const useUpdateResthook = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateResthookFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    },
  })
}
export type UseGetApiResthooksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  active?: boolean | undefined
}
export const getApiResthooksFn = async ({ pageSize, pageNumber, sortBy, active }: UseGetApiResthooksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${querySerialiser({ args: { pageSize, pageNumber, sortBy, active }, options: defaultQuerySerialiserOptions })}`,
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

  return webhookModelPagedResult.parse(data)
}
export const useGetApiResthooks = (args: UseGetApiResthooksArgs) => {
  const result = useQuery({
    queryKey: ['RestHooks'],
    queryFn: () => getApiResthooksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiResthooksIdArgs = { id: string }
export const getApiResthooksIdFn = async ({ id }: UseGetApiResthooksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return webhookModel.parse(data)
}
export const useGetApiResthooksId = ({ id }: UseGetApiResthooksIdArgs) => {
  const result = useQuery({
    queryKey: ['RestHooks', id],
    queryFn: () => getApiResthooksIdFn({ id }),
  })

  return result
}
export type UseDeleteApiResthooksIdArgs = { id: string }
export const deleteApiResthooksIdFn = async ({ id }: UseDeleteApiResthooksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
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
export const useDeleteApiResthooksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiResthooksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    },
  })
}