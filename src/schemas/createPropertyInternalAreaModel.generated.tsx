import { z } from 'zod'

/** Request body to set the internal dimensions of a new property */
export const createPropertyInternalAreaModel = /** Request body to set the internal dimensions of a new property */
z.object({type: /** The unit of area (squareFeet/squareMetres) */
z.string().optional(), min: /** The minimum area bound */
z.number().optional(), max: /** The maximum area bound */
z.number().optional()});
/** Request body to set the internal dimensions of a new property */
export type CreatePropertyInternalAreaModel = /** Request body to set the internal dimensions of a new property */
{type?: /** The unit of area (squareFeet/squareMetres) */
string | undefined, min?: /** The minimum area bound */
number | undefined, max?: /** The maximum area bound */
number | undefined};