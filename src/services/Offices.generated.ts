import { CreateOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { officeModelPagedResult } from '@/schemas/officeModelPagedResult.generated.tsx'

export type CreateOfficeFnArgs = { body: CreateOfficeModel }
export const createOfficeFn = async ({ body }: CreateOfficeFnArgs) => {
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
export const useCreateOffice = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOfficeFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offices'] })
    },
  })
}
export type GetApiOfficesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'negotiators'> | null | undefined
  id?: Array<string> | null | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  region?: string | null | undefined
  active?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
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
