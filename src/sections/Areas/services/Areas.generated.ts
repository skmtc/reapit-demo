import { CreateAreaModel } from '@/schemas/createAreaModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { areaModelPagedResult } from '@/schemas/areaModelPagedResult.generated.tsx'

export type CreateApiAreasFnArgs = { body: CreateAreaModel }
export const createApiAreasFn = async ({ body }: CreateApiAreasFnArgs) => {
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
export const useCreateApiAreas = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiAreasFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Areas'] })
    },
  })
}
export type GetApiAreasFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  departmentId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  name?: string | null | undefined
  active?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
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
