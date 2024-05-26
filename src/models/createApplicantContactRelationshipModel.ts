import { z } from 'zod'

/** Request body used to create a relationship between an applicant and a contact or company */
export const createApplicantContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */ associatedId: z.string(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
})
/** Request body used to create a relationship between an applicant and a contact or company */
export type CreateApplicantContactRelationshipModel = {
  associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
  associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
}
