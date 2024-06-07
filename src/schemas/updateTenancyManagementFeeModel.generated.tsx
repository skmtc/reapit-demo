import { z } from 'zod'

/** Request body used to update management fees on an existing tenancy */
export const updateTenancyManagementFeeModel = /** Request body used to update management fees on an existing tenancy */
z.object({type: /** The management fee type (percentage/fixed) */
z.string().optional(), amount: /** The fee amount */
z.number().optional(), frequency: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
z.string().optional()});
/** Request body used to update management fees on an existing tenancy */
export type UpdateTenancyManagementFeeModel = /** Request body used to update management fees on an existing tenancy */
{type?: /** The management fee type (percentage/fixed) */
string | undefined, amount?: /** The fee amount */
number | undefined, frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
string | undefined};