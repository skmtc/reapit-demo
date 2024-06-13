import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type CertificateModel =
  /** Representation of a cerificate */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the certificate */ string | null | undefined
    created?: /** The date and time when the certificate was created */ string | null | undefined
    modified?: /** The date and time when the certificate was last modified */ string | null | undefined
    category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | null | undefined
    typeId?: /** The certificate's type */ string | null | undefined
    start?: /** The certificate's start date */ string | null | undefined
    expiry?: /** The certificate's expiry date */ string | null | undefined
    propertyId?: /** The unique identifier of the property */ string | null | undefined
    companyId?: /** The unique identifier of the company */ string | null | undefined
    statusId?: /** The unique identifier of the certificates status */ string | null | undefined
    notes?: /** Any general notes regarding the certificate */ string | null | undefined
    referenceNumber?: /** The certificate's reference number */ string | null | undefined
    responsibleParty?:
      | /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
      string
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the certificate. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a cerificate */
export const certificateModel =
  /** Representation of a cerificate */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the certificate */ id: z.string().optional().nullable(),
    /** The date and time when the certificate was created */ created: z.string().optional().nullable(),
    /** The date and time when the certificate was last modified */ modified: z.string().optional().nullable(),
    /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
    category: z.string().optional().nullable(),
    /** The certificate's type */ typeId: z.string().optional().nullable(),
    /** The certificate's start date */ start: z.string().optional().nullable(),
    /** The certificate's expiry date */ expiry: z.string().optional().nullable(),
    /** The unique identifier of the property */ propertyId: z.string().optional().nullable(),
    /** The unique identifier of the company */ companyId: z.string().optional().nullable(),
    /** The unique identifier of the certificates status */ statusId: z.string().optional().nullable(),
    /** Any general notes regarding the certificate */ notes: z.string().optional().nullable(),
    /** The certificate's reference number */ referenceNumber: z.string().optional().nullable(),
    /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
    responsibleParty: z.string().optional().nullable(),
    /** The ETag for the current version of the certificate. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
