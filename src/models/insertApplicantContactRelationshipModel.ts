/** Request body used to create or update a relationship between an applicant and a contact or company */
export type InsertApplicantContactRelationshipModel = {
  associatedId?: /** The unique identifier of the contact or company to create a relationship with */ string | undefined
  associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
  isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  boolean | undefined
}
