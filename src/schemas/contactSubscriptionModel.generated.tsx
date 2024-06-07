import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an individual contact subscription */
export const contactSubscriptionModel = /** Representation of an individual contact subscription */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the subscription */
z.string().optional(), contactId: /** The unique identifier of the contact the subscription is associated with */
z.string().optional(), name: /** The name of the subscription */
z.string().optional(), group: /** The name of the group this subscription belongs to, if applicable */
z.string().optional(), status: /** The status of the subscription (subscribed/unsubscribed) */
z.string().optional(), type: /** The type of subscription (mailing/event) */
z.string().optional(), subscribedOn: /** The date and time when the subscription was started for the associated contact */
z.string().optional(), unsubscribedOn: /** The date and time when the subscription was terminated for the associated contact */
z.string().optional()});
/** Representation of an individual contact subscription */
export type ContactSubscriptionModel = /** Representation of an individual contact subscription */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the subscription */
string | undefined, contactId?: /** The unique identifier of the contact the subscription is associated with */
string | undefined, name?: /** The name of the subscription */
string | undefined, group?: /** The name of the group this subscription belongs to, if applicable */
string | undefined, status?: /** The status of the subscription (subscribed/unsubscribed) */
string | undefined, type?: /** The type of subscription (mailing/event) */
string | undefined, subscribedOn?: /** The date and time when the subscription was started for the associated contact */
string | undefined, unsubscribedOn?: /** The date and time when the subscription was terminated for the associated contact */
string | undefined};