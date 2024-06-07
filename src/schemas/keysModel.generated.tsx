import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { individualKeyModel, IndividualKeyModel } from '@/schemas/individualKeyModel.generated.tsx'

/** Representation of a set of keys */
export const keysModel = /** Representation of a set of keys */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the key */
z.string().optional(), created: /** The date and time when the key was created */
z.string().optional(), modified: /** The date and time when the key was last modified */
z.string().optional(), number: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
z.string().optional(), typeId: /** The unique identifier of the key type */
z.string().optional(), officeId: /** The unique identifier of the office responsible for the key */
z.string().optional(), propertyId: /** The unique identifier of the property that the key belongs to */
z.string().optional(), status: /** The status of the key (checkedIn/checkedOut/noLongerHeld) */
z.string().optional(), keysInSet: /** A listing of the individual keys included in the set */
z.array(individualKeyModel).optional(), _eTag: /** The ETag for the current version of the keys. Used for managing update concurrency */
z.string().optional()});
/** Representation of a set of keys */
export type KeysModel = /** Representation of a set of keys */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the key */
string | undefined, created?: /** The date and time when the key was created */
string | undefined, modified?: /** The date and time when the key was last modified */
string | undefined, number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
string | undefined, typeId?: /** The unique identifier of the key type */
string | undefined, officeId?: /** The unique identifier of the office responsible for the key */
string | undefined, propertyId?: /** The unique identifier of the property that the key belongs to */
string | undefined, status?: /** The status of the key (checkedIn/checkedOut/noLongerHeld) */
string | undefined, keysInSet?: /** A listing of the individual keys included in the set */
Array<IndividualKeyModel> | undefined, _eTag?: /** The ETag for the current version of the keys. Used for managing update concurrency */
string | undefined};