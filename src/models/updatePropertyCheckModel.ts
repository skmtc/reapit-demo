import { z } from 'zod'

/** Model for the update of an existing check */
export const updatePropertyCheckModel = z.object({
  /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string().nullable().optional(),
})
