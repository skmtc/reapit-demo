import { z } from 'zod'

/** Representation of the roles that an individual companies possesses */
export const companyRoleModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the related company */ companyId: z.string().nullable().optional(),
  /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
  associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related entity */ associatedId: z.string().nullable().optional(),
  /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().nullable().optional(),
})
