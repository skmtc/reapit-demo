import { z } from 'zod'

/** Request body used to update letting fees on an existing tenancy */
export const updateTenancyLettingFeeModel = /** Request body used to update letting fees on an existing tenancy */
z.object({type: /** The letting fee type (percentage/fixed) */
z.string().optional(), amount: /** The fee amount */
z.number().optional(), frequency: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
z.string().optional()});
/** Request body used to update letting fees on an existing tenancy */
export type UpdateTenancyLettingFeeModel = /** Request body used to update letting fees on an existing tenancy */
{type?: /** The letting fee type (percentage/fixed) */
string | undefined, amount?: /** The fee amount */
number | undefined, frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
string | undefined};