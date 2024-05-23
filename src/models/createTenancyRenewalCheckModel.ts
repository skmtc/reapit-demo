import { z } from 'zod'

/** Request body used to create a new tenancy renewal check */
export const createTenancyRenewalCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ status: z.string(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The name of this tenancy check */ description: z.string().nullable().optional(),
  /** App specific metadata to set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
