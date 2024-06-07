import { z } from 'zod'

/** Model for the update of an existing check */
export const updatePropertyCheckModel = /** Model for the update of an existing check */
z.object({status: /** The status of the check (needed/notNeeded/arranging/completed) */
z.string().optional()});
/** Model for the update of an existing check */
export type UpdatePropertyCheckModel = /** Model for the update of an existing check */
{status?: /** The status of the check (needed/notNeeded/arranging/completed) */
string | undefined};