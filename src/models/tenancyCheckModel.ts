import { z } from 'zod'

/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export const tenancyCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy check */ id: z.string().nullable().optional(),
  /** The date and time when the tenancy check was created */ created: z.string().nullable().optional(),
  /** The date and time when the tenancy check was last modified */ modified: z.string().nullable().optional(),
  /** Textual description of what the tenancy check relates to */ description: z.string().nullable().optional(),
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** The type of the tenancy check (preTenancy/postTenancy) */ type: z.string().nullable().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that this check relates to */ tenancyId: z.string().nullable().optional(),
  /** App specific metadata that has been set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
