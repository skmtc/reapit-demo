import { z } from 'zod'

/** Model for updat of an existing tenancy check */
export const updateTenancyCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** App specific metadata to set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
