import { z } from 'zod'

/** Representation of the the commission fee for a property */
export const propertyCommissionFeeModel =
  /** Representation of the the commission fee for a property */
  z.object({
    /** The commission letting fee type (percentage/fixed) */ type: z.string().optional(),
    /** The commission letting fee amount */ amount: z.number().optional(),
  })
/** Representation of the the commission fee for a property */
export type PropertyCommissionFeeModel =
  /** Representation of the the commission fee for a property */
  {
    type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
    amount?: /** The commission letting fee amount */ number | undefined
  }
