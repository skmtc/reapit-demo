import { z } from 'zod'

/** Request body used to update an existing certificate */
export const updateCertificateModel = z.object({
  /** The certificate's start date */ start: z.string().nullable().optional(),
  /** The certificate's expiry date */ expiry: z.string().nullable().optional(),
  /** The unique identifier of the company */ companyId: z.string().nullable().optional(),
  /** Any general notes regarding the certificate */ notes: z.string().nullable().optional(),
  /** The certificate's reference number */ referenceNumber: z.string().nullable().optional(),
})
