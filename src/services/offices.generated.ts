import { CreateOfficeModel, officeModelPagedResult, officeModel, UpdateOfficeModel } from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateOfficeArgs = { body: CreateOfficeModel }
export const createOfficeFn = async ({ body }: UseCreateOfficeArgs) => {
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
export type UseGetApiOfficesArgs = {
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
}: UseGetApiOfficesArgs) => {
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
export const useGetApiOffices = (args: UseGetApiOfficesArgs) => {
  const result = useQuery({
    queryKey: ['Offices'],
    queryFn: () => getApiOfficesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiOfficesIdArgs = {
  id: string
  embed?: Array<'negotiators'> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiOfficesIdFn = async ({ id, embed, extrasField }: UseGetApiOfficesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offices/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return officeModel.parse(data)
}
export const useGetApiOfficesId = ({ id, embed, extrasField }: UseGetApiOfficesIdArgs) => {
  const result = useQuery({
    queryKey: ['Offices', id, embed, extrasField],
    queryFn: () => getApiOfficesIdFn({ id, embed, extrasField }),
  })

  return result
}
export type UsePatchApiOfficesIdArgs = { 'If-Match'?: string; id: string; body: UpdateOfficeModel }
export const patchApiOfficesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiOfficesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offices/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
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
export const usePatchApiOfficesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiOfficesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offices'] })
    },
  })
}
