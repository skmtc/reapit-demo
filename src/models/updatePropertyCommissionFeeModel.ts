import { z } from 'zod'

/** Request body used to update the commission fee for a property */
export const updatePropertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The commission letting fee amount */ amount: z.number().nullable().optional(),
})
