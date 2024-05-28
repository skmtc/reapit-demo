/** Request body used to update a tenancy renewals letting fee */
export type UpdateLettingFeeRenewalModel = {
  type?: /** The letting fee type (fixed/perentage) */ string | undefined
  amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */ number | undefined
  frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  string | undefined
}
