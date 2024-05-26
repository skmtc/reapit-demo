import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

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
            manager: z.string().nullable().optional(),
            active: z.boolean().nullable().optional(),
            region: z.string().nullable().optional(),
            address: z
              .object({
                buildingName: z.string().nullable().optional(),
                buildingNumber: z.string().nullable().optional(),
                line1: z.string().nullable().optional(),
                line2: z.string().nullable().optional(),
                line3: z.string().nullable().optional(),
                line4: z.string().nullable().optional(),
                postcode: z.string().nullable().optional(),
                countryId: z.string().nullable().optional(),
                geolocation: z
                  .object({ latitude: z.number().nullable().optional(), longitude: z.number().nullable().optional() })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            workPhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
            extrasField: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiOffices = (args: UseGetApiOfficesArgs) => {
  const result = useQuery({
    queryKey: ['Offices'],
    queryFn: () => getApiOfficesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiOfficesArgs = {
  body: /** Request body used to create a new office */
  {
    name: /** The name of the office */ string
    active?: /** A flag denoting whether or not this office is active */ boolean | undefined
    manager?: /** The name of the office manager */ string | undefined
    address: /** Request body used to set the address of a new office */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new address */
      | {
            latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
            longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
          }
        | undefined
    }
    workPhone?: /** The work phone number of the office */ string | undefined
    email?: /** The email address of the office */ string | undefined
    metadata?: /** App specific metadata to set against the office */ Record<string, Record<string, never>> | undefined
  }
}
export const postApiOfficesFn = async ({ body }: UsePostApiOfficesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offices/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      manager: z.string().nullable().optional(),
      active: z.boolean().nullable().optional(),
      region: z.string().nullable().optional(),
      address: z
        .object({
          buildingName: z.string().nullable().optional(),
          buildingNumber: z.string().nullable().optional(),
          line1: z.string().nullable().optional(),
          line2: z.string().nullable().optional(),
          line3: z.string().nullable().optional(),
          line4: z.string().nullable().optional(),
          postcode: z.string().nullable().optional(),
          countryId: z.string().nullable().optional(),
          geolocation: z
            .object({ latitude: z.number().nullable().optional(), longitude: z.number().nullable().optional() })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
      additionalContactDetails: z
        .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      workPhone: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
      extrasField: z.record(z.string(), z.object({})).nullable().optional(),
    })
    .parse(data)
}
export const useGetApiOfficesId = (args: UseGetApiOfficesIdArgs) => {
  const result = useQuery({
    queryKey: ['Offices'],
    queryFn: () => getApiOfficesIdFn(args),
  })

  return result
}
export type UsePatchApiOfficesIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing office */
  {
    name?: /** The name of the office */ string | undefined
    active?: /** A flag denoting whether or not this office is active */ boolean | undefined
    manager?: /** The name of the office manager */ string | undefined
    address?: /** Request body used to update the address of an existing office */
    | {
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
          geolocation?: /** Request body used to set the geolocation coordinates of an existing address */
          | {
                latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
                longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
              }
            | undefined
        }
      | undefined
    workPhone?: /** The work phone number of the office */ string | undefined
    email?: /** The email address of the office */ string | undefined
    metadata?: /** App specific metadata to set against the office */ Record<string, Record<string, never>> | undefined
  }
}
export const patchApiOfficesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiOfficesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offices/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
