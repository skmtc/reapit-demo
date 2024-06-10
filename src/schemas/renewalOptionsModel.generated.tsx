import { z } from 'zod'

/** Representation of renewal options in a tenancy */
export const renewalOptionsModel =
  /** Representation of renewal options in a tenancy */
  z.object({
    /** The unique identifier of the renewal option */ optionId: z.string().optional().nullable(),
    /** The associated renewal option text */ optionText: z.string().optional().nullable(),
    /** The renewal option expiry date */ expiry: z.string().optional().nullable(),
    /** The renewal options associated condition Ids */ conditionIds: z.array(z.string()).optional().nullable(),
  })
/** Representation of renewal options in a tenancy */
export type RenewalOptionsModel =
  /** Representation of renewal options in a tenancy */
  {
    optionId?: /** The unique identifier of the renewal option */ string | null | undefined
    optionText?: /** The associated renewal option text */ string | null | undefined
    expiry?: /** The renewal option expiry date */ string | null | undefined
    conditionIds?: /** The renewal options associated condition Ids */ Array<string> | null | undefined
  }
