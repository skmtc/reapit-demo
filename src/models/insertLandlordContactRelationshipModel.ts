/** Request body used to create or update a relationship between a landlord and a contact or company */
export type InsertLandlordContactRelationshipModel = {
  associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
  associatedType: /** The type of relationship to create (contact/company) */ string
  isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  boolean
}
