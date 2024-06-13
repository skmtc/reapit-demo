import { z } from 'zod'

/** Request body used to create a tenancy renewals letting fee */
export type CreateLettingFeeRenewalModel =
  /** Request body used to create a tenancy renewals letting fee */
  {
    type?: /** The letting fee type (fixed/perentage) */ string | null | undefined
    amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */ number | null | undefined
    frequency?:
      | /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
      string
      | null
      | undefined
  }
/** Request body used to create a tenancy renewals letting fee */
export const createLettingFeeRenewalModel =
  /** Request body used to create a tenancy renewals letting fee */
  z.object({
    /** The letting fee type (fixed/perentage) */ type: z.string().optional().nullable(),
    /** The letting fee amount as a fixed price or percentage based on the `type` */
    amount: z.number().optional().nullable(),
    /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
    frequency: z.string().optional().nullable(),
  })
