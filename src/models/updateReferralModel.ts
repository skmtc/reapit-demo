import { z } from 'zod'

/** Update Referral Model */
export const updateReferralModel = z.object({
  /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  status: z.string().nullable().optional(),
  /** The amount paid to the agent for the referral */ amount: z.number().nullable().optional(),
  /** App specific metadata to set against the referral */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
