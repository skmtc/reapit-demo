import { InsertVendorContactRelationshipModel } from '@/schemas/insertVendorContactRelationshipModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { vendorModelPagedResult } from '@/schemas/vendorModelPagedResult.generated.tsx'
import { vendorContactRelationshipModelPagedResult } from '@/schemas/vendorContactRelationshipModelPagedResult.generated.tsx'

export type CreateApiVendorsIdRelationshipsFnArgs = { id: string; body: InsertVendorContactRelationshipModel }
export const createApiVendorsIdRelationshipsFn = async ({ id, body }: CreateApiVendorsIdRelationshipsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiVendorsIdRelationships = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiVendorsIdRelationshipsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
export type GetApiVendorsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?:
    | Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'>
    | null
    | undefined
  id?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  fromArchive?: boolean | null | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  lastCallFrom?: string | null | undefined
  lastCallTo?: string | null | undefined
  nextCallFrom?: string | null | undefined
  nextCallTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
}
export const getApiVendorsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  negotiatorId,
  officeId,
  email,
  fromArchive,
  address,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  lastCallFrom,
  lastCallTo,
  nextCallFrom,
  nextCallTo,
  metadata,
}: GetApiVendorsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, negotiatorId, officeId, email, fromArchive, address, name, createdFrom, createdTo, modifiedFrom, modifiedTo, lastCallFrom, lastCallTo, nextCallFrom, nextCallTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return vendorModelPagedResult.parse(data)
}
export const useGetApiVendors = (args: GetApiVendorsFnArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiVendorsIdRelationshipsFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiVendorsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiVendorsIdRelationshipsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return vendorContactRelationshipModelPagedResult.parse(data)
}
export const useGetApiVendorsIdRelationships = (args: GetApiVendorsIdRelationshipsFnArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
