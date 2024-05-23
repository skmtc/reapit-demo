import { z } from 'zod'

/** Request body used for checking in a key */
export const checkInKeyModel = z.object({
  /** The unique identifier of the negotiator who performed the key check in */
  checkInNegotiatorId: z.string().nullable().optional(),
})
