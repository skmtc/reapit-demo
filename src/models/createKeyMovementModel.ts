import { z } from 'zod'

/** Request body used to create a new key movement */
export const createKeyMovementModel = z.object({
  /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
  checkInRequired: z.boolean().nullable().optional(),
  /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
  checkOutToId: z.string().nullable().optional(),
  /** The type of entity that checked out the key (contact/negotiator) */
  checkOutToType: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who performed the key check out */
  checkOutNegotiatorId: z.string().nullable().optional(),
})
