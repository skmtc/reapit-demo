import { z } from 'zod'

/** Representation of the tenancy letting fee */
export const tenancyLettingFeeModel = /** Representation of the tenancy letting fee */
z.object({type: /** The letting fee type (percentage/fixed) */
z.string().optional(), amount: /** The fee amount */
z.number().optional(), frequency: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
z.string().optional()});
/** Representation of the tenancy letting fee */
export type TenancyLettingFeeModel = /** Representation of the tenancy letting fee */
{type?: /** The letting fee type (percentage/fixed) */
string | undefined, amount?: /** The fee amount */
number | undefined, frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
string | undefined};