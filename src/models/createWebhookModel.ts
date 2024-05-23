import { z } from 'zod'

/** Request body used to create a new webhook subscription */
export const createWebhookModel = z.object({
  /** The url where the payload associated with the webhook should be sent to */ url: z.string(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().nullable().optional(),
  /** The identifiers of the topics the subscription is associated with */
  topicIds: z.array(z.string()).nullable().optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().nullable().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
