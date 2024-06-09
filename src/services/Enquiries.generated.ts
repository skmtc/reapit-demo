import { enquiryModelPagedResult } from '@/schemas/enquiryModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateEnquiryModel } from '@/schemas/createEnquiryModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiEnquiriesFnArgs = {
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
}: GetApiEnquiriesFnArgs) => {
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
export const useGetApiEnquiries = (args: GetApiEnquiriesFnArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiEnquiriesFnArgs = { body: CreateEnquiryModel }
export const postApiEnquiriesFn = async ({ body }: PostApiEnquiriesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiEnquiries = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiEnquiriesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    },
  })
}
