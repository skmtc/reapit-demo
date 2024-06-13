import { z } from 'zod'

/** Request body used to update an existing contact subscription */
export type UpdateContactSubscriptionModel =
  /** Request body used to update an existing contact subscription */
  { status?: /** The status of the subscription (subscribed/unsubscribed) */ string | null | undefined }
export const updateContactSubscriptionModel =
  /** Request body used to update an existing contact subscription */
  z.object({ /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().optional().nullable() })
