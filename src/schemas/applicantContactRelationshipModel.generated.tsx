import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a relationship between an applicant and a contact or company */
export const applicantContactRelationshipModel = /** Representation of a relationship between an applicant and a contact or company */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the applicant relationship */
z.string().optional(), created: /** The date and time when the relationship was created */
z.string().optional(), modified: /** The date and time when the relationship was last modified */
z.string().optional(), applicantId: /** The unique identifier of the applicant */
z.string().optional(), associatedType: /** The type of related entity (contact/company) */
z.string().optional(), associatedId: /** The unique identifier of the related contact or company */
z.string().optional(), isMain: /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
z.boolean().optional(), fromArchive: /** A flag denoting whether or not this relationship is archived */
z.boolean().optional()});
/** Representation of a relationship between an applicant and a contact or company */
export type ApplicantContactRelationshipModel = /** Representation of a relationship between an applicant and a contact or company */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the applicant relationship */
string | undefined, created?: /** The date and time when the relationship was created */
string | undefined, modified?: /** The date and time when the relationship was last modified */
string | undefined, applicantId?: /** The unique identifier of the applicant */
string | undefined, associatedType?: /** The type of related entity (contact/company) */
string | undefined, associatedId?: /** The unique identifier of the related contact or company */
string | undefined, isMain?: /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
boolean | undefined, fromArchive?: /** A flag denoting whether or not this relationship is archived */
boolean | undefined};