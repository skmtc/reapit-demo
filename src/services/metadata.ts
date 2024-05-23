import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiMetadataArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  entityType?: string | undefined | null
  id?: Array<string> | undefined | null
  entityId?: Array<string> | undefined | null
  filter?: Array<string> | undefined | null
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            entityType: z.string().nullable().optional(),
            entityId: z.string().nullable().optional(),
            metadata: z.string().nullable().optional(),
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
export const useGetApiMetadata = (args: UseGetApiMetadataArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateMetadataArgs = {
  body: /** Payload to create a metadata record */
  {
    entityType: /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
    string
    entityId?: /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
    string | undefined | null
    metadata: /** The JSON document to store */ string
  }
}
export const createMetadataFn = async ({ body }: UseCreateMetadataArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateMetadata = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createMetadataFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    },
  })
}
export type UseGetApiMetadataIdArgs = { id: string }
export const getApiMetadataIdFn = async ({ id }: UseGetApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      entityType: z.string().nullable().optional(),
      entityId: z.string().nullable().optional(),
      metadata: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiMetadataId = (args: UseGetApiMetadataIdArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataIdFn(args),
  })

  return result
}
export type UseUpdateMetadataArgs = {
  id: string
  body: /** Payload to update a metadata record */ { metadata: /** The updated JSON document to store */ string }
}
export const updateMetadataFn = async ({ id, body }: UseUpdateMetadataArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useUpdateMetadata = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateMetadataFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    },
  })
}
export type UseDeleteApiMetadataIdArgs = { id: string }
export const deleteApiMetadataIdFn = async ({ id }: UseDeleteApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id }),
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
