import { z } from 'zod'

/** Request body used to set letting fees on a new tenancy */
export const createTenancyLettingFeeModel = /** Request body used to set letting fees on a new tenancy */
z.object({type: /** The letting fee type (percentage/fixed) */
z.string().optional(), amount: /** The fee amount */
z.number().optional(), frequency: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
z.string().optional()});
/** Request body used to set letting fees on a new tenancy */
export type CreateTenancyLettingFeeModel = /** Request body used to set letting fees on a new tenancy */
{type?: /** The letting fee type (percentage/fixed) */
string | undefined, amount?: /** The fee amount */
number | undefined, frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
string | undefined};