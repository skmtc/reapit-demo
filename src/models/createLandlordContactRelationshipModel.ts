import { z } from 'zod'

/** Request body used to create a new relationship between a landlord and a contact or company */
export const createLandlordContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string().nullable().optional(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
})
