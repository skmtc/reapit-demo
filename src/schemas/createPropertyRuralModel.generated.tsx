import { z } from 'zod'

/** Request body used to set details specific to rural properties */
export const createPropertyRuralModel = /** Request body used to set details specific to rural properties */
z.object({buildingsDescription: /** Details of the buildings associated with the property. */
z.string().optional(), landDescription: /** Details of the land associated with the property. */
z.string().optional()});
/** Request body used to set details specific to rural properties */
export type CreatePropertyRuralModel = /** Request body used to set details specific to rural properties */
{buildingsDescription?: /** Details of the buildings associated with the property. */
string | undefined, landDescription?: /** Details of the land associated with the property. */
string | undefined};