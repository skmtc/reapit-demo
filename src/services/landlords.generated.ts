import {
  CreateLandlordModel,
  InsertLandlordContactRelationshipModel,
  landlordModelPagedResult,
  landlordContactRelationshipModelPagedResult,
  landlordModel,
  UpdateLandlordModel,
  landlordContactRelationshipModel,
} from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateLandlordArgs = { body: CreateLandlordModel }
export const createLandlordFn = async ({ body }: UseCreateLandlordArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateLandlord = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createLandlordFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
export type UseCreateLandlordRelationshipArgs = { id: string; body: InsertLandlordContactRelationshipModel }
export const createLandlordRelationshipFn = async ({ id, body }: UseCreateLandlordRelationshipArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateLandlordRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createLandlordRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
export type UseGetApiLandlordsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined
  id?: Array<string> | undefined
  email?: Array<string> | undefined
  officeId?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  active?: boolean | undefined
  address?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiLandlordsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  email,
  officeId,
  extrasField,
  active,
  address,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiLandlordsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, email, officeId, extrasField, active, address, name, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return landlordModelPagedResult.parse(data)
}
export const useGetApiLandlords = (args: UseGetApiLandlordsArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiLandlordsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiLandlordsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiLandlordsIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return landlordContactRelationshipModelPagedResult.parse(data)
}
export const useGetApiLandlordsIdRelationships = (args: UseGetApiLandlordsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiLandlordsIdArgs = {
  id: string
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiLandlordsIdFn = async ({ id, embed, extrasField }: UseGetApiLandlordsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return landlordModel.parse(data)
}
export const useGetApiLandlordsId = ({ id, embed, extrasField }: UseGetApiLandlordsIdArgs) => {
  const result = useQuery({
    queryKey: ['Landlords', id, embed, extrasField],
    queryFn: () => getApiLandlordsIdFn({ id, embed, extrasField }),
  })

  return result
}
export type UsePatchApiLandlordsIdArgs = { 'If-Match'?: string; id: string; body: UpdateLandlordModel }
export const patchApiLandlordsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiLandlordsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiLandlordsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiLandlordsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
export type UseGetApiLandlordsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiLandlordsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiLandlordsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return landlordContactRelationshipModel.parse(data)
}
export const useGetApiLandlordsIdRelationshipsRelationshipId = ({
  id,
  relationshipId,
}: UseGetApiLandlordsIdRelationshipsRelationshipIdArgs) => {
  const result = useQuery({
    queryKey: ['Landlords', id, relationshipId],
    queryFn: () => getApiLandlordsIdRelationshipsRelationshipIdFn({ id, relationshipId }),
  })

  return result
}
export type UseDeleteApiLandlordsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const deleteApiLandlordsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseDeleteApiLandlordsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useDeleteApiLandlordsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiLandlordsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}