import { areaModelPagedResult, CreateAreaModel, areaModel, UpdateAreaModel } from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiAreasArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  departmentId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  name?: string | undefined
  active?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export const getApiAreasFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  departmentId,
  officeId,
  name,
  active,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiAreasArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/areas/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, departmentId, officeId, name, active, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return areaModelPagedResult.parse(data)
}
export const useGetApiAreas = (args: UseGetApiAreasArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateAreaArgs = { body: CreateAreaModel }
export const createAreaFn = async ({ body }: UseCreateAreaArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/areas/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateArea = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createAreaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Areas'] })
    },
  })
}
export type UseGetApiAreasIdArgs = { id: string }
export const getApiAreasIdFn = async ({ id }: UseGetApiAreasIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/areas/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return areaModel.parse(data)
}
export const useGetApiAreasId = (args: UseGetApiAreasIdArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasIdFn(args),
  })

  return result
}
export type UsePatchApiAreasIdArgs = { 'If-Match'?: string; id: string; body: UpdateAreaModel }
export const patchApiAreasIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiAreasIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/areas/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiAreasId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiAreasIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Areas'] })
    },
  })
}
