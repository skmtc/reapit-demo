import { z } from 'zod'

/** Representation of a tenancy renewal check */
export const tenancyRenewalCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy renewal check */ id: z.string().nullable().optional(),
  /** The date and time when the tenancy renewal check was created */ created: z.string().nullable().optional(),
  /** The date and time when the tenancy renewal check was last modified */ modified: z.string().nullable().optional(),
  /** The status of the tenancy renewal check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** Textual description of what the tenancy renewal check relates to */ description: z.string().nullable().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that this check relates to */ tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the renewal that this check relates to */ renewalId: z.string().nullable().optional(),
  /** App specific metadata that has been set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
