import { z } from 'zod'

/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export const createIdentityDocumentModel = /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
z.object({typeId: /** The unique identifier of the type of identity document provided */
z.string(), expiry: /** The date when the document expires and becomes invalid */
z.string().optional(), details: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
z.string().optional(), fileData: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
z.string().optional(), fileUrl: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
z.string().optional(), name: /** The filename to store the document as (Required when 'details' are not given) */
z.string().optional()});
/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export type CreateIdentityDocumentModel = /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
{typeId: /** The unique identifier of the type of identity document provided */
string, expiry?: /** The date when the document expires and becomes invalid */
string | undefined, details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
string | undefined, fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
string | undefined, fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
string | undefined, name?: /** The filename to store the document as (Required when 'details' are not given) */
string | undefined};