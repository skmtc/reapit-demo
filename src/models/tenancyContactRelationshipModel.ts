import { z } from 'zod'

/** Representation of a relationship between a tenancy and a contact or company */
export const tenancyContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the tenancy */ tenancyId: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
  isMain: z.boolean().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
  /** Collection of guarantors recorded for this relationship */
  guarantors: z
    .array(
      /** Read model representing a Guarantor */
      z.object({
        /** The identifier for the guarantor record */ id: z.string().nullable().optional(),
        /** The identifier for the contact record associated with the guarantor */
        guarantorAssociatedId: z.string().nullable().optional(),
        /** Value indicating whether a the referenced guarantor is a person or a company */
        type: z.string().nullable().optional(),
        /** The status of the reference requested from the guarantor (notSet/requested/received) */
        referenceStatus: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** Collection of references recorded for this relationship */
  references: z
    .array(
      /** Read model representing a tenant/applicant reference */
      z.object({
        /** The identifier for the reference record */ id: z.string().nullable().optional(),
        /** The identifier for the contact/company record associated with the reference */
        referenceAssociatedId: z.string().nullable().optional(),
        /** Value indicating whether a referenced contact is a person or a company */
        type: z.string().nullable().optional(),
        /** The status of the reference (notSet/requested/received) */
        referenceStatus: z.string().nullable().optional(),
        /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
        referenceType: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
