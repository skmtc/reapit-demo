/** Request body used to update a tenancy renewals management fee */
export type UpdateManagementFeeRenewalModel = {
  type?: /** The mangement fee type (fixed/perentage) */ string | undefined
  amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */ number | undefined
  frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
