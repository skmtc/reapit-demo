import { z } from 'zod'

/** Request body used to create a new certificate */
export const createCertificateModel = z.object({
  /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
  category: z.string().nullable().optional(),
  /** The certificate's type */ typeId: z.string().nullable().optional(),
  /** The certificate's start date */ start: z.string().nullable().optional(),
  /** The certificate's expiry date */ expiry: z.string().nullable().optional(),
  /** The unique identifier of the company that supplied, or is supplying, the certificate */
  companyId: z.string().nullable().optional(),
  /** Any general notes regarding the certificate */ notes: z.string().nullable().optional(),
  /** The certificate's reference number */ referenceNumber: z.string().nullable().optional(),
})
/** Request body used to create a new certificate */
export type CreateCertificateModel = {
  category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | undefined
  typeId?: /** The certificate's type */ string | undefined
  start?: /** The certificate's start date */ string | undefined
  expiry?: /** The certificate's expiry date */ string | undefined
  companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
  string | undefined
  notes?: /** Any general notes regarding the certificate */ string | undefined
  referenceNumber?: /** The certificate's reference number */ string | undefined
}
