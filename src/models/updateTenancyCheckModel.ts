/** Model for updat of an existing tenancy check */
export type UpdateTenancyCheckModel = {
  status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
  metadata?: /** App specific metadata to set against the tenancy check */
  Record<string, Record<string, never>> | undefined
}
