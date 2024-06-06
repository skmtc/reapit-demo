import { UpdateConveyancingModel, CreateDownwardLinkModel, CreateUpwardLinkModel, conveyancingModelPagedResult } from 'schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UsePatchApiConveyancingIdArgs = {'If-Match'?: string, id: string, body: UpdateConveyancingModel};
export const patchApiConveyancingIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiConveyancingIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiConveyancingId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiConveyancingIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
        }
      })
    };
export type UsePostApiConveyancingIdDownwardArgs = {id: string, body: CreateDownwardLinkModel};
export const postApiConveyancingIdDownwardFn = async ({id, body}: UsePostApiConveyancingIdDownwardArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/downward${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiConveyancingIdDownward = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiConveyancingIdDownwardFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
        }
      })
    };
export type UsePostApiConveyancingIdUpwardArgs = {id: string, body: CreateUpwardLinkModel};
export const postApiConveyancingIdUpwardFn = async ({id, body}: UsePostApiConveyancingIdUpwardArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/upward${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiConveyancingIdUpward = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiConveyancingIdUpwardFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
        }
      })
    };
export type UseGetApiConveyancingArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, id?: Array<string> | undefined, propertyId?: Array<string> | undefined, buyerId?: Array<string> | undefined, embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined, metadata?: Array<string> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined};
export const getApiConveyancingFn = async ({pageSize, pageNumber, sortBy, id, propertyId, buyerId, embed, metadata, createdFrom, createdTo, modifiedFrom, modifiedTo}: UseGetApiConveyancingArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${querySerialiser({args:{ pageSize, pageNumber, sortBy, id, propertyId, buyerId, embed, metadata, createdFrom, createdTo, modifiedFrom, modifiedTo}, options: defaultQuerySerialiserOptions })}`,
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
    
      return conveyancingModelPagedResult.parse(data)
    };
export const useGetApiConveyancing = (args: UseGetApiConveyancingArgs) => {
      const result = useQuery({
        queryKey: ['Conveyancing'],
        queryFn: () => getApiConveyancingFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiConveyancingIdChainArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined};
export const getApiConveyancingIdChainFn = async ({id, pageSize, pageNumber, sortBy}: UseGetApiConveyancingIdChainArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/chain${querySerialiser({args:{ pageSize, pageNumber, sortBy}, options: defaultQuerySerialiserOptions })}`,
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
    
      return conveyancingModelPagedResult.parse(data)
    };
export const useGetApiConveyancingIdChain = (args: UseGetApiConveyancingIdChainArgs) => {
      const result = useQuery({
        queryKey: ['Conveyancing'],
        queryFn: () => getApiConveyancingIdChainFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };