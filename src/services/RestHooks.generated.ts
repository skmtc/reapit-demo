import { webhookModelPagedResult } from '@/schemas/webhookModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateWebhookModel } from '@/schemas/createWebhookModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiResthooksFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  active?: boolean | undefined
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
export type PostApiResthooksFnArgs = { body: CreateWebhookModel }
export const postApiResthooksFn = async ({ body }: PostApiResthooksFnArgs) => {
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
export const usePostApiResthooks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiResthooksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    },
  })
}
