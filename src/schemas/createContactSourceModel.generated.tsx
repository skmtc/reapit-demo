import { z } from 'zod'

/** Request body used to set the source of a new contact */
export const createContactSourceModel = /** Request body used to set the source of a new contact */
z.object({id: /** The unique identifier of the source of the contact */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** Request body used to set the source of a new contact */
export type CreateContactSourceModel = /** Request body used to set the source of a new contact */
{id?: /** The unique identifier of the source of the contact */
string | undefined, type?: /** The source type (office/source) */
string | undefined};