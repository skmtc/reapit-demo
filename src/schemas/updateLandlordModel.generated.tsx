import { z } from 'zod'
import { updateLandlordSourceModel, UpdateLandlordSourceModel } from '@/schemas/updateLandlordSourceModel.generated.tsx'

/** Request body used to update an existing landlord */
export const updateLandlordModel = /** Request body used to update an existing landlord */
z.object({active: /** A flag determining whether or not the landlord is currently active */
z.boolean().optional(), solicitorId: /** The unique identifier of the company acting as the landlord's solicitor */
z.string().optional(), officeId: /** The unique identifier of the office that is associated to the landlord */
z.string().optional(), source: updateLandlordSourceModel.optional(), metadata: /** App specific metadata that to set against the landlord */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing landlord */
export type UpdateLandlordModel = /** Request body used to update an existing landlord */
{active?: /** A flag determining whether or not the landlord is currently active */
boolean | undefined, solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
string | undefined, officeId?: /** The unique identifier of the office that is associated to the landlord */
string | undefined, source?: UpdateLandlordSourceModel | undefined, metadata?: /** App specific metadata that to set against the landlord */
Record<string, Record<string, never>> | undefined};