import { documentModelPagedResult } from '@/schemas/documentModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateDocumentModel } from '@/schemas/createDocumentModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiDocumentsFnArgs = {
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
export type PostApiDocumentsFnArgs = { body: CreateDocumentModel }
export const postApiDocumentsFn = async ({ body }: PostApiDocumentsFnArgs) => {
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
export const usePostApiDocuments = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiDocumentsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    },
  })
}
