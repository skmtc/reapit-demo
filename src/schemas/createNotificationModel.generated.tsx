import { z } from 'zod'
import { createNotificationTargetModel, CreateNotificationTargetModel } from '@/schemas/createNotificationTargetModel.generated.tsx'

/** Payload for creating a notification */
export const createNotificationModel = /** Payload for creating a notification */
z.object({type: /** The notification type (telephony) */
z.string().optional(), subType: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
z.string().optional(), products: /** The products the notification is associated to, and will be delivered to */
z.array(z.string()).optional(), targets: createNotificationTargetModel.optional(), payload: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
z.object({}).optional()});
/** Payload for creating a notification */
export type CreateNotificationModel = /** Payload for creating a notification */
{type?: /** The notification type (telephony) */
string | undefined, subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
string | undefined, products?: /** The products the notification is associated to, and will be delivered to */
Array<string> | undefined, targets?: CreateNotificationTargetModel | undefined, payload?: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
Record<string, never> | undefined};