import { z } from 'zod'

/** Request body used to create a new document */
export const createDocumentModel = z.object({
  /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
  associatedType: z.string(),
  /** The unique identifier of the entity that the document is associated with */ associatedId: z.string(),
  /** The unique identifier of the type of document */ typeId: z.string(),
  /** The filename of the document */ name: z.string(),
  /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().nullable().optional(),
  /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
  fileData: z.string().nullable().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().nullable().optional(),
  /** App specific metadata to set against the document */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new document */
export type CreateDocumentModel = {
  associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
  string
  associatedId: /** The unique identifier of the entity that the document is associated with */ string
  typeId: /** The unique identifier of the type of document */ string
  name: /** The filename of the document */ string
  isPrivate?: /** A flag denoting whether or not the document is private */ boolean | undefined
  fileData?: /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
  string | undefined
  fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  string | undefined
  metadata?: /** App specific metadata to set against the document */ Record<string, Record<string, never>> | undefined
}
