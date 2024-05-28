/** Request body to update the external land area of an existing property */
export type UpdatePropertyExternalAreaModel = {
  type?: /** The unit of area (acres/hectares) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */ number | undefined
}
