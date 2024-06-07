import { CreateWebhookModel } from '@/schemas/createWebhookModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'
import { webhookModelPagedResult } from '@/schemas/webhookModelPagedResult.generated.tsx'

export type UsePostApiResthooksArgs = {body: CreateWebhookModel};
export const postApiResthooksFn = async ({body}: UsePostApiResthooksArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiResthooks = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiResthooksFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
        }
      })
    };
export type UsePutApiResthooksIdArgs = {id: string, body: UpdateWebhookModel};
export const putApiResthooksIdFn = async ({id, body}: UsePutApiResthooksIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePutApiResthooksId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: putApiResthooksIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
        }
      })
    };
export type UseGetApiResthooksArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, active?: boolean | undefined};
export const getApiResthooksFn = async ({pageSize, pageNumber, sortBy, active}: UseGetApiResthooksArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/resthooks/${querySerialiser({args:{ pageSize, pageNumber, sortBy, active}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return webhookModelPagedResult.parse(data)
    };
export const useGetApiResthooks = (args: UseGetApiResthooksArgs) => {
      const result = useQuery({
        queryKey: ['RestHooks'],
        queryFn: () => getApiResthooksFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };