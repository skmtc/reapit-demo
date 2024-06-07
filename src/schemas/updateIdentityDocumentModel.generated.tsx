import { z } from 'zod'

/** Request body to update an identity document attached to an existing contact identity check */
export const updateIdentityDocumentModel = /** Request body to update an identity document attached to an existing contact identity check */
z.object({typeId: /** The unique identifier of the type of identity document provided */
z.string().optional(), expiry: /** The date when the document expires and becomes invalid */
z.string().optional(), details: /** Details regarding the identity document (eg. passport number) */
z.string().optional(), fileData: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
z.string().optional(), fileUrl: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
z.string().optional(), name: /** The filename to store the document as */
z.string().optional()});
/** Request body to update an identity document attached to an existing contact identity check */
export type UpdateIdentityDocumentModel = /** Request body to update an identity document attached to an existing contact identity check */
{typeId?: /** The unique identifier of the type of identity document provided */
string | undefined, expiry?: /** The date when the document expires and becomes invalid */
string | undefined, details?: /** Details regarding the identity document (eg. passport number) */
string | undefined, fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
string | undefined, fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
string | undefined, name?: /** The filename to store the document as */
string | undefined};