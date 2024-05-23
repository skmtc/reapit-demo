import { z } from 'zod'

/** Representation of an individual contact subscription */
export const contactSubscriptionModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the subscription */ id: z.string().nullable().optional(),
  /** The unique identifier of the contact the subscription is associated with */
  contactId: z.string().nullable().optional(),
  /** The name of the subscription */ name: z.string().nullable().optional(),
  /** The name of the group this subscription belongs to, if applicable */ group: z.string().nullable().optional(),
  /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().nullable().optional(),
  /** The type of subscription (mailing/event) */ type: z.string().nullable().optional(),
  /** The date and time when the subscription was started for the associated contact */
  subscribedOn: z.string().nullable().optional(),
  /** The date and time when the subscription was terminated for the associated contact */
  unsubscribedOn: z.string().nullable().optional(),
})
