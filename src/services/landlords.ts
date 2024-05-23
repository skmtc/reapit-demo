import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiLandlordsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined | null
  id?: Array<string> | undefined | null
  email?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
  active?: boolean | undefined | null
  address?: string | undefined | null
  name?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
}
export const getApiLandlordsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  email,
  officeId,
  extrasField,
  active,
  address,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiLandlordsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, email, officeId, extrasField, active, address, name, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            active: z.boolean().nullable().optional(),
            solicitorId: z.string().nullable().optional(),
            officeId: z.string().nullable().optional(),
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
            extrasField: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiLandlords = (args: UseGetApiLandlordsArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateLandlordArgs = {
  body: /** Request body used to create a new landlord */
  {
    active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined | null
    solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
    string | undefined | null
    officeId: /** The unique identifier of the office that is associated to the landlord */ string
    source?: /** Request body used to set the source of a new landlord */
    | {
          id?: /** The unique identifier of the source of the landlord */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a new relationship between a landlord and a contact or company */
    {
      associatedId?: /** The unique identifier of the contact or company to create a relationship with */
      string | undefined | null
      associatedType?: /** The type of relationship to create (contact/company) */ string | undefined | null
    }>
    metadata?: /** App specific metadata that to set against the landlord */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const createLandlordFn = async ({ body }: UseCreateLandlordArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateLandlord = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createLandlordFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
export type UseGetApiLandlordsIdArgs = {
  id: string
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined | null
  extrasField?: Array<string> | undefined | null
}
export const getApiLandlordsIdFn = async ({ id, embed, extrasField }: UseGetApiLandlordsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
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
      active: z.boolean().nullable().optional(),
      solicitorId: z.string().nullable().optional(),
      officeId: z.string().nullable().optional(),
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
      extrasField: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiLandlordsId = (args: UseGetApiLandlordsIdArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdFn(args),
  })

  return result
}
export type UsePatchApiLandlordsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing landlord */
  {
    active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined | null
    solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
    string | undefined | null
    officeId?: /** The unique identifier of the office that is associated to the landlord */ string | undefined | null
    source?: /** Request body used to update the source of an existing landlord */
    | {
          id?: /** The unique identifier of the source of the landlord */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    metadata?: /** App specific metadata that to set against the landlord */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiLandlordsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiLandlordsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiLandlordsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiLandlordsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
export type UseGetApiLandlordsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
}
export const getApiLandlordsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiLandlordsIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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
            landlordId: z.string().nullable().optional(),
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
export const useGetApiLandlordsIdRelationships = (args: UseGetApiLandlordsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateLandlordRelationshipArgs = {
  id: string
  body: /** Request body used to create or update a relationship between a landlord and a contact or company */
  {
    associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
    associatedType: /** The type of relationship to create (contact/company) */ string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }
}
export const createLandlordRelationshipFn = async ({ id, body }: UseCreateLandlordRelationshipArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateLandlordRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createLandlordRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
export type UseGetApiLandlordsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiLandlordsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiLandlordsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      landlordId: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      associatedType: z.string().nullable().optional(),
      associatedId: z.string().nullable().optional(),
      isMain: z.boolean().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiLandlordsIdRelationshipsRelationshipId = (
  args: UseGetApiLandlordsIdRelationshipsRelationshipIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdRelationshipsRelationshipIdFn(args),
  })

  return result
}
export type UseDeleteApiLandlordsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const deleteApiLandlordsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseDeleteApiLandlordsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/landlords/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useDeleteApiLandlordsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiLandlordsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    },
  })
}
