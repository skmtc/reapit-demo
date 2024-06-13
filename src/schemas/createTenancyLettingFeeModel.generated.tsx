import { z } from 'zod'

/** Request body used to set letting fees on a new tenancy */
export type CreateTenancyLettingFeeModel =
  /** Request body used to set letting fees on a new tenancy */
  {
    type?: /** The letting fee type (percentage/fixed) */ string | null | undefined
    amount?: /** The fee amount */ number | null | undefined
    frequency?:
      | /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      string
      | null
      | undefined
  }
/** Request body used to set letting fees on a new tenancy */
export const createTenancyLettingFeeModel =
  /** Request body used to set letting fees on a new tenancy */
  z.object({
    /** The letting fee type (percentage/fixed) */ type: z.string().optional().nullable(),
    /** The fee amount */ amount: z.number().optional().nullable(),
    /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
    frequency: z.string().optional().nullable(),
  })
