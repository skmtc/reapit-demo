import { z } from 'zod'

/** Representation of a tenancies responsibility */
export const tenancyResponsibilityModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the responsibility */ id: z.string().nullable().optional(),
  /** The date and time when the responsibility was created */ created: z.string().nullable().optional(),
  /** The date and time when the responsibility last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated to the responsibility */ typeId: z.string().nullable().optional(),
  /** The responsibilities description */ description: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant) */ appliesTo: z.string().nullable().optional(),
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
      /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Tenancy agreement text that relates to the responsibility */ letterText: z.string().nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the responsibility. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
