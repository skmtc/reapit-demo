import { z } from 'zod'

/** Representation of the tenancy letting fee */
export const tenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().nullable().optional(),
})
