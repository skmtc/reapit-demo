import { z } from 'zod'

/** Request body used to set management fees on a new tenancy */
export const createTenancyManagementFeeModel = /** Request body used to set management fees on a new tenancy */
z.object({type: /** The management fee type (percentage/fixed) */
z.string().optional(), amount: /** The fee amount */
z.number().optional(), frequency: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
z.string().optional()});
/** Request body used to set management fees on a new tenancy */
export type CreateTenancyManagementFeeModel = /** Request body used to set management fees on a new tenancy */
{type?: /** The management fee type (percentage/fixed) */
string | undefined, amount?: /** The fee amount */
number | undefined, frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
string | undefined};