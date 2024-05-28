import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a relationship between an applicant and a contact or company */
export const applicantContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the applicant relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the applicant */ applicantId: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
  isMain: z.boolean().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
})
/** Representation of a relationship between an applicant and a contact or company */
export type ApplicantContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the applicant relationship */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  applicantId?: /** The unique identifier of the applicant */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
  boolean | undefined
  fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | undefined
}
