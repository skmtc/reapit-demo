import { z } from 'zod'

/** Request body used to set letting fees on a new tenancy */
export const createTenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().nullable().optional(),
})
/** Request body used to set letting fees on a new tenancy */
export type CreateTenancyLettingFeeModel = {
  type?: /** The letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  string | undefined
}
