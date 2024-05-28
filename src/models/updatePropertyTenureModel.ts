/** Request body used to set the tenure of an existing property */
export type UpdatePropertyTenureModel = {
  type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  string | undefined
  expiry?: /** The tenure expiration date */ string | undefined
}
