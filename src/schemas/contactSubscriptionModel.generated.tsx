import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type ContactSubscriptionModel =
  /** Representation of an individual contact subscription */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the subscription */ string | null | undefined
    contactId?:
      | /** The unique identifier of the contact the subscription is associated with */
      string
      | null
      | undefined
    name?: /** The name of the subscription */ string | null | undefined
    group?: /** The name of the group this subscription belongs to, if applicable */ string | null | undefined
    status?: /** The status of the subscription (subscribed/unsubscribed) */ string | null | undefined
    type?: /** The type of subscription (mailing/event) */ string | null | undefined
    subscribedOn?:
      | /** The date and time when the subscription was started for the associated contact */
      string
      | null
      | undefined
    unsubscribedOn?:
      | /** The date and time when the subscription was terminated for the associated contact */
      string
      | null
      | undefined
  }
/** Representation of an individual contact subscription */
export const contactSubscriptionModel =
  /** Representation of an individual contact subscription */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the subscription */ id: z.string().optional().nullable(),
    /** The unique identifier of the contact the subscription is associated with */
    contactId: z.string().optional().nullable(),
    /** The name of the subscription */ name: z.string().optional().nullable(),
    /** The name of the group this subscription belongs to, if applicable */ group: z.string().optional().nullable(),
    /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().optional().nullable(),
    /** The type of subscription (mailing/event) */ type: z.string().optional().nullable(),
    /** The date and time when the subscription was started for the associated contact */
    subscribedOn: z.string().optional().nullable(),
    /** The date and time when the subscription was terminated for the associated contact */
    unsubscribedOn: z.string().optional().nullable(),
  })
