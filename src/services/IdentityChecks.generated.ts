import { CreateIdentityCheckModel } from '@/schemas/createIdentityCheckModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreatePreSignedUrlsModel, createPreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'
import { identityCheckModelPagedResult } from '@/schemas/identityCheckModelPagedResult.generated.tsx'

export type CreateIdentityCheckFnArgs = { body: CreateIdentityCheckModel }
export const createIdentityCheckFn = async ({ body }: CreateIdentityCheckFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateIdentityCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createIdentityCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    },
  })
}
export type CreateIdentityCheckSignedUrlFnArgs = { body: CreatePreSignedUrlsModel }
export const createIdentityCheckSignedUrlFn = async ({ body }: CreateIdentityCheckSignedUrlFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateIdentityCheckSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createIdentityCheckSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    },
  })
}
export type GetApiIdentityChecksFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | null | undefined
  id?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | null | undefined
  checkDateFrom?: string | null | undefined
  checkDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
}
export const getApiIdentityChecksFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  contactId,
  negotiatorId,
  status,
  checkDateFrom,
  checkDateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: GetApiIdentityChecksFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, contactId, negotiatorId, status, checkDateFrom, checkDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return identityCheckModelPagedResult.parse(data)
}
export const useGetApiIdentityChecks = (args: GetApiIdentityChecksFnArgs) => {
  const result = useQuery({
    queryKey: ['IdentityChecks'],
    queryFn: () => getApiIdentityChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
