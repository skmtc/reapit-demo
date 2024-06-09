import { metadataModelPagedResult } from '@/schemas/metadataModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateMetadataRequest } from '@/schemas/createMetadataRequest.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiMetadataFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  entityType?: string | undefined
  id?: Array<string> | undefined
  entityId?: Array<string> | undefined
  filter?: Array<string> | undefined
}
export const getApiMetadataFn = async ({
  pageSize,
  pageNumber,
  entityType,
  id,
  entityId,
  filter,
}: GetApiMetadataFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${querySerialiser({ args: { pageSize, pageNumber, entityType, id, entityId, filter }, options: defaultQuerySerialiserOptions })}`,
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

  return metadataModelPagedResult.parse(data)
}
export const useGetApiMetadata = (args: GetApiMetadataFnArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiMetadataFnArgs = { body: CreateMetadataRequest }
export const postApiMetadataFn = async ({ body }: PostApiMetadataFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiMetadata = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiMetadataFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    },
  })
}
