import { landlordModelPagedResult } from '@/schemas/landlordModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateLandlordModel } from '@/schemas/createLandlordModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiLandlordsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | null | undefined
  id?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  active?: boolean | null | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
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
}: GetApiLandlordsFnArgs) => {
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
export const useGetApiLandlords = (args: GetApiLandlordsFnArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiLandlordsFnArgs = { body: CreateLandlordModel }
export const postApiLandlordsFn = async ({ body }: PostApiLandlordsFnArgs) => {
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
export const usePostApiLandlords = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiLandlordsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
