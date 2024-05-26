import { z } from 'zod'

/** Request body used to update an existing contact subscription */
export const updateContactSubscriptionModel = z.object({
  /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().nullable().optional(),
})
/** Request body used to update an existing contact subscription */
export type UpdateContactSubscriptionModel = {
  status?: /** The status of the subscription (subscribed/unsubscribed) */ string | undefined
}
