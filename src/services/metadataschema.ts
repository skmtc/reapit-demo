import { schemaModel } from '@/models/schemaModel.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { UpdateSchemaRequest } from '@/models/updateSchemaRequest.ts'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'
import { schemaModelPagedResult } from '@/models/schemaModelPagedResult.ts'
import { CreateSchemaRequest } from '@/models/createSchemaRequest.ts'

export type UseGetApiMetadataMetadataSchemaIdArgs = { id: string }
export const getApiMetadataMetadataSchemaIdFn = async ({ id }: UseGetApiMetadataMetadataSchemaIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return schemaModel.parse(data)
}
export const useGetApiMetadataMetadataSchemaId = (args: UseGetApiMetadataMetadataSchemaIdArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaIdFn(args),
  })

  return result
}
export type UseUpdateMetadataSchemaArgs = { id: string; body: UpdateSchemaRequest }
export const updateMetadataSchemaFn = async ({ id, body }: UseUpdateMetadataSchemaArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
      body: JSON.stringify({ id, body }),
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
export const useUpdateMetadataSchema = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateMetadataSchemaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
    },
  })
}
export type UseGetApiMetadataMetadataSchemaArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  entityType?: string | undefined
}
export const getApiMetadataMetadataSchemaFn = async ({
  pageSize,
  pageNumber,
  entityType,
}: UseGetApiMetadataMetadataSchemaArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema${querySerialiser({ args: { pageSize, pageNumber, entityType }, options: defaultQuerySerialiserOptions })}`,
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

  return schemaModelPagedResult.parse(data)
}
export const useGetApiMetadataMetadataSchema = (args: UseGetApiMetadataMetadataSchemaArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateMetadataSchemaArgs = { body: CreateSchemaRequest }
export const createMetadataSchemaFn = async ({ body }: UseCreateMetadataSchemaArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
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
export const useCreateMetadataSchema = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createMetadataSchemaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
    },
  })
}
