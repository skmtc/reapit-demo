import { z } from 'zod'

/** Request body to update an identity document attached to an existing contact identity check */
export const updateIdentityDocumentModel = z.object({
  /** The unique identifier of the type of identity document provided */ typeId: z.string().nullable().optional(),
  /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
  /** Details regarding the identity document (eg. passport number) */ details: z.string().nullable().optional(),
  /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
  fileData: z.string().nullable().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().nullable().optional(),
  /** The filename to store the document as */ name: z.string().nullable().optional(),
})
