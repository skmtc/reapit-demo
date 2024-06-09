import { officeModelPagedResult } from '@/schemas/officeModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiOfficesFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'negotiators'> | undefined
  id?: Array<string> | undefined
  address?: string | undefined
  name?: string | undefined
  region?: string | undefined
  active?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiOfficesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  address,
  name,
  region,
  active,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
  extrasField,
}: GetApiOfficesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offices/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, address, name, region, active, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField }, options: defaultQuerySerialiserOptions })}`,
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

  return officeModelPagedResult.parse(data)
}
export const useGetApiOffices = (args: GetApiOfficesFnArgs) => {
  const result = useQuery({
    queryKey: ['Offices'],
    queryFn: () => getApiOfficesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiOfficesFnArgs = { body: CreateOfficeModel }
export const postApiOfficesFn = async ({ body }: PostApiOfficesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offices/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiOffices = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiOfficesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offices'] })
    },
  })
}
