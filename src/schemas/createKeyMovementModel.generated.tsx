import { z } from 'zod'

/** Request body used to create a new key movement */
export const createKeyMovementModel = /** Request body used to create a new key movement */
z.object({checkInRequired: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
z.boolean().optional(), checkOutToId: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
z.string().optional(), checkOutToType: /** The type of entity that checked out the key (contact/negotiator) */
z.string().optional(), checkOutNegotiatorId: /** The unique identifier of the negotiator who performed the key check out */
z.string().optional()});
/** Request body used to create a new key movement */
export type CreateKeyMovementModel = /** Request body used to create a new key movement */
{checkInRequired?: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
boolean | undefined, checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
string | undefined, checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */
string | undefined, checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
string | undefined};