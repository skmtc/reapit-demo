import { z } from 'zod'

/** Representation of the external land area of a property */
export const propertyExternalAreaModel = /** Representation of the external land area of a property */
z.object({type: /** The unit of area (acres/hectares) */
z.string().optional(), min: /** The minimum area bound */
z.number().optional(), max: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
z.number().optional()});
/** Representation of the external land area of a property */
export type PropertyExternalAreaModel = /** Representation of the external land area of a property */
{type?: /** The unit of area (acres/hectares) */
string | undefined, min?: /** The minimum area bound */
number | undefined, max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
number | undefined};