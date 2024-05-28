import { z } from 'zod'

/** Request body used to set the commission fee for a property */
export const createPropertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The commission letting fee amount */ amount: z.number().nullable().optional(),
})
/** Request body used to set the commission fee for a property */
export type CreatePropertyCommissionFeeModel = {
  type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The commission letting fee amount */ number | undefined
}
