/** Request body used to update a tenancy renewal check */
export type UpdateTenancyRenewalCheckModel = {
  status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
  metadata?: /** App specific metadata to set against the tenancy renewal check */
  Record<string, Record<string, never>> | undefined
}
