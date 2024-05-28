import { z } from 'zod'

/** Representation of detail properties configuration item
configuration */
export const listItemDetailModel = z.object({
  /** The unique identifier of the list item */ id: z.string().nullable().optional(),
  /** The textual value for the list item */ value: z.string().nullable().optional(),
  /** A flag determining the status */ active: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of offices associated */ officeIds: z.array(z.string()).nullable().optional(),
})
