/** Request body used to set the deposit of a tenancy */
export type UpdateTenancyDepositModel = {
  heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  string | undefined
  period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
  type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
  sum?: /** The amount of deposit held */ number | undefined
}
