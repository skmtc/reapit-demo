import { z } from 'zod'

/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export const createIdentityDocumentModel =
  /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
  z.object({
    /** The unique identifier of the type of identity document provided */ typeId: z.string(),
    /** The date when the document expires and becomes invalid */ expiry: z.string().optional().nullable(),
    /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
    details: z.string().optional().nullable(),
    /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
    fileData: z.string().optional().nullable(),
    /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
    fileUrl: z.string().optional().nullable(),
    /** The filename to store the document as (Required when 'details' are not given) */
    name: z.string().optional().nullable(),
  })
/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export type CreateIdentityDocumentModel =
  /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
  {
    typeId: /** The unique identifier of the type of identity document provided */ string
    expiry?: /** The date when the document expires and becomes invalid */ string | null | undefined
    details?:
      | /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
      string
      | null
      | undefined
    fileData?:
      | /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      string
      | null
      | undefined
    fileUrl?:
      | /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      string
      | null
      | undefined
    name?:
      | /** The filename to store the document as (Required when 'details' are not given) */
      string
      | null
      | undefined
  }
