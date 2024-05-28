import { z } from 'zod'

/** Representation of the the commission fee for a property */
export const propertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The commission letting fee amount */ amount: z.number().nullable().optional(),
})
/** Representation of the the commission fee for a property */
export type PropertyCommissionFeeModel = {
  type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The commission letting fee amount */ number | undefined
}
