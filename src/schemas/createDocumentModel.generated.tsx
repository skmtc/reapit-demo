import { z } from 'zod'

/** Request body used to create a new document */
export type CreateDocumentModel =
  /** Request body used to create a new document */
  {
    associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
    string
    associatedId: /** The unique identifier of the entity that the document is associated with */ string
    typeId: /** The unique identifier of the type of document */ string
    name: /** The filename of the document */ string
    isPrivate?: /** A flag denoting whether or not the document is private */ boolean | null | undefined
    fileData?:
      | /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
      string
      | null
      | undefined
    fileUrl?:
      | /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      string
      | null
      | undefined
    metadata?:
      | /** App specific metadata to set against the document */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createDocumentModel =
  /** Request body used to create a new document */
  z.object({
    /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
    associatedType: z.string(),
    /** The unique identifier of the entity that the document is associated with */ associatedId: z.string(),
    /** The unique identifier of the type of document */ typeId: z.string(),
    /** The filename of the document */ name: z.string(),
    /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().optional().nullable(),
    /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
    fileData: z.string().optional().nullable(),
    /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
    fileUrl: z.string().optional().nullable(),
    /** App specific metadata to set against the document */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
