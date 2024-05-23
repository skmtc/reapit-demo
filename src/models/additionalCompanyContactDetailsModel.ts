import { z } from 'zod'

/** Representation of additional contact details */
export const additionalCompanyContactDetailsModel = z.object({
  /** The type of contact detail */ type: z.string().nullable().optional(),
  /** The contact detail */ value: z.string().nullable().optional(),
})
