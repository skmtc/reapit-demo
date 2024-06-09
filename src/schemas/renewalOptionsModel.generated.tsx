import { z } from 'zod'

/** Representation of renewal options in a tenancy */
export const renewalOptionsModel =
  /** Representation of renewal options in a tenancy */
  z.object({
    /** The unique identifier of the renewal option */ optionId: z.string().optional(),
    /** The associated renewal option text */ optionText: z.string().optional(),
    /** The renewal option expiry date */ expiry: z.string().optional(),
    /** The renewal options associated condition Ids */ conditionIds: z.array(z.string()).optional(),
  })
/** Representation of renewal options in a tenancy */
export type RenewalOptionsModel =
  /** Representation of renewal options in a tenancy */
  {
    optionId?: /** The unique identifier of the renewal option */ string | undefined
    optionText?: /** The associated renewal option text */ string | undefined
    expiry?: /** The renewal option expiry date */ string | undefined
    conditionIds?: /** The renewal options associated condition Ids */ Array<string> | undefined
  }
