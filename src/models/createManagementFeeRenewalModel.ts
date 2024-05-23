import { z } from 'zod'

/** Request body used to create a tenancy renewals management fee */
export const createManagementFeeRenewalModel = z.object({
  /** The mangement fee type (fixed/perentage) */ type: z.string().nullable().optional(),
  /** The mangement fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().nullable().optional(),
  /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().nullable().optional(),
})
