import { z } from 'zod'

export type WebhookModel =
  /** Representation of a webhook subscription */
  {
    id?: /** The unique identifier of the webhook */ string | null | undefined
    created?: /** The date and time when the webhook was created */ string | null | undefined
    modified?: /** The date and time when the webhook was last modified */ string | null | undefined
    url?: /** The url where the payload associated with the webhook should be sent to */ string | null | undefined
    description?:
      | /** A short description associated with the webhook (ie a friendly name or label) */
      string
      | null
      | undefined
    topicIds?: /** The identifiers of the topics the webhook is associated with */ Array<string> | null | undefined
    active?:
      | /** Flag denoting whether or not the webhook is active and ready to receive data */
      boolean
      | null
      | undefined
    ignoreEtagOnlyChanges?:
      | /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
      boolean
      | null
      | undefined
  }
/** Representation of a webhook subscription */
export const webhookModel =
  /** Representation of a webhook subscription */
  z.object({
    /** The unique identifier of the webhook */ id: z.string().optional().nullable(),
    /** The date and time when the webhook was created */ created: z.string().optional().nullable(),
    /** The date and time when the webhook was last modified */ modified: z.string().optional().nullable(),
    /** The url where the payload associated with the webhook should be sent to */
    url: z.string().optional().nullable(),
    /** A short description associated with the webhook (ie a friendly name or label) */
    description: z.string().optional().nullable(),
    /** The identifiers of the topics the webhook is associated with */
    topicIds: z.array(z.string()).optional().nullable(),
    /** Flag denoting whether or not the webhook is active and ready to receive data */
    active: z.boolean().optional().nullable(),
    /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
    ignoreEtagOnlyChanges: z.boolean().optional().nullable(),
  })
