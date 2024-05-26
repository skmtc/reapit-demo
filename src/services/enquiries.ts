import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiEnquiriesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  enquiryType?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export const getApiEnquiriesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  enquiryType,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiEnquiriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${querySerialiser({ args: { pageSize, pageNumber, sortBy, enquiryType, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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
            id: z.number().int().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            title: z.string().nullable().optional(),
            forename: z.string().nullable().optional(),
            surname: z.string().nullable().optional(),
            enquiryType: z.string().nullable().optional(),
            message: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            marketingConsent: z.string().nullable().optional(),
            position: z.string().nullable().optional(),
            officeId: z.string().nullable().optional(),
            applicantId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            sourceName: z.string().nullable().optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
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
              })
              .nullable()
              .optional(),
            buying: z
              .object({
                priceFrom: z.number().int().nullable().optional(),
                priceTo: z.number().int().nullable().optional(),
              })
              .nullable()
              .optional(),
            renting: z
              .object({
                rentFrom: z.number().nullable().optional(),
                rentTo: z.number().nullable().optional(),
                rentFrequency: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            bedrooms: z.number().int().nullable().optional(),
            propertyIds: z.array(z.string()).nullable().optional(),
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
export const useGetApiEnquiries = (args: UseGetApiEnquiriesArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiEnquiriesArgs = {
  body: /** Request body used to create an enquiry */
  {
    title: /** The title of the individual making the enquiry */ string
    forename: /** The forename of the individual making the enquiry */ string
    surname: /** The surname of the individual making the enquiry */ string
    position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
    string | undefined
    enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    string
    message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    string
    officeId: /** The unique identifier of the related office */ string
    marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    string
    sourceName: /** The name of the source that the enquiry was generated from */ string
    homePhone?: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    workPhone?: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    email?: /** The email of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    address?: /** Request body used to create a enquiries address */
    | {
          buildingName?: /** Sets the building name */ string | undefined
          buildingNumber?: /** Sets the building number */ string | undefined
          line1?: /** Sets the first line of the address */ string | undefined
          line2?: /** Sets the second line of the address */ string | undefined
          line3?: /** Sets the third line of the address */ string | undefined
          line4?: /** Sets the fourth line of the address */ string | undefined
          postcode?: /** Sets the postcode */ string | undefined
          countryId?: /** Sets the ISO-3166 country code that the address resides within */ string | undefined
        }
      | undefined
    buying?: /** The details specific to a buying enquiry */
    | {
          priceFrom?: /** The lower bound of the prospective buyer's budget */ number | undefined
          priceTo?: /** The upper bound of the prospective buyer's budget */ number | undefined
        }
      | undefined
    renting?: /** The details specific to renting enquiry. When type is renting. */
    | {
          rentFrom?: /** The lower bound of the prospective tenant's budget */ number | undefined
          rentTo?: /** The upper bound of the prospective tenant's budget */ number | undefined
          rentFrequency?: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
          string | undefined
        }
      | undefined
    bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */ number | undefined
    propertyIds?: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
    Array<string> | undefined
  }
}
export const postApiEnquiriesFn = async ({ body }: UsePostApiEnquiriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiEnquiries = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiEnquiriesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    },
  })
}
export type UseGetApiEnquiriesIdArgs = { id: number }
export const getApiEnquiriesIdFn = async ({ id }: UseGetApiEnquiriesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      id: z.number().int().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      title: z.string().nullable().optional(),
      forename: z.string().nullable().optional(),
      surname: z.string().nullable().optional(),
      enquiryType: z.string().nullable().optional(),
      message: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      marketingConsent: z.string().nullable().optional(),
      position: z.string().nullable().optional(),
      officeId: z.string().nullable().optional(),
      applicantId: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      sourceName: z.string().nullable().optional(),
      homePhone: z.string().nullable().optional(),
      workPhone: z.string().nullable().optional(),
      mobilePhone: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
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
        })
        .nullable()
        .optional(),
      buying: z
        .object({ priceFrom: z.number().int().nullable().optional(), priceTo: z.number().int().nullable().optional() })
        .nullable()
        .optional(),
      renting: z
        .object({
          rentFrom: z.number().nullable().optional(),
          rentTo: z.number().nullable().optional(),
          rentFrequency: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      bedrooms: z.number().int().nullable().optional(),
      propertyIds: z.array(z.string()).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiEnquiriesId = (args: UseGetApiEnquiriesIdArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesIdFn(args),
  })

  return result
}
export type UsePatchApiEnquiriesIdArgs = {
  'If-Match'?: string
  id: number
  body: /** Request body used to update an existing enquiry */
  {
    applicantId?: /** The unique identifier of the applicant associated to the enquiry */ string | undefined
    status?: /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
    string | undefined
  }
}
export const patchApiEnquiriesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiEnquiriesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/enquiries/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiEnquiriesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiEnquiriesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    },
  })
}
