import { z } from 'zod'

/** Representation of the the commission fee for a property */
export const propertyCommissionFeeModel = /** Representation of the the commission fee for a property */
z.object({type: /** The commission letting fee type (percentage/fixed) */
z.string().optional(), amount: /** The commission letting fee amount */
z.number().optional()});
/** Representation of the the commission fee for a property */
export type PropertyCommissionFeeModel = /** Representation of the the commission fee for a property */
{type?: /** The commission letting fee type (percentage/fixed) */
string | undefined, amount?: /** The commission letting fee amount */
number | undefined};