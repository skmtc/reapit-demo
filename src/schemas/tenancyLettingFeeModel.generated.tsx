import { z } from 'zod'

/** Representation of the tenancy letting fee */
export const tenancyLettingFeeModel =
  /** Representation of the tenancy letting fee */
  z.object({
    /** The letting fee type (percentage/fixed) */ type: z.string().optional(),
    /** The fee amount */ amount: z.number().optional(),
    /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
    frequency: z.string().optional(),
  })
/** Representation of the tenancy letting fee */
export type TenancyLettingFeeModel =
  /** Representation of the tenancy letting fee */
  {
    type?: /** The letting fee type (percentage/fixed) */ string | undefined
    amount?: /** The fee amount */ number | undefined
    frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
    string | undefined
  }
