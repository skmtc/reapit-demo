import { metadataModelPagedResult, metadataModel } from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiMetadataArgs = {
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
}: UseGetApiMetadataArgs) => {
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
export const useGetApiMetadata = (args: UseGetApiMetadataArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiMetadataIdArgs = { id: string }
export const getApiMetadataIdFn = async ({ id }: UseGetApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return metadataModel.parse(data)
}
export const useGetApiMetadataId = ({ id }: UseGetApiMetadataIdArgs) => {
  const result = useQuery({
    queryKey: ['Metadata', id],
    queryFn: () => getApiMetadataIdFn({ id }),
  })

  return result
}
export type UseDeleteApiMetadataIdArgs = { id: string }
export const deleteApiMetadataIdFn = async ({ id }: UseDeleteApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useDeleteApiMetadataId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiMetadataIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    },
  })
}
export type UsePatchApiMetadataIdArgs = {
  id: string
  body: /** The patch metadata payload. */ Array<Record<string, never>>
}
export const patchApiMetadataIdFn = async ({ id, body }: UsePatchApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiMetadataId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiMetadataIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    },
  })
}
