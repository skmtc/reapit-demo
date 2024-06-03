import { CreateSourceModel, sourceModelPagedResult, sourceModel, UpdateSourceModel } from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateSourceArgs = { body: CreateSourceModel }
export const createSourceFn = async ({ body }: UseCreateSourceArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateSource = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createSourceFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Sources'] })
    },
  })
}
export type UseGetApiSourcesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  officeId?: Array<string> | undefined
  departmentId?: Array<string> | undefined
  name?: string | undefined
  type?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export const getApiSourcesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  officeId,
  departmentId,
  name,
  type,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiSourcesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, officeId, departmentId, name, type, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return sourceModelPagedResult.parse(data)
}
export const useGetApiSources = (args: UseGetApiSourcesArgs) => {
  const result = useQuery({
    queryKey: ['Sources'],
    queryFn: () => getApiSourcesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiSourcesIdArgs = { id: string }
export const getApiSourcesIdFn = async ({ id }: UseGetApiSourcesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return sourceModel.parse(data)
}
export const useGetApiSourcesId = ({ id }: UseGetApiSourcesIdArgs) => {
  const result = useQuery({
    queryKey: ['Sources', id],
    queryFn: () => getApiSourcesIdFn({ id }),
  })

  return result
}
export type UsePatchApiSourcesIdArgs = { 'If-Match'?: string; id: string; body: UpdateSourceModel }
export const patchApiSourcesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiSourcesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiSourcesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiSourcesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Sources'] })
    },
  })
}
