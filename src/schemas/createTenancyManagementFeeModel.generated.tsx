import { z } from 'zod'

/** Request body used to set management fees on a new tenancy */
export const createTenancyManagementFeeModel =
  /** Request body used to set management fees on a new tenancy */
  z.object({
    /** The management fee type (percentage/fixed) */ type: z.string().optional(),
    /** The fee amount */ amount: z.number().optional(),
    /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
    frequency: z.string().optional(),
  })
/** Request body used to set management fees on a new tenancy */
export type CreateTenancyManagementFeeModel =
  /** Request body used to set management fees on a new tenancy */
  {
    type?: /** The management fee type (percentage/fixed) */ string | undefined
    amount?: /** The fee amount */ number | undefined
    frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
    string | undefined
  }
