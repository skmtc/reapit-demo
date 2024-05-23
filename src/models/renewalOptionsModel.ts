import { z } from 'zod'

/** Representation of renewal options in a tenancy */
export const renewalOptionsModel = z.object({
  /** The unique identifier of the renewal option */ optionId: z.string().nullable().optional(),
  /** The associated renewal option text */ optionText: z.string().nullable().optional(),
  /** The renewal option expiry date */ expiry: z.string().nullable().optional(),
  /** The renewal options associated condition Ids */ conditionIds: z.array(z.string()).nullable().optional(),
})
