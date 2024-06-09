import { z } from 'zod'

/** Representation of the tenancy management fee */
export const tenancyManagementFeeModel =
  /** Representation of the tenancy management fee */
  z.object({
    /** The management fee type (percentage/fixed) */ type: z.string().optional(),
    /** The fee amount */ amount: z.number().optional(),
    /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
    frequency: z.string().optional(),
  })
/** Representation of the tenancy management fee */
export type TenancyManagementFeeModel =
  /** Representation of the tenancy management fee */
  {
    type?: /** The management fee type (percentage/fixed) */ string | undefined
    amount?: /** The fee amount */ number | undefined
    frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
    string | undefined
  }
