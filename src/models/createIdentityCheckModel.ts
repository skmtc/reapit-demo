import { z } from 'zod'

/** Request body used to create a new contact identity check */
export const createIdentityCheckModel = z.object({
  /** The unique identifier of the contact associated to the identity check */ contactId: z.string(),
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */ status: z.string(),
  /** The unique identifier of the negotiator that initiated the identity check */ negotiatorId: z.string(),
  /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
  identityDocument1: z
    .object({
      /** The unique identifier of the type of identity document provided */ typeId: z.string(),
      /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
      /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
      details: z.string().nullable().optional(),
      /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      fileData: z.string().nullable().optional(),
      /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      fileUrl: z.string().nullable().optional(),
      /** The filename to store the document as (Required when 'details' are not given) */
      name: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
  identityDocument2: z
    .object({
      /** The unique identifier of the type of identity document provided */ typeId: z.string(),
      /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
      /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
      details: z.string().nullable().optional(),
      /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      fileData: z.string().nullable().optional(),
      /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      fileUrl: z.string().nullable().optional(),
      /** The filename to store the document as (Required when 'details' are not given) */
      name: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** App specific metadata to set against the identity check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new contact identity check */
export type CreateIdentityCheckModel = {
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
