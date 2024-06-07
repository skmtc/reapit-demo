import { z } from 'zod'

/** Representation of an individual key included in a key set */
export const individualKeyModel = /** Representation of an individual key included in a key set */
z.object({name: /** The name of the individual key in the set */
z.string().optional()});
/** Representation of an individual key included in a key set */
export type IndividualKeyModel = /** Representation of an individual key included in a key set */
{name?: /** The name of the individual key in the set */
string | undefined};