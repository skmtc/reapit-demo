import { z } from 'zod'

/** Request body used to create a new relationship between a landlord and a contact or company */
export type CreateLandlordContactRelationshipModel =
  /** Request body used to create a new relationship between a landlord and a contact or company */
  {
    associatedId?:
      | /** The unique identifier of the contact or company to create a relationship with */
      string
      | null
      | undefined
    associatedType?: /** The type of relationship to create (contact/company) */ string | null | undefined
  }
/** Request body used to create a new relationship between a landlord and a contact or company */
export const createLandlordContactRelationshipModel =
  /** Request body used to create a new relationship between a landlord and a contact or company */
  z.object({
    /** The unique identifier of the contact or company to create a relationship with */
    associatedId: z.string().optional().nullable(),
    /** The type of relationship to create (contact/company) */ associatedType: z.string().optional().nullable(),
  })
