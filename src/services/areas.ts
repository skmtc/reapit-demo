import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiAreasArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  id?: Array<string> | undefined | null
  departmentId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  name?: string | undefined | null
  active?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
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
            active: z.boolean().nullable().optional(),
            type: z.string().nullable().optional(),
            area: z.array(z.string()).nullable().optional(),
            departmentIds: z.array(z.string()).nullable().optional(),
            officeIds: z.array(z.string()).nullable().optional(),
            parentIds: z.array(z.string()).nullable().optional(),
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
export const useGetApiAreas = (args: UseGetApiAreasArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateAreaArgs = {
  body: /** Request body used to create a new area */
  {
    name: /** The name of the area */ string
    type: /** The type of area (postcodes/polygon/group) */ string
    area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string>
    departmentIds?: /** A collection of unique identifiers of departments associated to the area */
    Array<string> | undefined | null
    officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
    parentId?: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
    string | undefined | null
  }
}
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
      active: z.boolean().nullable().optional(),
      type: z.string().nullable().optional(),
      area: z.array(z.string()).nullable().optional(),
      departmentIds: z.array(z.string()).nullable().optional(),
      officeIds: z.array(z.string()).nullable().optional(),
      parentIds: z.array(z.string()).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiAreasId = (args: UseGetApiAreasIdArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasIdFn(args),
  })

  return result
}
export type UsePatchApiAreasIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing area */
  {
    name?: /** The name of the area */ string | undefined | null
    area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string> | undefined | null
    departmentIds?: /** A collection of unique identifiers of departments associated to the area */
    Array<string> | undefined | null
    officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
  }
}
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
