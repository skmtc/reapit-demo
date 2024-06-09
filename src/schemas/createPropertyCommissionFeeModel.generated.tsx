import { z } from 'zod'

/** Request body used to set the commission fee for a property */
export const createPropertyCommissionFeeModel =
  /** Request body used to set the commission fee for a property */
  z.object({
    /** The commission letting fee type (percentage/fixed) */ type: z.string().optional(),
    /** The commission letting fee amount */ amount: z.number().optional(),
  })
/** Request body used to set the commission fee for a property */
export type CreatePropertyCommissionFeeModel =
  /** Request body used to set the commission fee for a property */
  {
    type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
    amount?: /** The commission letting fee amount */ number | undefined
  }
