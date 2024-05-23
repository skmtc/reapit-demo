import { z } from 'zod'

/** Representation of a relationship between a vendor and a contact or company */
export const vendorContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the vendor relationship */ id: z.string().nullable().optional(),
  /** The unique identifier of the vendor */ vendorId: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
  isMain: z.boolean().nullable().optional(),
})
