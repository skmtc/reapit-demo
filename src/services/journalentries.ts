import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiJournalEntriesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'property' | 'negotiator' | 'type'> | undefined
  associatedType?: string | undefined
  associatedId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
}
export const getApiJournalEntriesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  associatedType,
  associatedId,
  negotiatorId,
  propertyId,
  typeId,
  createdFrom,
  createdTo,
}: UseGetApiJournalEntriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, associatedType, associatedId, negotiatorId, propertyId, typeId, createdFrom, createdTo }, options: defaultQuerySerialiserOptions })}`,
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
            created: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
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
export const useGetApiJournalEntries = (args: UseGetApiJournalEntriesArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiJournalEntriesArgs = {
  body: /** Request body to create a journal entry */
  {
    typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
    string | undefined
    propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
    string | undefined
    associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
    string | undefined
    associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
    string | undefined
    description: /** The textual description of the journal entry event */ string
    negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | undefined
  }
}
export const postApiJournalEntriesFn = async ({ body }: UsePostApiJournalEntriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiJournalEntries = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiJournalEntriesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['JournalEntries'] })
    },
  })
}
export type UseGetApiJournalEntriesLandlordsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  landlordId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  type?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
}
export const getApiJournalEntriesLandlordsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  landlordId,
  negotiatorId,
  propertyId,
  type,
  createdFrom,
  createdTo,
}: UseGetApiJournalEntriesLandlordsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/landlords${querySerialiser({ args: { pageSize, pageNumber, sortBy, landlordId, negotiatorId, propertyId, type, createdFrom, createdTo }, options: defaultQuerySerialiserOptions })}`,
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
            created: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            landlordId: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
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
export const useGetApiJournalEntriesLandlords = (args: UseGetApiJournalEntriesLandlordsArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesLandlordsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiJournalEntriesBulkArgs = {
  body: /** Request body to create bulk journal entry */
  {
    createJournalEntry?: /** Collection of journal entries */
    | Array</** Request body to create a journal entry */
        {
          typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
          string | undefined
          propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
          string | undefined
          associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
          string | undefined
          associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
          string | undefined
          description: /** The textual description of the journal entry event */ string
          negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | undefined
        }>
      | undefined
  }
}
export const postApiJournalEntriesBulkFn = async ({ body }: UsePostApiJournalEntriesBulkArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/bulk${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiJournalEntriesBulk = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiJournalEntriesBulkFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['JournalEntries'] })
    },
  })
}
