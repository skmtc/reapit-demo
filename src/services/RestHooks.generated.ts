import { CreateWebhookModel } from '@/schemas/createWebhookModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'
import { webhookModelPagedResult } from '@/schemas/webhookModelPagedResult.generated.tsx'

export type CreateResthookFnArgs = { body: CreateWebhookModel }
export const createResthookFn = async ({ body }: CreateResthookFnArgs) => {
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
export type UpdateResthookFnArgs = { id: string; body: UpdateWebhookModel }
export const updateResthookFn = async ({ id, body }: UpdateResthookFnArgs) => {
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
export type GetApiResthooksFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  active?: boolean | null | undefined
}
export const getApiResthooksFn = async ({ pageSize, pageNumber, sortBy, active }: GetApiResthooksFnArgs) => {
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
export const useGetApiResthooks = (args: GetApiResthooksFnArgs) => {
  const result = useQuery({
    queryKey: ['RestHooks'],
    queryFn: () => getApiResthooksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
