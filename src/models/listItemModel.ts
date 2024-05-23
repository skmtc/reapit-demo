import { z } from 'zod'

/** Representation of a configuration item */
export const listItemModel = z.object({
  /** The unique identifier of the list item */ id: z.string().nullable().optional(),
  /** The textual value for the list item */ value: z.string().nullable().optional(),
})
