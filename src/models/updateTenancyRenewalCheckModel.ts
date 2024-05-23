import { z } from 'zod'

/** Request body used to update a tenancy renewal check */
export const updateTenancyRenewalCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** App specific metadata to set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
