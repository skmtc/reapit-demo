import { z } from 'zod'

/** Payload for defining notification targets */
export const createNotificationTargetModel =
  /** Payload for defining notification targets */
  z.object({
    /** The identifier of the negotiators whom should receive the notification */
    negotiatorId: z.array(z.string()).optional(),
  })
/** Payload for defining notification targets */
export type CreateNotificationTargetModel =
  /** Payload for defining notification targets */
  {
    negotiatorId?: /** The identifier of the negotiators whom should receive the notification */
    Array<string> | undefined
  }
