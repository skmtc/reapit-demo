import { z } from 'zod'

/** Update Referral Model */
export const updateReferralModel = /** Update Referral Model */
z.object({status: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
z.string().optional(), amount: /** The amount paid to the agent for the referral */
z.number().optional(), metadata: /** App specific metadata to set against the referral */
z.record(z.string(), z.object({})).optional()});
/** Update Referral Model */
export type UpdateReferralModel = /** Update Referral Model */
{status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
string | undefined, amount?: /** The amount paid to the agent for the referral */
number | undefined, metadata?: /** App specific metadata to set against the referral */
Record<string, Record<string, never>> | undefined};