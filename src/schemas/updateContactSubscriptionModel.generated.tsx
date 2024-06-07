import { z } from 'zod'

/** Request body used to update an existing contact subscription */
export const updateContactSubscriptionModel = /** Request body used to update an existing contact subscription */
z.object({status: /** The status of the subscription (subscribed/unsubscribed) */
z.string().optional()});
/** Request body used to update an existing contact subscription */
export type UpdateContactSubscriptionModel = /** Request body used to update an existing contact subscription */
{status?: /** The status of the subscription (subscribed/unsubscribed) */
string | undefined};