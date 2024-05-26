import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiContactsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined
  id?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  email?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  address?: string | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined
  name?: string | undefined
  nameType?: string | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
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
export type UsePostApiContactsArgs = {
  body: /** Request body used to create a new contact */
  {
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname: /** The contact's surname */ string
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
    marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */ string
    source?: /** Request body used to set the source of a new contact */
    | {
          id?: /** The unique identifier of the source of the contact */ string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    email?: /** The email address of the contact (Required when no other contact details are provided) */
    string | undefined
    officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string>
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
    primaryAddress?: /** Request body used to set an address against a new contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
        }
      | undefined
    secondaryAddress?: /** Request body used to set an address against a new contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
        }
      | undefined
    workAddress?: /** Request body used to set an address against a new contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
        }
      | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata to set against the contact */ Record<string, Record<string, never>> | undefined
  }
}
export const postApiContactsFn = async ({ body }: UsePostApiContactsArgs) => {
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
export const usePostApiContacts = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiContactsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
export type UseGetApiContactsIdArgs = {
  id: string
  embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined
  extrasField?: Array<string> | undefined
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
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname?: /** The contact's surname */ string | undefined
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */ string | undefined
    source?: /** Request body used to update the source of an existing contact */
    | {
          id?: /** The unique identifier of the source of the contact */ string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    homePhone?: /** The home phone number of the contact */ string | undefined
    workPhone?: /** The work phone number of the contact */ string | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | undefined
    email?: /** The email address of the contact */ string | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string> | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
    primaryAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined
        }
      | undefined
    secondaryAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined
        }
      | undefined
    workAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined
        }
      | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined
    fromArchive?: /** A flag determining whether the contact is archived */ boolean | undefined
    metadata?: /** App specific metadata to set against the contact */ Record<string, Record<string, never>> | undefined
    additionalContactDetails?: /** A collection of additional contact details */ Record<string, string> | undefined
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
  pageSize?: number | undefined
  pageNumber?: number | undefined
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
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
  status?: string | undefined
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
export type UsePutApiContactsIdSubscriptionsSubscriptionIdArgs = {
  id: string
  subscriptionId: string
  body: /** Request body used to update an existing contact subscription */
  { status?: /** The status of the subscription (subscribed/unsubscribed) */ string | undefined }
}
export const putApiContactsIdSubscriptionsSubscriptionIdFn = async ({
  id,
  subscriptionId,
  body,
}: UsePutApiContactsIdSubscriptionsSubscriptionIdArgs) => {
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
export const usePutApiContactsIdSubscriptionsSubscriptionId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: putApiContactsIdSubscriptionsSubscriptionIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
