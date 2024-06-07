import { z } from 'zod'

/** Representation of the internal dimensions of a property */
export const propertyInternalAreaModel = /** Representation of the internal dimensions of a property */
z.object({type: /** The unit of area (squareFeet/squareMetres) */
z.string().optional(), min: /** The minimum area bound */
z.number().optional(), max: /** The maximum area bound */
z.number().optional()});
/** Representation of the internal dimensions of a property */
export type PropertyInternalAreaModel = /** Representation of the internal dimensions of a property */
{type?: /** The unit of area (squareFeet/squareMetres) */
string | undefined, min?: /** The minimum area bound */
number | undefined, max?: /** The maximum area bound */
number | undefined};