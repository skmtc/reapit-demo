import { CreateContactModel } from '@/schemas/createContactModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateContactSubscriptionModel } from '@/schemas/updateContactSubscriptionModel.generated.tsx'
import { contactModelPagedResult } from '@/schemas/contactModelPagedResult.generated.tsx'
import { contactRoleModelPagedResult } from '@/schemas/contactRoleModelPagedResult.generated.tsx'
import { contactSubscriptionModelPagedResult } from '@/schemas/contactSubscriptionModelPagedResult.generated.tsx'

export type CreateApiContactsFnArgs = { body: CreateContactModel }
export const createApiContactsFn = async ({ body }: CreateApiContactsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({
      args: {},
      options: defaultQuerySerialiserOptions,
    })}`,
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
export const useCreateApiContacts = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiContactsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type UpdateApiContactsIdSubscriptionsSubscriptionIdFnArgs = {
  id: string
  subscriptionId: string
  body: UpdateContactSubscriptionModel
}
export const updateApiContactsIdSubscriptionsSubscriptionIdFn = async ({
  id,
  subscriptionId,
  body,
}: UpdateApiContactsIdSubscriptionsSubscriptionIdFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions/${subscriptionId}${querySerialiser({
      args: {},
      options: defaultQuerySerialiserOptions,
    })}`,
    {
      method: 'PUT',
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
export const useUpdateApiContactsIdSubscriptionsSubscriptionId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateApiContactsIdSubscriptionsSubscriptionIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type GetApiContactsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | null
    | undefined
  id?: Array<string> | null | undefined
  contactDetail?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  address?: string | null | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | null | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | null | undefined
  active?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
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
}: GetApiContactsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({
      args: {
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
      },
      options: defaultQuerySerialiserOptions,
    })}`,
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
export const useGetApiContacts = (args: GetApiContactsFnArgs) => {
  const result = useQuery({
    queryKey: ['Contacts', args],
    queryFn: () => getApiContactsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiContactsIdRelationshipsFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiContactsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiContactsIdRelationshipsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/relationships${querySerialiser({
      args: { pageSize, pageNumber },
      options: defaultQuerySerialiserOptions,
    })}`,
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
export const useGetApiContactsIdRelationships = (args: GetApiContactsIdRelationshipsFnArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiContactsIdSubscriptionsFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  type?: string | null | undefined
  status?: string | null | undefined
}
export const getApiContactsIdSubscriptionsFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
  status,
}: GetApiContactsIdSubscriptionsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions${querySerialiser({
      args: { pageSize, pageNumber, type, status },
      options: defaultQuerySerialiserOptions,
    })}`,
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
export const useGetApiContactsIdSubscriptions = (args: GetApiContactsIdSubscriptionsFnArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
