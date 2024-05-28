/** Request body used to update management fees on an existing tenancy */
export type UpdateTenancyManagementFeeModel = {
  type?: /** The management fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
