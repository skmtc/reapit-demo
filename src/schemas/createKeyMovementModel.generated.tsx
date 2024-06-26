import { z } from 'zod'

/** Request body used to create a new key movement */
export type CreateKeyMovementModel =
  /** Request body used to create a new key movement */
  {
    checkInRequired?:
      | /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
      boolean
      | null
      | undefined
    checkOutToId?:
      | /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
      string
      | null
      | undefined
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | null | undefined
    checkOutNegotiatorId?:
      | /** The unique identifier of the negotiator who performed the key check out */
      string
      | null
      | undefined
  }
export const createKeyMovementModel =
  /** Request body used to create a new key movement */
  z.object({
    /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
    checkInRequired: z.boolean().optional().nullable(),
    /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
    checkOutToId: z.string().optional().nullable(),
    /** The type of entity that checked out the key (contact/negotiator) */
    checkOutToType: z.string().optional().nullable(),
    /** The unique identifier of the negotiator who performed the key check out */
    checkOutNegotiatorId: z.string().optional().nullable(),
  })
