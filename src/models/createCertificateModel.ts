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
