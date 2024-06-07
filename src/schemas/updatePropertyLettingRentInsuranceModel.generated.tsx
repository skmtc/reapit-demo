import { z } from 'zod'

/** Request body used to update details specific to rent insurance associated with a lettings property */
export const updatePropertyLettingRentInsuranceModel = /** Request body used to update details specific to rent insurance associated with a lettings property */
z.object({status: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
z.string().optional(), referenceNumber: /** The reference number of the insurance policy when rent protection insurance has been taken out */
z.string().optional(), start: /** The insurance policy start date */
z.string().optional(), end: /** The insurance policy end date */
z.string().optional(), cancelledReasonId: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
z.string().optional(), cancelledComment: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
z.string().optional(), autoRenew: /** Flag indicating whether or not the insurance policy should auto renew */
z.boolean().optional()});
/** Request body used to update details specific to rent insurance associated with a lettings property */
export type UpdatePropertyLettingRentInsuranceModel = /** Request body used to update details specific to rent insurance associated with a lettings property */
{status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
string | undefined, referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
string | undefined, start?: /** The insurance policy start date */
string | undefined, end?: /** The insurance policy end date */
string | undefined, cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
string | undefined, cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
string | undefined, autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */
boolean | undefined};