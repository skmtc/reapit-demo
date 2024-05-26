import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiPropertyImagesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  embed?: Array<'property'> | undefined
  propertyId?: Array<string> | undefined
  type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  fromArchive?: boolean | undefined
  metadata?: Array<string> | undefined
}
export const getApiPropertyImagesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  embed,
  propertyId,
  type,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  fromArchive,
  metadata,
}: UseGetApiPropertyImagesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, embed, propertyId, type, createdFrom, createdTo, modifiedFrom, modifiedTo, fromArchive, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            url: z.string().nullable().optional(),
            caption: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            order: z.number().int().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            _eTag: z.string().nullable().optional(),
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
export const useGetApiPropertyImages = (args: UseGetApiPropertyImagesArgs) => {
  const result = useQuery({
    queryKey: ['PropertyImages'],
    queryFn: () => getApiPropertyImagesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertyImagesArgs = {
  body: /** Request body used to create a new property image */
  {
    data?: /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
    string | undefined
    fileUrl?: /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
    string | undefined
    propertyId: /** The unique identifier of the property attached to the image */ string
    caption: /** The image caption */ string
    type: /** The type of image (photograph/floorPlan/epc/map) */ string
  }
}
export const postApiPropertyImagesFn = async ({ body }: UsePostApiPropertyImagesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertyImages = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertyImagesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
export type UseGetApiPropertyImagesIdArgs = { id: string; embed?: Array<'property'> | undefined }
export const getApiPropertyImagesIdFn = async ({ id, embed }: UseGetApiPropertyImagesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      url: z.string().nullable().optional(),
      caption: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      order: z.number().int().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertyImagesId = (args: UseGetApiPropertyImagesIdArgs) => {
  const result = useQuery({
    queryKey: ['PropertyImages'],
    queryFn: () => getApiPropertyImagesIdFn(args),
  })

  return result
}
export type UseDeleteApiPropertyImagesIdArgs = { id: string }
export const deleteApiPropertyImagesIdFn = async ({ id }: UseDeleteApiPropertyImagesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useDeleteApiPropertyImagesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiPropertyImagesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
export type UsePatchApiPropertyImagesIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing property image */
  {
    caption?: /** The image caption */ string | undefined
    type?: /** The type of image (photograph/floorPlan/epc/map) */ string | undefined
  }
}
export const patchApiPropertyImagesIdFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiPropertyImagesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
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
export const usePatchApiPropertyImagesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertyImagesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
export type UsePostApiPropertyImagesSignedUrlArgs = {
  body: /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  { amount: /** The number of pre signed urls to create */ number }
}
export const postApiPropertyImagesSignedUrlFn = async ({ body }: UsePostApiPropertyImagesSignedUrlArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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

  return z.object({ amount: z.number().int() }).parse(data)
}
export const usePostApiPropertyImagesSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertyImagesSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
export type UsePostApiPropertyImagesReindexArgs = {
  body: /** Request body used to reindex property images */
  {
    propertyId?: /** The unique identifier of the property to update */ string | undefined
    imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
    Array<string> | undefined
  }
}
export const postApiPropertyImagesReindexFn = async ({ body }: UsePostApiPropertyImagesReindexArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/reindex${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertyImagesReindex = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertyImagesReindexFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
