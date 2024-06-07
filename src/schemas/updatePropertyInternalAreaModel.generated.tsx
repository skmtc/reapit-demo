import { z } from 'zod'

/** Request body to update the internal dimensions of an existing property */
export const updatePropertyInternalAreaModel = /** Request body to update the internal dimensions of an existing property */
z.object({type: /** The unit of area (squareFeet/squareMetres) */
z.string().optional(), min: /** The minimum area bound */
z.number().optional(), max: /** The maximum area bound */
z.number().optional()});
/** Request body to update the internal dimensions of an existing property */
export type UpdatePropertyInternalAreaModel = /** Request body to update the internal dimensions of an existing property */
{type?: /** The unit of area (squareFeet/squareMetres) */
string | undefined, min?: /** The minimum area bound */
number | undefined, max?: /** The maximum area bound */
number | undefined};