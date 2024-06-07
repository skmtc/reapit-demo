import { z } from 'zod'

/** Request body used to create a new document */
export const createDocumentModel = /** Request body used to create a new document */
z.object({associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
z.string(), associatedId: /** The unique identifier of the entity that the document is associated with */
z.string(), typeId: /** The unique identifier of the type of document */
z.string(), name: /** The filename of the document */
z.string(), isPrivate: /** A flag denoting whether or not the document is private */
z.boolean().optional(), fileData: /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
z.string().optional(), fileUrl: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
z.string().optional(), metadata: /** App specific metadata to set against the document */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new document */
export type CreateDocumentModel = /** Request body used to create a new document */
{associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
string, associatedId: /** The unique identifier of the entity that the document is associated with */
string, typeId: /** The unique identifier of the type of document */
string, name: /** The filename of the document */
string, isPrivate?: /** A flag denoting whether or not the document is private */
boolean | undefined, fileData?: /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
string | undefined, fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
string | undefined, metadata?: /** App specific metadata to set against the document */
Record<string, Record<string, never>> | undefined};