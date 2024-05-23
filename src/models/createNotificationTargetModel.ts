import { z } from 'zod'

/** Payload for defining notification targets */
export const createNotificationTargetModel = z.object({
  /** The identifier of the negotiators whom should receive the notification */
  negotiatorId: z.array(z.string()).nullable().optional(),
})
