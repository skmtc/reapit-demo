import { z } from 'zod'

/** Representation of the tenancy management fee */
export const tenancyManagementFeeModel = /** Representation of the tenancy management fee */
z.object({type: /** The management fee type (percentage/fixed) */
z.string().optional(), amount: /** The fee amount */
z.number().optional(), frequency: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
z.string().optional()});
/** Representation of the tenancy management fee */
export type TenancyManagementFeeModel = /** Representation of the tenancy management fee */
{type?: /** The management fee type (percentage/fixed) */
string | undefined, amount?: /** The fee amount */
number | undefined, frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
string | undefined};