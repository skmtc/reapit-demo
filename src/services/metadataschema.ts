import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

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

  return z
    .object({
      id: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      schema: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiMetadataMetadataSchemaId = (args: UseGetApiMetadataMetadataSchemaIdArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaIdFn(args),
  })

  return result
}
export type UsePutApiMetadataMetadataSchemaIdArgs = {
  id: string
  body: /** Payload to update a JSON schema */ { schema: /** The updated JSON schema to store */ string }
}
export const putApiMetadataMetadataSchemaIdFn = async ({ id, body }: UsePutApiMetadataMetadataSchemaIdArgs) => {
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
export const usePutApiMetadataMetadataSchemaId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: putApiMetadataMetadataSchemaIdFn,
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            schema: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiMetadataMetadataSchema = (args: UseGetApiMetadataMetadataSchemaArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiMetadataMetadataSchemaArgs = {
  body: /** Payload to create a JSON schema for metadata validation */
  {
    entityType: /** The name of the entity type that this schema is related to */ string
    schema: /** The JSON schema used to validate entities of this type */ string
  }
}
export const postApiMetadataMetadataSchemaFn = async ({ body }: UsePostApiMetadataMetadataSchemaArgs) => {
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
export const usePostApiMetadataMetadataSchema = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiMetadataMetadataSchemaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
    },
  })
}
