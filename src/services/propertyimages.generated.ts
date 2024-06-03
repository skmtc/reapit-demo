import {
  CreatePropertyImageModel,
  CreatePreSignedUrlsModel,
  createPreSignedUrlsModel,
  ReindexPropertyImagesModel,
  propertyImageModelPagedResult,
  propertyImageModel,
  UpdatePropertyImageModel,
} from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreatePropertyImageArgs = { body: CreatePropertyImageModel }
export const createPropertyImageFn = async ({ body }: UseCreatePropertyImageArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreatePropertyImage = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyImageFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
export type UseCreatePropertyImageSignedUrlArgs = { body: CreatePreSignedUrlsModel }
export const createPropertyImageSignedUrlFn = async ({ body }: UseCreatePropertyImageSignedUrlArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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

  return createPreSignedUrlsModel.parse(data)
}
export const useCreatePropertyImageSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyImageSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
export type UseReindexPropertyImagesArgs = { body: ReindexPropertyImagesModel }
export const reindexPropertyImagesFn = async ({ body }: UseReindexPropertyImagesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/reindex${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useReindexPropertyImages = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: reindexPropertyImagesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    },
  })
}
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

  return propertyImageModelPagedResult.parse(data)
}
export const useGetApiPropertyImages = (args: UseGetApiPropertyImagesArgs) => {
  const result = useQuery({
    queryKey: ['PropertyImages'],
    queryFn: () => getApiPropertyImagesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiPropertyImagesIdArgs = { id: string; embed?: Array<'property'> | undefined }
export const getApiPropertyImagesIdFn = async ({ id, embed }: UseGetApiPropertyImagesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return propertyImageModel.parse(data)
}
export const useGetApiPropertyImagesId = ({ id, embed }: UseGetApiPropertyImagesIdArgs) => {
  const result = useQuery({
    queryKey: ['PropertyImages', id, embed],
    queryFn: () => getApiPropertyImagesIdFn({ id, embed }),
  })

  return result
}
export type UseDeleteApiPropertyImagesIdArgs = { id: string }
export const deleteApiPropertyImagesIdFn = async ({ id }: UseDeleteApiPropertyImagesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export type UsePatchApiPropertyImagesIdArgs = { 'If-Match'?: string; id: string; body: UpdatePropertyImageModel }
export const patchApiPropertyImagesIdFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiPropertyImagesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/propertyImages/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
