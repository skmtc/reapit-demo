import { z } from 'zod'

/** Request body used to create or update a relationship between a landlord and a contact or company */
export const insertLandlordContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */ associatedId: z.string(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean(),
})
