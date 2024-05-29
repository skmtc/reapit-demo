import { enquiryModelPagedResult, CreateEnquiryModel, enquiryModel, UpdateEnquiryModel } from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiEnquiriesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  enquiryType?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export const getApiEnquiriesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  enquiryType,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiEnquiriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${querySerialiser({ args: { pageSize, pageNumber, sortBy, enquiryType, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return enquiryModelPagedResult.parse(data)
}
export const useGetApiEnquiries = (args: UseGetApiEnquiriesArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateEnquiryArgs = { body: CreateEnquiryModel }
export const createEnquiryFn = async ({ body }: UseCreateEnquiryArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateEnquiry = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createEnquiryFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    },
  })
}
export type UseGetApiEnquiriesIdArgs = { id: number }
export const getApiEnquiriesIdFn = async ({ id }: UseGetApiEnquiriesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return enquiryModel.parse(data)
}
export const useGetApiEnquiriesId = (args: UseGetApiEnquiriesIdArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesIdFn(args),
  })

  return result
}
export type UsePatchApiEnquiriesIdArgs = { 'If-Match'?: string; id: number; body: UpdateEnquiryModel }
export const patchApiEnquiriesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiEnquiriesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiEnquiriesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiEnquiriesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    },
  })
}
