import { z } from 'zod'

/** Representation of the tenancy management fee */
export const tenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().nullable().optional(),
})
/** Representation of the tenancy management fee */
export type TenancyManagementFeeModel = {
  type?: /** The management fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
