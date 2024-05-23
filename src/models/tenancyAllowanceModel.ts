import { z } from 'zod'

/** Representation of a tenancy allowance */
export const tenancyAllowanceModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the allowance */ id: z.string().nullable().optional(),
  /** The date and time when the allowance was created */ created: z.string().nullable().optional(),
  /** The date and time when the allowance last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated allowance */ typeId: z.string().nullable().optional(),
  /** The break clauses description */ description: z.string().nullable().optional(),
  /** The state of the allowance (allowed/notAllowed) */ state: z.string().nullable().optional(),
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
      /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Tenancy agreement text that relates to the allowance */ letterText: z.string().nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the allowance. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
