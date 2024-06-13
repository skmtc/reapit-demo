import { CreateEnquiryModel } from '@/schemas/createEnquiryModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { enquiryModelPagedResult } from '@/schemas/enquiryModelPagedResult.generated.tsx'

export type CreateApiEnquiriesFnArgs = { body: CreateEnquiryModel }
export const createApiEnquiriesFn = async ({ body }: CreateApiEnquiriesFnArgs) => {
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
export const useCreateApiEnquiries = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiEnquiriesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    },
  })
}
export type GetApiEnquiriesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  enquiryType?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
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
