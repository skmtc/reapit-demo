import { z } from 'zod'
import { createIndividualKeyModel, CreateIndividualKeyModel } from '@/schemas/createIndividualKeyModel.generated.tsx'

/** Request body used to create a new set of keys */
export const createKeyModel = /** Request body used to create a new set of keys */
z.object({number: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
z.string().optional(), typeId: /** The unique identifier of the key type */
z.string().optional(), officeId: /** The unique identifier of the office responsible for the key */
z.string().optional(), keysInSet: /** A listing of the individual keys included in the set */
z.array(createIndividualKeyModel).optional()});
/** Request body used to create a new set of keys */
export type CreateKeyModel = /** Request body used to create a new set of keys */
{number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
string | undefined, typeId?: /** The unique identifier of the key type */
string | undefined, officeId?: /** The unique identifier of the office responsible for the key */
string | undefined, keysInSet?: /** A listing of the individual keys included in the set */
Array<CreateIndividualKeyModel> | undefined};