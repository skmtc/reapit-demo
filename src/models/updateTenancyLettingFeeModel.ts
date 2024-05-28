/** Request body used to update letting fees on an existing tenancy */
export type UpdateTenancyLettingFeeModel = {
  type?: /** The letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  string | undefined
}
