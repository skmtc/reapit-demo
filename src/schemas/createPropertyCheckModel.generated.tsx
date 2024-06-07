import { z } from 'zod'

/** Request body used to create a new check */
export const createPropertyCheckModel = /** Request body used to create a new check */
z.object({description: /** Short, descriptive text describing the purpose of the check */
z.string(), type: /** The type of the check (preInstruction) */
z.string(), status: /** The status of the check (needed/notNeeded/arranging/completed) */
z.string()});
/** Request body used to create a new check */
export type CreatePropertyCheckModel = /** Request body used to create a new check */
{description: /** Short, descriptive text describing the purpose of the check */
string, type: /** The type of the check (preInstruction) */
string, status: /** The status of the check (needed/notNeeded/arranging/completed) */
string};