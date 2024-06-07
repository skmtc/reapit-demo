import { z } from 'zod'

/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel = /** Request body to set the external land area of a new property */
z.object({type: /** The unit of area (acres/hectares) */
z.string().optional(), min: /** The minimum area bound */
z.number().optional(), max: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
z.number().optional()});
/** Request body to set the external land area of a new property */
export type CreatePropertyExternalAreaModel = /** Request body to set the external land area of a new property */
{type?: /** The unit of area (acres/hectares) */
string | undefined, min?: /** The minimum area bound */
number | undefined, max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
number | undefined};