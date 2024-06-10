import { z } from 'zod'

/** Representation of the tenancy letting fee */
export const tenancyLettingFeeModel =
  /** Representation of the tenancy letting fee */
  z.object({
    /** The letting fee type (percentage/fixed) */ type: z.string().optional().nullable(),
    /** The fee amount */ amount: z.number().optional().nullable(),
    /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
    frequency: z.string().optional().nullable(),
  })
/** Representation of the tenancy letting fee */
export type TenancyLettingFeeModel =
  /** Representation of the tenancy letting fee */
  {
    type?: /** The letting fee type (percentage/fixed) */ string | null | undefined
    amount?: /** The fee amount */ number | null | undefined
    frequency?:
      | /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      string
      | null
      | undefined
  }
