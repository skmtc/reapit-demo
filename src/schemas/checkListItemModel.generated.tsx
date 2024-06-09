import { z } from 'zod'

/** Representation of a check list item */
export const checkListItemModel =
  /** Representation of a check list item */
  z.object({
    /** The name of the check list item */ name: z.string().optional(),
    /** A flag to determine if the item is completed */ completed: z.boolean().optional(),
    /** The date when the item was completed */ completedDate: z.string().optional(),
  })
/** Representation of a check list item */
export type CheckListItemModel =
  /** Representation of a check list item */
  {
    name?: /** The name of the check list item */ string | undefined
    completed?: /** A flag to determine if the item is completed */ boolean | undefined
    completedDate?: /** The date when the item was completed */ string | undefined
  }
