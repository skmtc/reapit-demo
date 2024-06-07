import { z } from 'zod'

/** Request body to update the external land area of an existing property */
export const updatePropertyExternalAreaModel = /** Request body to update the external land area of an existing property */
z.object({type: /** The unit of area (acres/hectares) */
z.string().optional(), min: /** The minimum area bound */
z.number().optional(), max: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
z.number().optional()});
/** Request body to update the external land area of an existing property */
export type UpdatePropertyExternalAreaModel = /** Request body to update the external land area of an existing property */
{type?: /** The unit of area (acres/hectares) */
string | undefined, min?: /** The minimum area bound */
number | undefined, max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
number | undefined};