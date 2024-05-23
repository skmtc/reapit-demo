import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiReferralsArgs = {
  id?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  applicantId?: Array<string> | undefined | null
  contactId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  referralTypeId?: Array<string> | undefined | null
  status?: Array<'sent' | 'inProgress' | 'succeeded' | 'cancelled' | 'failed' | 'paid' | 'declined'> | undefined | null
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | undefined | null
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
}
export const getApiReferralsFn = async ({
  id,
  propertyId,
  applicantId,
  contactId,
  negotiatorId,
  referralTypeId,
  status,
  embed,
  pageSize,
  pageNumber,
  sortBy,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiReferralsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${querySerialiser({ args: { id, propertyId, applicantId, contactId, negotiatorId, referralTypeId, status, embed, pageSize, pageNumber, sortBy, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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
            referralTypeId: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            applicantId: z.string().nullable().optional(),
            contactId: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            amount: z.number().nullable().optional(),
            paid: z.string().nullable().optional(),
            accepted: z.string().nullable().optional(),
            related: z
              .object({
                id: z.string().nullable().optional(),
                title: z.string().nullable().optional(),
                forename: z.string().nullable().optional(),
                surname: z.string().nullable().optional(),
                mobilePhone: z.string().nullable().optional(),
                email: z.string().nullable().optional(),
              })
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
export const useGetApiReferrals = (args: UseGetApiReferralsArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateReferralArgs = {
  body: /** Create Referral Model */
  {
    referralTypeId: /** The unique identifier of the referral type */ string
    negotiatorId?: /** The unique identifier of the negotiator creating the referral */ string | undefined | null
    propertyId?: /** The unique identifier of the property */ string | undefined | null
    applicantId?: /** The unique identifier of the applicant */ string | undefined | null
    contactId: /** The unique identifier of the contact that has been referred */ string
    amount?: /** The amount paid to the agent for the referral */ number | undefined | null
  }
}
export const createReferralFn = async ({ body }: UseCreateReferralArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateReferral = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createReferralFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    },
  })
}
export type UseGetApiReferralsIdArgs = {
  id: string
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | undefined | null
}
export const getApiReferralsIdFn = async ({ id, embed }: UseGetApiReferralsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
      referralTypeId: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      applicantId: z.string().nullable().optional(),
      contactId: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      amount: z.number().nullable().optional(),
      paid: z.string().nullable().optional(),
      accepted: z.string().nullable().optional(),
      related: z
        .object({
          id: z.string().nullable().optional(),
          title: z.string().nullable().optional(),
          forename: z.string().nullable().optional(),
          surname: z.string().nullable().optional(),
          mobilePhone: z.string().nullable().optional(),
          email: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiReferralsId = (args: UseGetApiReferralsIdArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsIdFn(args),
  })

  return result
}
export type UsePatchApiReferralsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Update Referral Model */
  {
    status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
    string | undefined | null
    amount?: /** The amount paid to the agent for the referral */ number | undefined | null
    metadata?: /** App specific metadata to set against the referral */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiReferralsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiReferralsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiReferralsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiReferralsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    },
  })
}
export type UseGetApiReferralsTypesArgs = {
  id?: Array<string> | undefined | null
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
}
export const getApiReferralsTypesFn = async ({ id, pageSize, pageNumber, sortBy }: UseGetApiReferralsTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/types${querySerialiser({ args: { id, pageSize, pageNumber, sortBy }, options: defaultQuerySerialiserOptions })}`,
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
            name: z.string().nullable().optional(),
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
export const useGetApiReferralsTypes = (args: UseGetApiReferralsTypesArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsTypesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiReferralsTypesIdArgs = { id: string }
export const getApiReferralsTypesIdFn = async ({ id }: UseGetApiReferralsTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/types/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      name: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiReferralsTypesId = (args: UseGetApiReferralsTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsTypesIdFn(args),
  })

  return result
}
