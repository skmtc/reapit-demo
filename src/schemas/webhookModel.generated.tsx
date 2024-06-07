import { z } from 'zod'

/** Representation of a webhook subscription */
export const webhookModel = /** Representation of a webhook subscription */
z.object({id: /** The unique identifier of the webhook */
z.string().optional(), created: /** The date and time when the webhook was created */
z.string().optional(), modified: /** The date and time when the webhook was last modified */
z.string().optional(), url: /** The url where the payload associated with the webhook should be sent to */
z.string().optional(), description: /** A short description associated with the webhook (ie a friendly name or label) */
z.string().optional(), topicIds: /** The identifiers of the topics the webhook is associated with */
z.array(z.string()).optional(), active: /** Flag denoting whether or not the webhook is active and ready to receive data */
z.boolean().optional(), ignoreEtagOnlyChanges: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
z.boolean().optional()});
/** Representation of a webhook subscription */
export type WebhookModel = /** Representation of a webhook subscription */
{id?: /** The unique identifier of the webhook */
string | undefined, created?: /** The date and time when the webhook was created */
string | undefined, modified?: /** The date and time when the webhook was last modified */
string | undefined, url?: /** The url where the payload associated with the webhook should be sent to */
string | undefined, description?: /** A short description associated with the webhook (ie a friendly name or label) */
string | undefined, topicIds?: /** The identifiers of the topics the webhook is associated with */
Array<string> | undefined, active?: /** Flag denoting whether or not the webhook is active and ready to receive data */
boolean | undefined, ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
boolean | undefined};