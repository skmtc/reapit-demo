import { z } from 'zod'

/** Request body used to create a tenancy renewals letting fee */
export const createLettingFeeRenewalModel = z.object({
  /** The letting fee type (fixed/perentage) */ type: z.string().nullable().optional(),
  /** The letting fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().nullable().optional(),
  /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  frequency: z.string().nullable().optional(),
})
