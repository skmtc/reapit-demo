import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            officeIds: z.array(z.string()).nullable().optional(),
            departmentIds: z.array(z.string()).nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiSources = (args: UseGetApiSourcesArgs) => {
  const result = useQuery({
    queryKey: ['Sources'],
    queryFn: () => getApiSourcesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiSourcesArgs = {
  body: /** Request body used to create a new source of business */
  {
    name: /** The name of the source or advertising publication */ string
    type: /** The type of the source (source/advertisement) */ string
    officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
    Array<string> | undefined
  }
}
export const postApiSourcesFn = async ({ body }: UsePostApiSourcesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiSources = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiSourcesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Sources'] })
    },
  })
}
export type UseGetApiSourcesIdArgs = { id: string }
export const getApiSourcesIdFn = async ({ id }: UseGetApiSourcesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      name: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      officeIds: z.array(z.string()).nullable().optional(),
      departmentIds: z.array(z.string()).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiSourcesId = (args: UseGetApiSourcesIdArgs) => {
  const result = useQuery({
    queryKey: ['Sources'],
    queryFn: () => getApiSourcesIdFn(args),
  })

  return result
}
export type UsePatchApiSourcesIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing source of business */
  {
    name?: /** The name of the source or advertising publication */ string | undefined
    type?: /** The type of the source (source/advertisement) */ string | undefined
    officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
    Array<string> | undefined
  }
}
export const patchApiSourcesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiSourcesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/sources/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
