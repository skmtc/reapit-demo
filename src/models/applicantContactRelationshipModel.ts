import { z } from 'zod'

/** Representation of a relationship between an applicant and a contact or company */
export const applicantContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
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
