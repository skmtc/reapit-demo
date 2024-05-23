import { z } from 'zod'

/** Representation of a check list item */
export const checkListItemModel = z.object({
  /** The name of the check list item */ name: z.string().nullable().optional(),
  /** A flag to determine if the item is completed */ completed: z.boolean().nullable().optional(),
  /** The date when the item was completed */ completedDate: z.string().nullable().optional(),
})
