import { vendorModel } from '@/models/vendorModel.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { UpdateVendorModel } from '@/models/updateVendorModel.ts'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'
import { vendorModelPagedResult } from '@/models/vendorModelPagedResult.ts'
import { vendorContactRelationshipModelPagedResult } from '@/models/vendorContactRelationshipModelPagedResult.ts'
import { InsertVendorContactRelationshipModel } from '@/models/insertVendorContactRelationshipModel.ts'
import { vendorContactRelationshipModel } from '@/models/vendorContactRelationshipModel.ts'

export type UseGetApiVendorsIdArgs = {
  id: string
  embed?: Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'> | undefined
}
export const getApiVendorsIdFn = async ({ id, embed }: UseGetApiVendorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return vendorModel.parse(data)
}
export const useGetApiVendorsId = (args: UseGetApiVendorsIdArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdFn(args),
  })

  return result
}
export type UsePatchApiVendorsIdArgs = { 'If-Match'?: string; id: string; body: UpdateVendorModel }
export const patchApiVendorsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiVendorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiVendorsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiVendorsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
export type UseGetApiVendorsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'> | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  email?: Array<string> | undefined
  fromArchive?: boolean | undefined
  address?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  lastCallFrom?: string | undefined
  lastCallTo?: string | undefined
  nextCallFrom?: string | undefined
  nextCallTo?: string | undefined
  metadata?: Array<string> | undefined
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
}: UseGetApiVendorsArgs) => {
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
export const useGetApiVendors = (args: UseGetApiVendorsArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiVendorsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiVendorsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiVendorsIdRelationshipsArgs) => {
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
export const useGetApiVendorsIdRelationships = (args: UseGetApiVendorsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateVendorRelationshipArgs = { id: string; body: InsertVendorContactRelationshipModel }
export const createVendorRelationshipFn = async ({ id, body }: UseCreateVendorRelationshipArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
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
export const useCreateVendorRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createVendorRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
export type UseGetApiVendorsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiVendorsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiVendorsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return vendorContactRelationshipModel.parse(data)
}
export const useGetApiVendorsIdRelationshipsRelationshipId = (
  args: UseGetApiVendorsIdRelationshipsRelationshipIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsRelationshipIdFn(args),
  })

  return result
}
export type UseDeleteApiVendorsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const deleteApiVendorsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseDeleteApiVendorsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, relationshipId }),
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
export const useDeleteApiVendorsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiVendorsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
