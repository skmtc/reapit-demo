import { z } from 'zod'

/** Request body used to update a tenancy renewals management fee */
export const updateManagementFeeRenewalModel = /** Request body used to update a tenancy renewals management fee */
z.object({type: /** The mangement fee type (fixed/perentage) */
z.string().optional(), amount: /** The mangement fee amount as a fixed price or percentage based on the `type` */
z.number().optional(), frequency: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
z.string().optional()});
/** Request body used to update a tenancy renewals management fee */
export type UpdateManagementFeeRenewalModel = /** Request body used to update a tenancy renewals management fee */
{type?: /** The mangement fee type (fixed/perentage) */
string | undefined, amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */
number | undefined, frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
string | undefined};