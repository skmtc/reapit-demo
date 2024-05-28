/** Update Referral Model */
export type UpdateReferralModel = {
  status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  string | undefined
  amount?: /** The amount paid to the agent for the referral */ number | undefined
  metadata?: /** App specific metadata to set against the referral */ Record<string, Record<string, never>> | undefined
}
