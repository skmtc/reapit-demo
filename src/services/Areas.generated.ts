import { areaModelPagedResult } from '@/schemas/areaModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateAreaModel } from '@/schemas/createAreaModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiAreasFnArgs = {
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
}: GetApiAreasFnArgs) => {
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
export const useGetApiAreas = (args: GetApiAreasFnArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiAreasFnArgs = { body: CreateAreaModel }
export const postApiAreasFn = async ({ body }: PostApiAreasFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/areas/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiAreas = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiAreasFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Areas'] })
    },
  })
}
