import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiJournalEntriesArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?: Array<'property' | 'negotiator' | 'type'> | undefined | null
  associatedType?: string | undefined | null
  associatedId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  typeId?: Array<string> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    string | undefined | null
    propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
    string | undefined | null
    associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
    string | undefined | null
    associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
    string | undefined | null
    description: /** The textual description of the journal entry event */ string
    negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | undefined | null
  }
}
export const postApiJournalEntriesFn = async ({ body }: UsePostApiJournalEntriesArgs) => {
  const res = await fetch(`/journalEntries/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`, {
    method: 'POST',
    body: JSON.stringify({ body }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
    },
  })

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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  landlordId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  type?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
          string | undefined | null
          propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
          string | undefined | null
          associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
          string | undefined | null
          associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
          string | undefined | null
          description: /** The textual description of the journal entry event */ string
          negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | undefined | null
        }>
      | undefined
      | null
  }
}
export const postApiJournalEntriesBulkFn = async ({ body }: UsePostApiJournalEntriesBulkArgs) => {
  const res = await fetch(
    `/journalEntries/bulk${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
