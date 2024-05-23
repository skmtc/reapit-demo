import { z } from 'zod'

export const contactSubscriptionModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual contact subscription */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the subscription */ id: z.string().nullable().optional(),
        /** The unique identifier of the contact the subscription is associated with */
        contactId: z.string().nullable().optional(),
        /** The name of the subscription */ name: z.string().nullable().optional(),
        /** The name of the group this subscription belongs to, if applicable */
        group: z.string().nullable().optional(),
        /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().nullable().optional(),
        /** The type of subscription (mailing/event) */ type: z.string().nullable().optional(),
        /** The date and time when the subscription was started for the associated contact */
        subscribedOn: z.string().nullable().optional(),
        /** The date and time when the subscription was terminated for the associated contact */
        unsubscribedOn: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
