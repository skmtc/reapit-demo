/** Request body used to update details specific to rent insurance associated with a lettings property */
export type UpdatePropertyLettingRentInsuranceModel = {
  status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
  string | undefined
  referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
  string | undefined
  start?: /** The insurance policy start date */ string | undefined
  end?: /** The insurance policy end date */ string | undefined
  cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
  string | undefined
  cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
  string | undefined
  autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */ boolean | undefined
}
