import {
  CreateIdentityCheckModel,
  CreatePreSignedUrlsModel,
  createPreSignedUrlsModel,
  identityCheckModelPagedResult,
  identityCheckModel,
  UpdateIdentityCheckModel,
} from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateIdentityCheckArgs = { body: CreateIdentityCheckModel }
export const createIdentityCheckFn = async ({ body }: UseCreateIdentityCheckArgs) => {
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
export type UseCreateIdentityCheckSignedUrlArgs = { body: CreatePreSignedUrlsModel }
export const createIdentityCheckSignedUrlFn = async ({ body }: UseCreateIdentityCheckSignedUrlArgs) => {
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
export type UseGetApiIdentityChecksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined
  id?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | undefined
  checkDateFrom?: string | undefined
  checkDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
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
}: UseGetApiIdentityChecksArgs) => {
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
export const useGetApiIdentityChecks = (args: UseGetApiIdentityChecksArgs) => {
  const result = useQuery({
    queryKey: ['IdentityChecks'],
    queryFn: () => getApiIdentityChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiIdentityChecksIdArgs = {
  id: string
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined
}
export const getApiIdentityChecksIdFn = async ({ id, embed }: UseGetApiIdentityChecksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return identityCheckModel.parse(data)
}
export const useGetApiIdentityChecksId = ({ id, embed }: UseGetApiIdentityChecksIdArgs) => {
  const result = useQuery({
    queryKey: ['IdentityChecks', id, embed],
    queryFn: () => getApiIdentityChecksIdFn({ id, embed }),
  })

  return result
}
export type UsePatchApiIdentityChecksIdArgs = { 'If-Match'?: string; id: string; body: UpdateIdentityCheckModel }
export const patchApiIdentityChecksIdFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiIdentityChecksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiIdentityChecksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiIdentityChecksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    },
  })
}
