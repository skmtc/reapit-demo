import { CreateContactModel, UpdateContactModel, UpdateContactSubscriptionModel, contactModelPagedResult, contactRoleModelPagedResult, contactSubscriptionModelPagedResult } from 'schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UsePostApiContactsArgs = {body: CreateContactModel};
export const postApiContactsFn = async ({body}: UsePostApiContactsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiContacts = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiContactsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
        }
      })
    };
export type UsePatchApiContactsIdArgs = {'If-Match'?: string, id: string, body: UpdateContactModel};
export const patchApiContactsIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiContactsIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiContactsId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiContactsIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
        }
      })
    };
export type UsePutApiContactsIdSubscriptionsSubscriptionIdArgs = {id: string, subscriptionId: string, body: UpdateContactSubscriptionModel};
export const putApiContactsIdSubscriptionsSubscriptionIdFn = async ({id, subscriptionId, body}: UsePutApiContactsIdSubscriptionsSubscriptionIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions/${subscriptionId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePutApiContactsIdSubscriptionsSubscriptionId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: putApiContactsIdSubscriptionsSubscriptionIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
        }
      })
    };
export type UseGetApiContactsArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined, id?: Array<string> | undefined, contactDetail?: Array<string> | undefined, email?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, officeId?: Array<string> | undefined, address?: string | undefined, identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined, name?: string | undefined, nameType?: string | undefined, marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined, marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined, active?: boolean | undefined, fromArchive?: boolean | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, metadata?: Array<string> | undefined, extrasField?: Array<string> | undefined};
export const getApiContactsFn = async ({pageSize, pageNumber, sortBy, embed, id, contactDetail, email, negotiatorId, officeId, address, identityCheck, name, nameType, marketingConsent, marketingConsentFilterType, active, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField}: UseGetApiContactsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({args:{ pageSize, pageNumber, sortBy, embed, id, contactDetail, email, negotiatorId, officeId, address, identityCheck, name, nameType, marketingConsent, marketingConsentFilterType, active, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return contactModelPagedResult.parse(data)
    };
export const useGetApiContacts = (args: UseGetApiContactsArgs) => {
      const result = useQuery({
        queryKey: ['Contacts'],
        queryFn: () => getApiContactsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiContactsIdRelationshipsArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiContactsIdRelationshipsFn = async ({id, pageSize, pageNumber}: UseGetApiContactsIdRelationshipsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/relationships${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return contactRoleModelPagedResult.parse(data)
    };
export const useGetApiContactsIdRelationships = (args: UseGetApiContactsIdRelationshipsArgs) => {
      const result = useQuery({
        queryKey: ['Contacts'],
        queryFn: () => getApiContactsIdRelationshipsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiContactsIdSubscriptionsArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined, type?: string | undefined, status?: string | undefined};
export const getApiContactsIdSubscriptionsFn = async ({id, pageSize, pageNumber, type, status}: UseGetApiContactsIdSubscriptionsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions${querySerialiser({args:{ pageSize, pageNumber, type, status}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return contactSubscriptionModelPagedResult.parse(data)
    };
export const useGetApiContactsIdSubscriptions = (args: UseGetApiContactsIdSubscriptionsArgs) => {
      const result = useQuery({
        queryKey: ['Contacts'],
        queryFn: () => getApiContactsIdSubscriptionsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };