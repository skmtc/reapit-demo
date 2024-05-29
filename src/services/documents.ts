import {
  documentModelPagedResult,
  CreateDocumentModel,
  documentModel,
  UpdateDocumentModel,
  CreatePreSignedUrlsModel,
  createPreSignedUrlsModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiDocumentsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'documentType'> | undefined
  id?: Array<string> | undefined
  associatedId?: Array<string> | undefined
  associatedType?:
    | Array<
        | 'appliance'
        | 'applicant'
        | 'bankStatement'
        | 'batch'
        | 'certificate'
        | 'contact'
        | 'depositCertificate'
        | 'estate'
        | 'estateUnit'
        | 'idCheck'
        | 'keySet'
        | 'landlord'
        | 'nominalTransaction'
        | 'property'
        | 'tenancy'
        | 'tenancyCheck'
        | 'tenancyRenewal'
        | 'worksOrder'
      >
    | undefined
  typeId?: Array<string> | undefined
  includeRoleDocuments?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiDocumentsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  associatedId,
  associatedType,
  typeId,
  includeRoleDocuments,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiDocumentsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, associatedId, associatedType, typeId, includeRoleDocuments, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return documentModelPagedResult.parse(data)
}
export const useGetApiDocuments = (args: UseGetApiDocumentsArgs) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateDocumentArgs = { body: CreateDocumentModel }
export const createDocumentFn = async ({ body }: UseCreateDocumentArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateDocument = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createDocumentFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
export type UseGetApiDocumentsIdArgs = { id: string; embed?: Array<'documentType'> | undefined }
export const getApiDocumentsIdFn = async ({ id, embed }: UseGetApiDocumentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return documentModel.parse(data)
}
export const useGetApiDocumentsId = (args: UseGetApiDocumentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsIdFn(args),
  })

  return result
}
export type UseDeleteApiDocumentsIdArgs = { id: string }
export const deleteApiDocumentsIdFn = async ({ id }: UseDeleteApiDocumentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useDeleteApiDocumentsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiDocumentsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
export type UsePatchApiDocumentsIdArgs = { 'If-Match'?: string; id: string; body: UpdateDocumentModel }
export const patchApiDocumentsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiDocumentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiDocumentsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiDocumentsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
export type UseGetApiDocumentsIdDownloadArgs = { id: string }
export const getApiDocumentsIdDownloadFn = async ({ id }: UseGetApiDocumentsIdDownloadArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${id}/download${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useGetApiDocumentsIdDownload = (args: UseGetApiDocumentsIdDownloadArgs) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsIdDownloadFn(args),
  })

  return result
}
export type UseCreateSignedUrlArgs = { body: CreatePreSignedUrlsModel }
export const createSignedUrlFn = async ({ body }: UseCreateSignedUrlArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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

  return createPreSignedUrlsModel.parse(data)
}
export const useCreateSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
