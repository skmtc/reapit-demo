/** Representation of property details specific to property licence application */
export type UpdateLicenceApplicationModel = {
  status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  string | undefined
  referenceNumber?: /** The licence application reference number */ string | undefined
  date?: /** The date the licence was applied for */ string | undefined
  granted?: /** The date the licence application was granted */ string | undefined
  expiry?: /** The date the licence will expire */ string | undefined
}
