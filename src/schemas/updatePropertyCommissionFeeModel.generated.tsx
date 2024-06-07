import { z } from 'zod'

/** Request body used to update the commission fee for a property */
export const updatePropertyCommissionFeeModel = /** Request body used to update the commission fee for a property */
z.object({type: /** The commission letting fee type (percentage/fixed) */
z.string().optional(), amount: /** The commission letting fee amount */
z.number().optional()});
/** Request body used to update the commission fee for a property */
export type UpdatePropertyCommissionFeeModel = /** Request body used to update the commission fee for a property */
{type?: /** The commission letting fee type (percentage/fixed) */
string | undefined, amount?: /** The commission letting fee amount */
number | undefined};