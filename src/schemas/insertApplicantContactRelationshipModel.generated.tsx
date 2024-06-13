import { z } from 'zod'

/** Request body used to create or update a relationship between an applicant and a contact or company */
export type InsertApplicantContactRelationshipModel =
  /** Request body used to create or update a relationship between an applicant and a contact or company */
  {
    associatedId?:
      | /** The unique identifier of the contact or company to create a relationship with */
      string
      | null
      | undefined
    associatedType?: /** The type of relationship to create (contact/company) */ string | null | undefined
    isMain?:
      | /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
      boolean
      | null
      | undefined
  }
export const insertApplicantContactRelationshipModel =
  /** Request body used to create or update a relationship between an applicant and a contact or company */
  z.object({
    /** The unique identifier of the contact or company to create a relationship with */
    associatedId: z.string().optional().nullable(),
    /** The type of relationship to create (contact/company) */ associatedType: z.string().optional().nullable(),
    /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    isMain: z.boolean().optional().nullable(),
  })
