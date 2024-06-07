import { z } from 'zod'

/** Request body used to update the source of an existing landlord */
export const updateLandlordSourceModel = /** Request body used to update the source of an existing landlord */
z.object({id: /** The unique identifier of the source of the landlord */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** Request body used to update the source of an existing landlord */
export type UpdateLandlordSourceModel = /** Request body used to update the source of an existing landlord */
{id?: /** The unique identifier of the source of the landlord */
string | undefined, type?: /** The source type (office/source) */
string | undefined};