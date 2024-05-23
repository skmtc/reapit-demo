import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiIdentityChecksArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined | null
  id?: Array<string> | undefined | null
  contactId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | undefined | null
  checkDateFrom?: string | undefined | null
  checkDateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
}
export const getApiIdentityChecksFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  contactId,
  negotiatorId,
  status,
  checkDateFrom,
  checkDateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiIdentityChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, contactId, negotiatorId, status, checkDateFrom, checkDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            id: z.string().nullable().optional(),
            contactId: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            checkDate: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            identityDocument1: z
              .object({
                documentId: z.string().nullable().optional(),
                typeId: z.string().nullable().optional(),
                expiry: z.string().nullable().optional(),
                details: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            identityDocument2: z
              .object({
                documentId: z.string().nullable().optional(),
                typeId: z.string().nullable().optional(),
                expiry: z.string().nullable().optional(),
                details: z.string().nullable().optional(),
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
export const useGetApiIdentityChecks = (args: UseGetApiIdentityChecksArgs) => {
  const result = useQuery({
    queryKey: ['IdentityChecks'],
    queryFn: () => getApiIdentityChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiIdentityChecksArgs = {
  body: /** Request body used to create a new contact identity check */
  {
    contactId: /** The unique identifier of the contact associated to the identity check */ string
    checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
    string
    status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */ string
    negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */ string
    identityDocument1?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */ string
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined | null
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined | null
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined | null
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined | null
          name?: /** The filename to store the document as (Required when 'details' are not given) */
          string | undefined | null
        }
      | undefined
      | null
    identityDocument2?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */ string
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined | null
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined | null
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined | null
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined | null
          name?: /** The filename to store the document as (Required when 'details' are not given) */
          string | undefined | null
        }
      | undefined
      | null
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const postApiIdentityChecksFn = async ({ body }: UsePostApiIdentityChecksArgs) => {
  const res = await fetch(`/identityChecks/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`, {
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
export const usePostApiIdentityChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiIdentityChecksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    },
  })
}
export type UseGetApiIdentityChecksIdArgs = {
  id: string
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined | null
}
export const getApiIdentityChecksIdFn = async ({ id, embed }: UseGetApiIdentityChecksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      checkDate: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      identityDocument1: z
        .object({
          documentId: z.string().nullable().optional(),
          typeId: z.string().nullable().optional(),
          expiry: z.string().nullable().optional(),
          details: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      identityDocument2: z
        .object({
          documentId: z.string().nullable().optional(),
          typeId: z.string().nullable().optional(),
          expiry: z.string().nullable().optional(),
          details: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiIdentityChecksId = (args: UseGetApiIdentityChecksIdArgs) => {
  const result = useQuery({
    queryKey: ['IdentityChecks'],
    queryFn: () => getApiIdentityChecksIdFn(args),
  })

  return result
}
export type UsePatchApiIdentityChecksIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an exist contact identity check */
  {
    checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
    string | undefined | null
    status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
    string | undefined | null
    negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */
    string | undefined | null
    identityDocument1?: /** Request body to update an identity document attached to an existing contact identity check */
    | {
          typeId?: /** The unique identifier of the type of identity document provided */ string | undefined | null
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined | null
          details?: /** Details regarding the identity document (eg. passport number) */ string | undefined | null
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined | null
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined | null
          name?: /** The filename to store the document as */ string | undefined | null
        }
      | undefined
      | null
    identityDocument2?: /** Request body to update an identity document attached to an existing contact identity check */
    | {
          typeId?: /** The unique identifier of the type of identity document provided */ string | undefined | null
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined | null
          details?: /** Details regarding the identity document (eg. passport number) */ string | undefined | null
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined | null
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined | null
          name?: /** The filename to store the document as */ string | undefined | null
        }
      | undefined
      | null
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiIdentityChecksIdFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiIdentityChecksIdArgs) => {
  const res = await fetch(
    `/identityChecks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiIdentityChecksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiIdentityChecksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    },
  })
}
export type UsePostApiIdentityChecksSignedUrlArgs = {
  body: /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  { amount: /** The number of pre signed urls to create */ number }
}
export const postApiIdentityChecksSignedUrlFn = async ({ body }: UsePostApiIdentityChecksSignedUrlArgs) => {
  const res = await fetch(
    `/identityChecks/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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

  return z.object({ amount: z.number().int() }).parse(data)
}
export const usePostApiIdentityChecksSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiIdentityChecksSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    },
  })
}
