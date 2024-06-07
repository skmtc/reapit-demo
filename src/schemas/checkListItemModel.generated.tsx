import { z } from 'zod'

/** Representation of a check list item */
export const checkListItemModel = /** Representation of a check list item */
z.object({name: /** The name of the check list item */
z.string().optional(), completed: /** A flag to determine if the item is completed */
z.boolean().optional(), completedDate: /** The date when the item was completed */
z.string().optional()});
/** Representation of a check list item */
export type CheckListItemModel = /** Representation of a check list item */
{name?: /** The name of the check list item */
string | undefined, completed?: /** A flag to determine if the item is completed */
boolean | undefined, completedDate?: /** The date when the item was completed */
string | undefined};