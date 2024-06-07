import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a key movement */
export const keyMovementModel = /** Representation of a key movement */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the key movement */
z.string().optional(), created: /** The date and time when the key movement was created */
z.string().optional(), modified: /** The date and time when the key movement was last modified */
z.string().optional(), keyId: /** The unique identifier of the key set this movement belongs to */
z.string().optional(), propertyId: /** The unique identifier of the property that the key set belongs to */
z.string().optional(), checkOutToId: /** The unique identifier of the contact/negotiator that the key is checked out with */
z.string().optional(), checkOutToType: /** The type of entity that checked out the key (contact/negotiator) */
z.string().optional(), checkOutAt: /** The date and time of when the key set was checked out */
z.string().optional(), checkOutNegotiatorId: /** The unique identifier of the negotiator who performed the key check out */
z.string().optional(), checkInAt: /** The date and time of when the key set was checked in */
z.string().optional(), checkInNegotiatorId: /** The unique identifier of the negotiator who performed the key check in */
z.string().optional(), _eTag: /** The ETag for the current version of the key movement. Used for managing update concurrency */
z.string().optional()});
/** Representation of a key movement */
export type KeyMovementModel = /** Representation of a key movement */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the key movement */
string | undefined, created?: /** The date and time when the key movement was created */
string | undefined, modified?: /** The date and time when the key movement was last modified */
string | undefined, keyId?: /** The unique identifier of the key set this movement belongs to */
string | undefined, propertyId?: /** The unique identifier of the property that the key set belongs to */
string | undefined, checkOutToId?: /** The unique identifier of the contact/negotiator that the key is checked out with */
string | undefined, checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */
string | undefined, checkOutAt?: /** The date and time of when the key set was checked out */
string | undefined, checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
string | undefined, checkInAt?: /** The date and time of when the key set was checked in */
string | undefined, checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */
string | undefined, _eTag?: /** The ETag for the current version of the key movement. Used for managing update concurrency */
string | undefined};