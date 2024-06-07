import { z } from 'zod'

/** Representation of a landlord's source */
export const landlordSourceModel = /** Representation of a landlord's source */
z.object({id: /** The unique identifier of the source of the landlord */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** Representation of a landlord's source */
export type LandlordSourceModel = /** Representation of a landlord's source */
{id?: /** The unique identifier of the source of the landlord */
string | undefined, type?: /** The source type (office/source) */
string | undefined};