import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiIdentityChecksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined
  id?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | undefined
  checkDateFrom?: string | undefined
  checkDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
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
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as (Required when 'details' are not given) */ string | undefined
        }
      | undefined
    identityDocument2?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */ string
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as (Required when 'details' are not given) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined
  }
}
export const postApiIdentityChecksFn = async ({ body }: UsePostApiIdentityChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined
}
export const getApiIdentityChecksIdFn = async ({ id, embed }: UseGetApiIdentityChecksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
    string | undefined
    status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */ string | undefined
    identityDocument1?: /** Request body to update an identity document attached to an existing contact identity check */
    | {
          typeId?: /** The unique identifier of the type of identity document provided */ string | undefined
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined
          details?: /** Details regarding the identity document (eg. passport number) */ string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as */ string | undefined
        }
      | undefined
    identityDocument2?: /** Request body to update an identity document attached to an existing contact identity check */
    | {
          typeId?: /** The unique identifier of the type of identity document provided */ string | undefined
          expiry?: /** The date when the document expires and becomes invalid */ string | undefined
          details?: /** Details regarding the identity document (eg. passport number) */ string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined
  }
}
export const patchApiIdentityChecksIdFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiIdentityChecksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
    `${import.meta.env.VITE_PLATFORM_API_URL}/identityChecks/signedUrl${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
