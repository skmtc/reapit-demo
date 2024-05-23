import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiNegotiatorsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?: Array<'office'> | undefined | null
  id?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  email?: string | undefined | null
  name?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  active?: boolean | undefined | null
  metadata?: Array<string> | undefined | null
}
export const getApiNegotiatorsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  officeId,
  email,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  active,
  metadata,
}: UseGetApiNegotiatorsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, officeId, email, name, createdFrom, createdTo, modifiedFrom, modifiedTo, active, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            jobTitle: z.string().nullable().optional(),
            officeId: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            profileImageUrl: z.string().nullable().optional(),
            active: z.boolean().nullable().optional(),
            diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
            diaryOfficeIds: z.array(z.string()).nullable().optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiNegotiators = (args: UseGetApiNegotiatorsArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators'],
    queryFn: () => getApiNegotiatorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateNegotiatorArgs = {
  body: /** Request body used to create a new negotiator */
  {
    name: /** The name of the negotiator */ string
    jobTitle?: /** The job title of the negotiator */ string | undefined | null
    active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined | null
    officeId: /** The unique identifier of the office that the negotiator is attached to */ string
    workPhone?: /** The work phone number of the negotiator */ string | undefined | null
    mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined | null
    email?: /** The email address of the negotiator */ string | undefined | null
    diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined | null
    diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined | null
    metadata?: /** App specific metadata to set against the negotiator */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const createNegotiatorFn = async ({ body }: UseCreateNegotiatorArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateNegotiator = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createNegotiatorFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    },
  })
}
export type UseGetApiNegotiatorsIdArgs = { id: string; embed?: Array<'office'> | undefined | null }
export const getApiNegotiatorsIdFn = async ({ id, embed }: UseGetApiNegotiatorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
      jobTitle: z.string().nullable().optional(),
      officeId: z.string().nullable().optional(),
      workPhone: z.string().nullable().optional(),
      mobilePhone: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
      profileImageUrl: z.string().nullable().optional(),
      active: z.boolean().nullable().optional(),
      diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
      diaryOfficeIds: z.array(z.string()).nullable().optional(),
      additionalContactDetails: z
        .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiNegotiatorsId = (args: UseGetApiNegotiatorsIdArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators'],
    queryFn: () => getApiNegotiatorsIdFn(args),
  })

  return result
}
export type UsePatchApiNegotiatorsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing negotiator */
  {
    name?: /** The name of the negotiator */ string | undefined | null
    jobTitle?: /** The job title of the negotiator */ string | undefined | null
    active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined | null
    workPhone?: /** The work phone number of the negotiator */ string | undefined | null
    mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined | null
    email?: /** The email address of the negotiator */ string | undefined | null
    diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined | null
    diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined | null
    metadata?: /** App specific metadata to set against the negotiator */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiNegotiatorsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiNegotiatorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/negotiators/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiNegotiatorsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiNegotiatorsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    },
  })
}
