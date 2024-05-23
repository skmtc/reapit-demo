import { z } from 'zod'

/** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
export const tenancyArrearsModel = z.object({
  /** A flag determining whether or not tenancy arrears should be chased */
  chaseArrears: z.boolean().nullable().optional(),
  /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
  paymentPlan: z.string().nullable().optional(),
})
