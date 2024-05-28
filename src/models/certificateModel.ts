import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a cerificate */
export const certificateModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the certificate */ id: z.string().nullable().optional(),
  /** The date and time when the certificate was created */ created: z.string().nullable().optional(),
  /** The date and time when the certificate was last modified */ modified: z.string().nullable().optional(),
  /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
  category: z.string().nullable().optional(),
  /** The certificate's type */ typeId: z.string().nullable().optional(),
  /** The certificate's start date */ start: z.string().nullable().optional(),
  /** The certificate's expiry date */ expiry: z.string().nullable().optional(),
  /** The unique identifier of the property */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the company */ companyId: z.string().nullable().optional(),
  /** The unique identifier of the certificates status */ statusId: z.string().nullable().optional(),
  /** Any general notes regarding the certificate */ notes: z.string().nullable().optional(),
  /** The certificate's reference number */ referenceNumber: z.string().nullable().optional(),
  /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
  responsibleParty: z.string().nullable().optional(),
  /** The ETag for the current version of the certificate. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a cerificate */
export type CertificateModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the certificate */ string | undefined
  created?: /** The date and time when the certificate was created */ string | undefined
  modified?: /** The date and time when the certificate was last modified */ string | undefined
  category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | undefined
  typeId?: /** The certificate's type */ string | undefined
  start?: /** The certificate's start date */ string | undefined
  expiry?: /** The certificate's expiry date */ string | undefined
  propertyId?: /** The unique identifier of the property */ string | undefined
  companyId?: /** The unique identifier of the company */ string | undefined
  statusId?: /** The unique identifier of the certificates status */ string | undefined
  notes?: /** Any general notes regarding the certificate */ string | undefined
  referenceNumber?: /** The certificate's reference number */ string | undefined
  responsibleParty?: /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
  string | undefined
  _eTag?: /** The ETag for the current version of the certificate. Used for managing update concurrency */
  string | undefined
}
