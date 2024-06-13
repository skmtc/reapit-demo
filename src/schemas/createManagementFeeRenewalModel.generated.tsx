import { z } from 'zod'

/** Request body used to create a tenancy renewals management fee */
export type CreateManagementFeeRenewalModel =
  /** Request body used to create a tenancy renewals management fee */
  {
    type?: /** The mangement fee type (fixed/perentage) */ string | null | undefined
    amount?:
      | /** The mangement fee amount as a fixed price or percentage based on the `type` */
      number
      | null
      | undefined
    frequency?:
      | /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      string
      | null
      | undefined
  }
/** Request body used to create a tenancy renewals management fee */
export const createManagementFeeRenewalModel =
  /** Request body used to create a tenancy renewals management fee */
  z.object({
    /** The mangement fee type (fixed/perentage) */ type: z.string().optional().nullable(),
    /** The mangement fee amount as a fixed price or percentage based on the `type` */
    amount: z.number().optional().nullable(),
    /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
    frequency: z.string().optional().nullable(),
  })
