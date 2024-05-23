import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiContactsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | undefined
    | null
  id?: Array<string> | undefined | null
  contactDetail?: Array<string> | undefined | null
  email?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  address?: string | undefined | null
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined | null
  name?: string | undefined | null
  nameType?: string | undefined | null
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined | null
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined | null
  active?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
}
export const getApiContactsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  contactDetail,
  email,
  negotiatorId,
  officeId,
  address,
  identityCheck,
  name,
  nameType,
  marketingConsent,
  marketingConsentFilterType,
  active,
  fromArchive,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
  extrasField,
}: UseGetApiContactsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, contactDetail, email, negotiatorId, officeId, address, identityCheck, name, nameType, marketingConsent, marketingConsentFilterType, active, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField }, options: defaultQuerySerialiserOptions })}`,
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
            title: z.string().nullable().optional(),
            forename: z.string().nullable().optional(),
            surname: z.string().nullable().optional(),
            dateOfBirth: z.string().nullable().optional(),
            active: z.boolean().nullable().optional(),
            marketingConsent: z.string().nullable().optional(),
            identityCheck: z.string().nullable().optional(),
            source: z
              .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
              .nullable()
              .optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            archivedOn: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            primaryAddress: z
              .object({
                type: z.string().nullable().optional(),
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
            secondaryAddress: z
              .object({
                type: z.string().nullable().optional(),
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
            workAddress: z
              .object({
                type: z.string().nullable().optional(),
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
            officeIds: z.array(z.string()).nullable().optional(),
            negotiatorIds: z.array(z.string()).nullable().optional(),
            categoryIds: z.array(z.string()).nullable().optional(),
            communicationPreferenceLetter: z.boolean().nullable().optional(),
            communicationPreferenceEmail: z.boolean().nullable().optional(),
            communicationPreferencePhone: z.boolean().nullable().optional(),
            communicationPreferenceSMS: z.boolean().nullable().optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
            extrasField: z.record(z.string(), z.object({})).nullable().optional(),
            relationships: z
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
                  contactId: z.string().nullable().optional(),
                  associatedType: z.string().nullable().optional(),
                  associatedId: z.string().nullable().optional(),
                  fromArchive: z.boolean().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
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
export const useGetApiContacts = (args: UseGetApiContactsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateContactArgs = {
  body: /** Request body used to create a new contact */
  {
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined | null
    forename?: /** The contact's forename */ string | undefined | null
    surname: /** The contact's surname */ string
    dateOfBirth?: /** The contact's date of birth */ string | undefined | null
    active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined | null
    marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */ string
    source?: /** Request body used to set the source of a new contact */
    | {
          id?: /** The unique identifier of the source of the contact */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
    string | undefined | null
    workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
    string | undefined | null
    mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
    string | undefined | null
    email?: /** The email address of the contact (Required when no other contact details are provided) */
    string | undefined | null
    officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string>
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined | null
    primaryAddress?: /** Request body used to set an address against a new contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined | null
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined | null
        }
      | undefined
      | null
    secondaryAddress?: /** Request body used to set an address against a new contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined | null
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined | null
        }
      | undefined
      | null
    workAddress?: /** Request body used to set an address against a new contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined | null
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined | null
        }
      | undefined
      | null
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined | null
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined | null
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined | null
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined | null
    metadata?: /** App specific metadata to set against the contact */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const createContactFn = async ({ body }: UseCreateContactArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateContact = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createContactFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type UseGetApiContactsIdArgs = {
  id: string
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | undefined
    | null
  extrasField?: Array<string> | undefined | null
}
export const getApiContactsIdFn = async ({ id, embed, extrasField }: UseGetApiContactsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
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
      title: z.string().nullable().optional(),
      forename: z.string().nullable().optional(),
      surname: z.string().nullable().optional(),
      dateOfBirth: z.string().nullable().optional(),
      active: z.boolean().nullable().optional(),
      marketingConsent: z.string().nullable().optional(),
      identityCheck: z.string().nullable().optional(),
      source: z
        .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
        .nullable()
        .optional(),
      homePhone: z.string().nullable().optional(),
      workPhone: z.string().nullable().optional(),
      mobilePhone: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
      archivedOn: z.string().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      primaryAddress: z
        .object({
          type: z.string().nullable().optional(),
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
      secondaryAddress: z
        .object({
          type: z.string().nullable().optional(),
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
      workAddress: z
        .object({
          type: z.string().nullable().optional(),
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
      officeIds: z.array(z.string()).nullable().optional(),
      negotiatorIds: z.array(z.string()).nullable().optional(),
      categoryIds: z.array(z.string()).nullable().optional(),
      communicationPreferenceLetter: z.boolean().nullable().optional(),
      communicationPreferenceEmail: z.boolean().nullable().optional(),
      communicationPreferencePhone: z.boolean().nullable().optional(),
      communicationPreferenceSMS: z.boolean().nullable().optional(),
      additionalContactDetails: z
        .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
      extrasField: z.record(z.string(), z.object({})).nullable().optional(),
      relationships: z
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
            contactId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiContactsId = (args: UseGetApiContactsIdArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdFn(args),
  })

  return result
}
export type UsePatchApiContactsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing contact */
  {
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined | null
    forename?: /** The contact's forename */ string | undefined | null
    surname?: /** The contact's surname */ string | undefined | null
    dateOfBirth?: /** The contact's date of birth */ string | undefined | null
    active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined | null
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */
    string | undefined | null
    source?: /** Request body used to update the source of an existing contact */
    | {
          id?: /** The unique identifier of the source of the contact */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    homePhone?: /** The home phone number of the contact */ string | undefined | null
    workPhone?: /** The work phone number of the contact */ string | undefined | null
    mobilePhone?: /** The mobile phone number of the contact */ string | undefined | null
    email?: /** The email address of the contact */ string | undefined | null
    officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined | null
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined | null
    primaryAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined | null
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined | null
        }
      | undefined
      | null
    secondaryAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined | null
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined | null
        }
      | undefined
      | null
    workAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined | null
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined | null
        }
      | undefined
      | null
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined | null
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined | null
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined | null
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined | null
    fromArchive?: /** A flag determining whether the contact is archived */ boolean | undefined | null
    metadata?: /** App specific metadata to set against the contact */
    Record<string, Record<string, never>> | undefined | null
    additionalContactDetails?: /** A collection of additional contact details */
    Record<string, string> | undefined | null
  }
}
export const patchApiContactsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiContactsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiContactsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiContactsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type UseGetApiContactsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
}
export const getApiContactsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiContactsIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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
            contactId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
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
export const useGetApiContactsIdRelationships = (args: UseGetApiContactsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiContactsIdSubscriptionsArgs = {
  id: string
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  type?: string | undefined | null
  status?: string | undefined | null
}
export const getApiContactsIdSubscriptionsFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
  status,
}: UseGetApiContactsIdSubscriptionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions${querySerialiser({ args: { pageSize, pageNumber, type, status }, options: defaultQuerySerialiserOptions })}`,
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
            contactId: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            group: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            subscribedOn: z.string().nullable().optional(),
            unsubscribedOn: z.string().nullable().optional(),
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
export const useGetApiContactsIdSubscriptions = (args: UseGetApiContactsIdSubscriptionsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiContactsIdSubscriptionsSubscriptionIdArgs = { id: string; subscriptionId: string }
export const getApiContactsIdSubscriptionsSubscriptionIdFn = async ({
  id,
  subscriptionId,
}: UseGetApiContactsIdSubscriptionsSubscriptionIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions/${subscriptionId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      contactId: z.string().nullable().optional(),
      name: z.string().nullable().optional(),
      group: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      subscribedOn: z.string().nullable().optional(),
      unsubscribedOn: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiContactsIdSubscriptionsSubscriptionId = (
  args: UseGetApiContactsIdSubscriptionsSubscriptionIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsSubscriptionIdFn(args),
  })

  return result
}
export type UseUpdateContactSubscriptionArgs = {
  id: string
  subscriptionId: string
  body: /** Request body used to update an existing contact subscription */
  { status?: /** The status of the subscription (subscribed/unsubscribed) */ string | undefined | null }
}
export const updateContactSubscriptionFn = async ({ id, subscriptionId, body }: UseUpdateContactSubscriptionArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${id}/subscriptions/${subscriptionId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
      body: JSON.stringify({ id, subscriptionId, body }),
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
export const useUpdateContactSubscription = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateContactSubscriptionFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
