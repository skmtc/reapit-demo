import { z } from 'zod'

/** Create Referral Model */
export const createReferralModel = /** Create Referral Model */
z.object({referralTypeId: /** The unique identifier of the referral type */
z.string(), negotiatorId: /** The unique identifier of the negotiator creating the referral */
z.string().optional(), propertyId: /** The unique identifier of the property */
z.string().optional(), applicantId: /** The unique identifier of the applicant */
z.string().optional(), contactId: /** The unique identifier of the contact that has been referred */
z.string(), amount: /** The amount paid to the agent for the referral */
z.number().optional()});
/** Create Referral Model */
export type CreateReferralModel = /** Create Referral Model */
{referralTypeId: /** The unique identifier of the referral type */
string, negotiatorId?: /** The unique identifier of the negotiator creating the referral */
string | undefined, propertyId?: /** The unique identifier of the property */
string | undefined, applicantId?: /** The unique identifier of the applicant */
string | undefined, contactId: /** The unique identifier of the contact that has been referred */
string, amount?: /** The amount paid to the agent for the referral */
number | undefined};