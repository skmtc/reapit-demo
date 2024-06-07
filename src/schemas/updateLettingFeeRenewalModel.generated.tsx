import { z } from 'zod'

/** Request body used to update a tenancy renewals letting fee */
export const updateLettingFeeRenewalModel = /** Request body used to update a tenancy renewals letting fee */
z.object({type: /** The letting fee type (fixed/perentage) */
z.string().optional(), amount: /** The letting fee amount as a fixed price or percentage based on the `type` */
z.number().optional(), frequency: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
z.string().optional()});
/** Request body used to update a tenancy renewals letting fee */
export type UpdateLettingFeeRenewalModel = /** Request body used to update a tenancy renewals letting fee */
{type?: /** The letting fee type (fixed/perentage) */
string | undefined, amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */
number | undefined, frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
string | undefined};