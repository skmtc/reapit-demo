import { z } from 'zod'
import { createNotificationTargetModel, CreateNotificationTargetModel } from '@/models/createNotificationTargetModel.ts'

/** Payload for creating a notification */
export const createNotificationModel = z.object({
  /** The notification type (telephony) */ type: z.string().nullable().optional(),
  /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
  subType: z.string().nullable().optional(),
  /** The products the notification is associated to, and will be delivered to */
  products: z.array(z.string()).nullable().optional(),
  targets: createNotificationTargetModel.nullable().optional(),
  /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
  payload: z.object({}).nullable().optional(),
})
/** Payload for creating a notification */
export type CreateNotificationModel = {
  type?: /** The notification type (telephony) */ string | undefined
  subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */ string | undefined
  products?: /** The products the notification is associated to, and will be delivered to */ Array<string> | undefined
  targets?: CreateNotificationTargetModel | undefined
  payload?: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
  Record<string, never> | undefined
}
