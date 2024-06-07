import { z } from 'zod'

/** Request body used to create an individual key included in a key set */
export const createIndividualKeyModel = /** Request body used to create an individual key included in a key set */
z.object({name: /** The name of the individual key in the set */
z.string().optional()});
/** Request body used to create an individual key included in a key set */
export type CreateIndividualKeyModel = /** Request body used to create an individual key included in a key set */
{name?: /** The name of the individual key in the set */
string | undefined};