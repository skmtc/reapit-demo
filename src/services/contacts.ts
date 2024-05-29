import {
  contactModelPagedResult,
  CreateContactModel,
  contactModel,
  UpdateContactModel,
  contactRoleModelPagedResult,
  contactSubscriptionModelPagedResult,
  contactSubscriptionModel,
  UpdateContactSubscriptionModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiContactsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined
  id?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  email?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  address?: string | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined
  name?: string | undefined
  nameType?: string | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiContactsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  contactDetail,
  email,
  negotiatorId,
  officeId,
  address,
  identityCheck,
  name,
  nameType,
  marketingConsent,
  marketingConsentFilterType,
  active,
  fromArchive,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
  extrasField,
}: UseGetApiContactsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, contactDetail, email, negotiatorId, officeId, address, identityCheck, name, nameType, marketingConsent, marketingConsentFilterType, active, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField }, options: defaultQuerySerialiserOptions })}`,
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

  return contactModelPagedResult.parse(data)
}
export const useGetApiContacts = (args: UseGetApiContactsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateContactArgs = { body: CreateContactModel }
export const createContactFn = async ({ body }: UseCreateContactArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateContact = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createContactFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type UseGetApiContactsIdArgs = {
  id: string
  embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiContactsIdFn = async ({ id, embed, extrasField }: UseGetApiContactsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return contactModel.parse(data)
}
export const useGetApiContactsId = (args: UseGetApiContactsIdArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdFn(args),
  })

  return result
}
export type UsePatchApiContactsIdArgs = { 'If-Match'?: string; id: string; body: UpdateContactModel }
export const patchApiContactsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiContactsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiContactsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiContactsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type UseGetApiContactsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiContactsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiContactsIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return contactRoleModelPagedResult.parse(data)
}
export const useGetApiContactsIdRelationships = (args: UseGetApiContactsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiContactsIdSubscriptionsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
  status?: string | undefined
}
export const getApiContactsIdSubscriptionsFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
  status,
}: UseGetApiContactsIdSubscriptionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions${querySerialiser({ args: { pageSize, pageNumber, type, status }, options: defaultQuerySerialiserOptions })}`,
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

  return contactSubscriptionModelPagedResult.parse(data)
}
export const useGetApiContactsIdSubscriptions = (args: UseGetApiContactsIdSubscriptionsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiContactsIdSubscriptionsSubscriptionIdArgs = { id: string; subscriptionId: string }
export const getApiContactsIdSubscriptionsSubscriptionIdFn = async ({
  id,
  subscriptionId,
}: UseGetApiContactsIdSubscriptionsSubscriptionIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions/${subscriptionId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return contactSubscriptionModel.parse(data)
}
export const useGetApiContactsIdSubscriptionsSubscriptionId = (
  args: UseGetApiContactsIdSubscriptionsSubscriptionIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsSubscriptionIdFn(args),
  })

  return result
}
export type UseUpdateContactSubscriptionArgs = {
  id: string
  subscriptionId: string
  body: UpdateContactSubscriptionModel
}
export const updateContactSubscriptionFn = async ({ id, subscriptionId, body }: UseUpdateContactSubscriptionArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions/${subscriptionId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
      body: JSON.stringify({ id, subscriptionId, body }),
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
export const useUpdateContactSubscription = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateContactSubscriptionFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
