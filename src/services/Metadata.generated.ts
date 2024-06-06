import { CreateMetadataRequest, UpdateMetadataRequest, metadataModelPagedResult } from 'schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UsePostApiMetadataArgs = {body: CreateMetadataRequest};
export const postApiMetadataFn = async ({body}: UsePostApiMetadataArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiMetadata = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiMetadataFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
        }
      })
    };
export type UsePutApiMetadataIdArgs = {id: string, body: UpdateMetadataRequest};
export const putApiMetadataIdFn = async ({id, body}: UsePutApiMetadataIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePutApiMetadataId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: putApiMetadataIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
        }
      })
    };
export type UseGetApiMetadataArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, entityType?: string | undefined, id?: Array<string> | undefined, entityId?: Array<string> | undefined, filter?: Array<string> | undefined};
export const getApiMetadataFn = async ({pageSize, pageNumber, entityType, id, entityId, filter}: UseGetApiMetadataArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${querySerialiser({args:{ pageSize, pageNumber, entityType, id, entityId, filter}, options: defaultQuerySerialiserOptions })}`,
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
    
      return metadataModelPagedResult.parse(data)
    };
export const useGetApiMetadata = (args: UseGetApiMetadataArgs) => {
      const result = useQuery({
        queryKey: ['Metadata'],
        queryFn: () => getApiMetadataFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };