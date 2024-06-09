import { z } from 'zod'

/** Request body used to create a new webhook subscription */
export const createWebhookModel =
  /** Request body used to create a new webhook subscription */
  z.object({
    /** The url where the payload associated with the webhook should be sent to */ url: z.string(),
    /** A short description associated with the webhook (ie a friendly name or label) */
    description: z.string().optional(),
    /** The identifiers of the topics the subscription is associated with */ topicIds: z.array(z.string()).optional(),
    /** Flag denoting whether or not the webhook is active and ready to receive data */ active: z.boolean().optional(),
    /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
    ignoreEtagOnlyChanges: z.boolean().optional(),
  })
/** Request body used to create a new webhook subscription */
export type CreateWebhookModel =
  /** Request body used to create a new webhook subscription */
  {
    url: /** The url where the payload associated with the webhook should be sent to */ string
    description?: /** A short description associated with the webhook (ie a friendly name or label) */
    string | undefined
    topicIds?: /** The identifiers of the topics the subscription is associated with */ Array<string> | undefined
    active?: /** Flag denoting whether or not the webhook is active and ready to receive data */ boolean | undefined
    ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
    boolean | undefined
  }
