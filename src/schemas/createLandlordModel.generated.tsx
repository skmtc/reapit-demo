import { z } from 'zod'
import { createLandlordSourceModel, CreateLandlordSourceModel } from '@/schemas/createLandlordSourceModel.generated.tsx'
import { createLandlordContactRelationshipModel, CreateLandlordContactRelationshipModel } from '@/schemas/createLandlordContactRelationshipModel.generated.tsx'

/** Request body used to create a new landlord */
export const createLandlordModel = /** Request body used to create a new landlord */
z.object({active: /** A flag determining whether or not the landlord is currently active */
z.boolean().optional(), solicitorId: /** The unique identifier of the company acting as the landlord's solicitor */
z.string().optional(), officeId: /** The unique identifier of the office that is associated to the landlord */
z.string(), source: createLandlordSourceModel.optional(), related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
z.array(createLandlordContactRelationshipModel), metadata: /** App specific metadata that to set against the landlord */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new landlord */
export type CreateLandlordModel = /** Request body used to create a new landlord */
{active?: /** A flag determining whether or not the landlord is currently active */
boolean | undefined, solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
string | undefined, officeId: /** The unique identifier of the office that is associated to the landlord */
string, source?: CreateLandlordSourceModel | undefined, related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
Array<CreateLandlordContactRelationshipModel>, metadata?: /** App specific metadata that to set against the landlord */
Record<string, Record<string, never>> | undefined};