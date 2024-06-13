import { CreatePropertyImageModel } from '@/schemas/createPropertyImageModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreatePreSignedUrlsModel, createPreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'
import { ReindexPropertyImagesModel } from '@/schemas/reindexPropertyImagesModel.generated.tsx'
import { propertyImageModelPagedResult } from '@/schemas/propertyImageModelPagedResult.generated.tsx'

export type CreatePropertyImageFnArgs = { body: CreatePropertyImageModel }
export const createPropertyImageFn = async ({ body }: CreatePropertyImageFnArgs) => {
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
export type CreatePropertyImageSignedUrlFnArgs = { body: CreatePreSignedUrlsModel }
export const createPropertyImageSignedUrlFn = async ({ body }: CreatePropertyImageSignedUrlFnArgs) => {
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
export type ReindexPropertyImagesFnArgs = { body: ReindexPropertyImagesModel }
export const reindexPropertyImagesFn = async ({ body }: ReindexPropertyImagesFnArgs) => {
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
export type GetApiPropertyImagesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  embed?: Array<'property'> | null | undefined
  propertyId?: Array<string> | null | undefined
  type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fromArchive?: boolean | null | undefined
  metadata?: Array<string> | null | undefined
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
}: GetApiPropertyImagesFnArgs) => {
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
export const useGetApiPropertyImages = (args: GetApiPropertyImagesFnArgs) => {
  const result = useQuery({
    queryKey: ['PropertyImages'],
    queryFn: () => getApiPropertyImagesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
