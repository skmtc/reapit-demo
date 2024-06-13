import { CreateDocumentModel } from '@/schemas/createDocumentModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreatePreSignedUrlsModel, createPreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'
import { documentModelPagedResult } from '@/schemas/documentModelPagedResult.generated.tsx'

export type CreateApiDocumentsFnArgs = { body: CreateDocumentModel }
export const createApiDocumentsFn = async ({ body }: CreateApiDocumentsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiDocuments = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiDocumentsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
export type CreateApiDocumentsSignedUrlFnArgs = { body: CreatePreSignedUrlsModel }
export const createApiDocumentsSignedUrlFn = async ({ body }: CreateApiDocumentsSignedUrlFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/documents/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiDocumentsSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiDocumentsSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
export type GetApiDocumentsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'documentType'> | null | undefined
  id?: Array<string> | null | undefined
  associatedId?: Array<string> | null | undefined
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
    | null
    | undefined
  typeId?: Array<string> | null | undefined
  includeRoleDocuments?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
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
}: GetApiDocumentsFnArgs) => {
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
export const useGetApiDocuments = (args: GetApiDocumentsFnArgs) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
