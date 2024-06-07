import { UpdateSchemaRequest } from '@/schemas/updateSchemaRequest.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateSchemaRequest } from '@/schemas/createSchemaRequest.generated.tsx'
import { schemaModelPagedResult } from '@/schemas/schemaModelPagedResult.generated.tsx'

export type UsePutApiMetadataMetadataSchemaIdArgs = {id: string, body: UpdateSchemaRequest};
export const putApiMetadataMetadataSchemaIdFn = async ({id, body}: UsePutApiMetadataMetadataSchemaIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePutApiMetadataMetadataSchemaId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: putApiMetadataMetadataSchemaIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
        }
      })
    };
export type UsePostApiMetadataMetadataSchemaArgs = {body: CreateSchemaRequest};
export const postApiMetadataMetadataSchemaFn = async ({body}: UsePostApiMetadataMetadataSchemaArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiMetadataMetadataSchema = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiMetadataMetadataSchemaFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
        }
      })
    };
export type UseGetApiMetadataMetadataSchemaArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, entityType?: string | undefined};
export const getApiMetadataMetadataSchemaFn = async ({pageSize, pageNumber, entityType}: UseGetApiMetadataMetadataSchemaArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema${querySerialiser({args:{ pageSize, pageNumber, entityType}, options: defaultQuerySerialiserOptions })}`,
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
    
      return schemaModelPagedResult.parse(data)
    };
export const useGetApiMetadataMetadataSchema = (args: UseGetApiMetadataMetadataSchemaArgs) => {
      const result = useQuery({
        queryKey: ['MetadataSchema'],
        queryFn: () => getApiMetadataMetadataSchemaFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };