import { z } from 'zod'

/** Request body used to update the source of an existing contact */
export const updateContactSourceModel = /** Request body used to update the source of an existing contact */
z.object({id: /** The unique identifier of the source of the contact */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** Request body used to update the source of an existing contact */
export type UpdateContactSourceModel = /** Request body used to update the source of an existing contact */
{id?: /** The unique identifier of the source of the contact */
string | undefined, type?: /** The source type (office/source) */
string | undefined};