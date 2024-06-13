import { z } from 'zod'

/** Request body used to create a new certificate */
export const createCertificateModel =
  /** Request body used to create a new certificate */
  z.object({
    /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
    category: z.string().optional().nullable(),
    /** The certificate's type */ typeId: z.string().optional().nullable(),
    /** The certificate's start date */ start: z.string().optional().nullable(),
    /** The certificate's expiry date */ expiry: z.string().optional().nullable(),
    /** The unique identifier of the company that supplied, or is supplying, the certificate */
    companyId: z.string().optional().nullable(),
    /** Any general notes regarding the certificate */ notes: z.string().optional().nullable(),
    /** The certificate's reference number */ referenceNumber: z.string().optional().nullable(),
  })
/** Request body used to create a new certificate */
export type CreateCertificateModel =
  /** Request body used to create a new certificate */
  {
    category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | null | undefined
    typeId?: /** The certificate's type */ string | null | undefined
    start?: /** The certificate's start date */ string | null | undefined
    expiry?: /** The certificate's expiry date */ string | null | undefined
    companyId?:
      | /** The unique identifier of the company that supplied, or is supplying, the certificate */
      string
      | null
      | undefined
    notes?: /** Any general notes regarding the certificate */ string | null | undefined
    referenceNumber?: /** The certificate's reference number */ string | null | undefined
  }
