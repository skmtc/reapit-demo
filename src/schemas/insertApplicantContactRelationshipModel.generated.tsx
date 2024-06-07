import { z } from 'zod'

/** Request body used to create or update a relationship between an applicant and a contact or company */
export const insertApplicantContactRelationshipModel = /** Request body used to create or update a relationship between an applicant and a contact or company */
z.object({associatedId: /** The unique identifier of the contact or company to create a relationship with */
z.string().optional(), associatedType: /** The type of relationship to create (contact/company) */
z.string().optional(), isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
z.boolean().optional()});
/** Request body used to create or update a relationship between an applicant and a contact or company */
export type InsertApplicantContactRelationshipModel = /** Request body used to create or update a relationship between an applicant and a contact or company */
{associatedId?: /** The unique identifier of the contact or company to create a relationship with */
string | undefined, associatedType?: /** The type of relationship to create (contact/company) */
string | undefined, isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
boolean | undefined};