import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiOffersArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | undefined | null
  id?: Array<string> | undefined | null
  applicantId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  status?:
    | Array<'pending' | 'withdrawn' | 'rejected' | 'accepted' | 'noteOfInterest' | 'noteOfInterestWithdrawn'>
    | undefined
    | null
  address?: string | undefined | null
  name?: string | undefined | null
  amountFrom?: number | undefined | null
  amountTo?: number | undefined | null
  dateFrom?: string | undefined | null
  dateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
}
export const getApiOffersFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  applicantId,
  propertyId,
  status,
  address,
  name,
  amountFrom,
  amountTo,
  dateFrom,
  dateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiOffersArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, applicantId, propertyId, status, address, name, amountFrom, amountTo, dateFrom, dateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            currency: z.string().nullable().optional(),
            applicantId: z.string().nullable().optional(),
            companyId: z.string().nullable().optional(),
            contactId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            date: z.string().nullable().optional(),
            amount: z.number().nullable().optional(),
            status: z.string().nullable().optional(),
            inclusions: z.string().nullable().optional(),
            exclusions: z.string().nullable().optional(),
            conditions: z.string().nullable().optional(),
            related: z
              .array(
                z.object({
                  id: z.string().nullable().optional(),
                  name: z.string().nullable().optional(),
                  title: z.string().nullable().optional(),
                  forename: z.string().nullable().optional(),
                  surname: z.string().nullable().optional(),
                  dateOfBirth: z.string().nullable().optional(),
                  type: z.string().nullable().optional(),
                  homePhone: z.string().nullable().optional(),
                  workPhone: z.string().nullable().optional(),
                  mobilePhone: z.string().nullable().optional(),
                  email: z.string().nullable().optional(),
                  marketingConsent: z.string().nullable().optional(),
                  primaryAddress: z
                    .object({
                      buildingName: z.string().nullable().optional(),
                      buildingNumber: z.string().nullable().optional(),
                      line1: z.string().nullable().optional(),
                      line2: z.string().nullable().optional(),
                      line3: z.string().nullable().optional(),
                      line4: z.string().nullable().optional(),
                      postcode: z.string().nullable().optional(),
                      countryId: z.string().nullable().optional(),
                    })
                    .nullable()
                    .optional(),
                  additionalContactDetails: z
                    .array(
                      z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }),
                    )
                    .nullable()
                    .optional(),
                }),
              )
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
export const useGetApiOffers = (args: UseGetApiOffersArgs) => {
  const result = useQuery({
    queryKey: ['Offers'],
    queryFn: () => getApiOffersFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateOfferArgs = {
  body: /** Request body used to create a new offer */
  {
    applicantId: /** The unique identifier of the applicant associated to the offer */ string
    propertyId: /** The unique identifier of the property associated to the offer */ string
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined | null
    date: /** The date when the offer was made */ string
    amount: /** The monetary amount of the offer */ number
    status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */ string
    inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined | null
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
    string | undefined | null
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined | null
    metadata?: /** App specific metadata to set against the offer */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const createOfferFn = async ({ body }: UseCreateOfferArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateOffer = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOfferFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    },
  })
}
export type UseGetApiOffersIdArgs = {
  id: string
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | undefined | null
}
export const getApiOffersIdFn = async ({ id, embed }: UseGetApiOffersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
      currency: z.string().nullable().optional(),
      applicantId: z.string().nullable().optional(),
      companyId: z.string().nullable().optional(),
      contactId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      date: z.string().nullable().optional(),
      amount: z.number().nullable().optional(),
      status: z.string().nullable().optional(),
      inclusions: z.string().nullable().optional(),
      exclusions: z.string().nullable().optional(),
      conditions: z.string().nullable().optional(),
      related: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            title: z.string().nullable().optional(),
            forename: z.string().nullable().optional(),
            surname: z.string().nullable().optional(),
            dateOfBirth: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            marketingConsent: z.string().nullable().optional(),
            primaryAddress: z
              .object({
                buildingName: z.string().nullable().optional(),
                buildingNumber: z.string().nullable().optional(),
                line1: z.string().nullable().optional(),
                line2: z.string().nullable().optional(),
                line3: z.string().nullable().optional(),
                line4: z.string().nullable().optional(),
                postcode: z.string().nullable().optional(),
                countryId: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
          }),
        )
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiOffersId = (args: UseGetApiOffersIdArgs) => {
  const result = useQuery({
    queryKey: ['Offers'],
    queryFn: () => getApiOffersIdFn(args),
  })

  return result
}
export type UsePatchApiOffersIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing offer */
  {
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined | null
    date?: /** The date when the offer was made */ string | undefined | null
    amount?: /** The monetary amount of the offer */ number | undefined | null
    status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    string | undefined | null
    inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined | null
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
    string | undefined | null
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined | null
    metadata?: /** App specific metadata to set against the offer */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiOffersIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiOffersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiOffersId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiOffersIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    },
  })
}
