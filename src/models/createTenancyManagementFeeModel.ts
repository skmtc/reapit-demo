import { z } from 'zod'

/** Request body used to set management fees on a new tenancy */
export const createTenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().nullable().optional(),
})
