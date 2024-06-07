import { CreateWorksOrderModel } from '@/schemas/createWorksOrderModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateWorksOrderModel } from '@/schemas/updateWorksOrderModel.generated.tsx'
import { CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'
import { UpdateWorksOrderItemModel } from '@/schemas/updateWorksOrderItemModel.generated.tsx'
import { worksOrderModelPagedResult } from '@/schemas/worksOrderModelPagedResult.generated.tsx'
import { worksOrderItemModelPagedResult } from '@/schemas/worksOrderItemModelPagedResult.generated.tsx'

export type UsePostApiWorksOrdersArgs = {body: CreateWorksOrderModel};
export const postApiWorksOrdersFn = async ({body}: UsePostApiWorksOrdersArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiWorksOrders = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiWorksOrdersFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
        }
      })
    };
export type UsePatchApiWorksOrdersIdArgs = {'If-Match'?: string, id: string, body: UpdateWorksOrderModel};
export const patchApiWorksOrdersIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiWorksOrdersIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiWorksOrdersId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiWorksOrdersIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
        }
      })
    };
export type UsePostApiWorksOrdersIdItemsArgs = {id: string, body: CreateWorksOrderItemModel};
export const postApiWorksOrdersIdItemsFn = async ({id, body}: UsePostApiWorksOrdersIdItemsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiWorksOrdersIdItems = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiWorksOrdersIdItemsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
        }
      })
    };
export type UsePatchApiWorksOrdersIdItemsItemIdArgs = {'If-Match'?: string, id: string, itemId: string, body: UpdateWorksOrderItemModel};
export const patchApiWorksOrdersIdItemsItemIdFn = async ({'If-Match': IfMatch, id, itemId, body}: UsePatchApiWorksOrdersIdItemsItemIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiWorksOrdersIdItemsItemId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiWorksOrdersIdItemsItemIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
        }
      })
    };
export type UseGetApiWorksOrdersArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined, id?: Array<string> | undefined, companyId?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, propertyId?: Array<string> | undefined, status?: Array<'pendingApproval' | 'pendingQuote' | 'raised' | 'raisedToChase' | 'landlordToComplete' | 'complete' | 'cancelled' | 'quoteAccepted'> | undefined, tenancyId?: Array<string> | undefined, typeId?: Array<string> | undefined, extrasField?: Array<string> | undefined, completedFrom?: string | undefined, completedTo?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, requiredFrom?: string | undefined, requiredTo?: string | undefined, metadata?: Array<string> | undefined};
export const getApiWorksOrdersFn = async ({pageSize, pageNumber, sortBy, embed, id, companyId, negotiatorId, propertyId, status, tenancyId, typeId, extrasField, completedFrom, completedTo, createdFrom, createdTo, modifiedFrom, modifiedTo, requiredFrom, requiredTo, metadata}: UseGetApiWorksOrdersArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({args:{ pageSize, pageNumber, sortBy, embed, id, companyId, negotiatorId, propertyId, status, tenancyId, typeId, extrasField, completedFrom, completedTo, createdFrom, createdTo, modifiedFrom, modifiedTo, requiredFrom, requiredTo, metadata}, options: defaultQuerySerialiserOptions })}`,
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
    
      return worksOrderModelPagedResult.parse(data)
    };
export const useGetApiWorksOrders = (args: UseGetApiWorksOrdersArgs) => {
      const result = useQuery({
        queryKey: ['WorksOrders'],
        queryFn: () => getApiWorksOrdersFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiWorksOrdersIdItemsArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, id: string};
export const getApiWorksOrdersIdItemsFn = async ({pageSize, pageNumber, id}: UseGetApiWorksOrdersIdItemsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
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
    
      return worksOrderItemModelPagedResult.parse(data)
    };
export const useGetApiWorksOrdersIdItems = (args: UseGetApiWorksOrdersIdItemsArgs) => {
      const result = useQuery({
        queryKey: ['WorksOrders'],
        queryFn: () => getApiWorksOrdersIdItemsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };