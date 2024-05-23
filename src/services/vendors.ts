import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiVendorsIdArgs = {
  id: string
  embed?:
    | Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'>
    | undefined
    | null
}
export const getApiVendorsIdFn = async ({ id, embed }: UseGetApiVendorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
      lastCall: z.string().nullable().optional(),
      nextCall: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      sellingReasonId: z.string().nullable().optional(),
      solicitorId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      source: z
        .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
        .nullable()
        .optional(),
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
            fromArchive: z.boolean().nullable().optional(),
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
      correspondenceAddressType: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      officeIds: z.array(z.string()).nullable().optional(),
      archivedOn: z.string().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiVendorsId = (args: UseGetApiVendorsIdArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdFn(args),
  })

  return result
}
export type UsePatchApiVendorsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing vendor */
  {
    lastCall?: /** The date the vendor was last called */ string | undefined | null
    nextCall?: /** The date the vendor is next due to be called */ string | undefined | null
    typeId?: /** The unique identifier of the type of vendor */ string | undefined | null
    sellingReasonId?: /** The unique identifier of the reason the vendor is selling */ string | undefined | null
    solicitorId?: /** The unique identifier of the vendor's solicitor */ string | undefined | null
    correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
    string | undefined | null
    source?: /** Representation of a vendor's source */
    | {
          id?: /** The unique identifier of the source of the vendor */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    metadata?: /** App specific metadata that has been set against the vendor */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiVendorsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiVendorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiVendorsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiVendorsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
export type UseGetApiVendorsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?:
    | Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'>
    | undefined
    | null
  id?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  email?: Array<string> | undefined | null
  fromArchive?: boolean | undefined | null
  address?: string | undefined | null
  name?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  lastCallFrom?: string | undefined | null
  lastCallTo?: string | undefined | null
  nextCallFrom?: string | undefined | null
  nextCallTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
}
export const getApiVendorsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  negotiatorId,
  officeId,
  email,
  fromArchive,
  address,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  lastCallFrom,
  lastCallTo,
  nextCallFrom,
  nextCallTo,
  metadata,
}: UseGetApiVendorsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, negotiatorId, officeId, email, fromArchive, address, name, createdFrom, createdTo, modifiedFrom, modifiedTo, lastCallFrom, lastCallTo, nextCallFrom, nextCallTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            lastCall: z.string().nullable().optional(),
            nextCall: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            sellingReasonId: z.string().nullable().optional(),
            solicitorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            source: z
              .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
              .nullable()
              .optional(),
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
                  fromArchive: z.boolean().nullable().optional(),
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
            correspondenceAddressType: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            officeIds: z.array(z.string()).nullable().optional(),
            archivedOn: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
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
export const useGetApiVendors = (args: UseGetApiVendorsArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiVendorsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
}
export const getApiVendorsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiVendorsIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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
            vendorId: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            isMain: z.boolean().nullable().optional(),
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
export const useGetApiVendorsIdRelationships = (args: UseGetApiVendorsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateVendorRelationshipArgs = {
  id: string
  body: /** Request body used to create or update a relationship between a vendor and a contact or company */
  {
    associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
    associatedType: /** The type of relationship to create (contact/company) */ string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }
}
export const createVendorRelationshipFn = async ({ id, body }: UseCreateVendorRelationshipArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
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
export const useCreateVendorRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createVendorRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
export type UseGetApiVendorsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiVendorsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiVendorsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      vendorId: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      associatedType: z.string().nullable().optional(),
      associatedId: z.string().nullable().optional(),
      isMain: z.boolean().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiVendorsIdRelationshipsRelationshipId = (
  args: UseGetApiVendorsIdRelationshipsRelationshipIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsRelationshipIdFn(args),
  })

  return result
}
export type UseDeleteApiVendorsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const deleteApiVendorsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseDeleteApiVendorsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, relationshipId }),
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
export const useDeleteApiVendorsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiVendorsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    },
  })
}
