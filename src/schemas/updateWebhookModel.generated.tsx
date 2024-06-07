import { z } from 'zod'

/** Request body used to update a webhook subscription */
export const updateWebhookModel = /** Request body used to update a webhook subscription */
z.object({url: /** The url where the payload associated with the webhook should be sent to */
z.string(), description: /** A short description associated with the webhook (ie a friendly name or label) */
z.string().optional(), topicIds: /** The identifiers of the topics the subscription is associated with */
z.array(z.string()).optional(), active: /** Flag denoting whether or not the webhook is active and ready to receive data */
z.boolean().optional(), ignoreEtagOnlyChanges: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
z.boolean().optional()});
/** Request body used to update a webhook subscription */
export type UpdateWebhookModel = /** Request body used to update a webhook subscription */
{url: /** The url where the payload associated with the webhook should be sent to */
string, description?: /** A short description associated with the webhook (ie a friendly name or label) */
string | undefined, topicIds?: /** The identifiers of the topics the subscription is associated with */
Array<string> | undefined, active?: /** Flag denoting whether or not the webhook is active and ready to receive data */
boolean | undefined, ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
boolean | undefined};