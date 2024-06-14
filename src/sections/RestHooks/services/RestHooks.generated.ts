import { CreateWebhookModel } from '@/schemas/createWebhookModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'
import { webhookModelPagedResult } from '@/schemas/webhookModelPagedResult.generated.tsx'

export type CreateApiResthooksFnArgs = { body: CreateWebhookModel }
export const createApiResthooksFn = async ({ body }: CreateApiResthooksFnArgs) => {
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
export const useCreateApiResthooks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiResthooksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    },
  })
}
export type UpdateApiResthooksIdFnArgs = { id: string; body: UpdateWebhookModel }
export const updateApiResthooksIdFn = async ({ id, body }: UpdateApiResthooksIdFnArgs) => {
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
export const useUpdateApiResthooksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateApiResthooksIdFn,
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
