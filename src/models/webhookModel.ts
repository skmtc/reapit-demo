import { z } from 'zod'

/** Representation of a webhook subscription */
export const webhookModel = z.object({
  /** The unique identifier of the webhook */ id: z.string().nullable().optional(),
  /** The date and time when the webhook was created */ created: z.string().nullable().optional(),
  /** The date and time when the webhook was last modified */ modified: z.string().nullable().optional(),
  /** The url where the payload associated with the webhook should be sent to */ url: z.string().nullable().optional(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().nullable().optional(),
  /** The identifiers of the topics the webhook is associated with */
  topicIds: z.array(z.string()).nullable().optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().nullable().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
