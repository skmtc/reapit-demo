import { z } from 'zod'
import {
  createNotificationTargetModel,
  CreateNotificationTargetModel,
} from '@/schemas/createNotificationTargetModel.generated.tsx'

/** Payload for creating a notification */
export const createNotificationModel =
  /** Payload for creating a notification */
  z.object({
    /** The notification type (telephony) */ type: z.string().optional().nullable(),
    /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
    subType: z.string().optional().nullable(),
    /** The products the notification is associated to, and will be delivered to */
    products: z.array(z.string()).optional().nullable(),
    targets: createNotificationTargetModel.optional().nullable(),
    /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
    payload: z.object({}).optional().nullable(),
  })
/** Payload for creating a notification */
export type CreateNotificationModel =
  /** Payload for creating a notification */
  {
    type?: /** The notification type (telephony) */ string | null | undefined
    subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */ string | null | undefined
    products?:
      | /** The products the notification is associated to, and will be delivered to */
      Array<string>
      | null
      | undefined
    targets?: CreateNotificationTargetModel | null | undefined
    payload?:
      | /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
      Record<string, never>
      | null
      | undefined
  }
