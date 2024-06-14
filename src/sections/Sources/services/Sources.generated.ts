import { CreateSourceModel } from '@/schemas/createSourceModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { sourceModelPagedResult } from '@/schemas/sourceModelPagedResult.generated.tsx'

export type CreateApiSourcesFnArgs = { body: CreateSourceModel }
export const createApiSourcesFn = async ({ body }: CreateApiSourcesFnArgs) => {
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
export const useCreateApiSources = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiSourcesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Sources'] })
    },
  })
}
export type GetApiSourcesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  departmentId?: Array<string> | null | undefined
  name?: string | null | undefined
  type?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
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
}: GetApiSourcesFnArgs) => {
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
export const useGetApiSources = (args: GetApiSourcesFnArgs) => {
  const result = useQuery({
    queryKey: ['Sources'],
    queryFn: () => getApiSourcesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
