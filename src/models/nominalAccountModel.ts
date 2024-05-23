import { z } from 'zod'

/** Model representing a nominal account */
export const nominalAccountModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the nominal account */ id: z.string().nullable().optional(),
  /** The date and time when the nominal account was created */ created: z.string().nullable().optional(),
  /** The date and time when the nominal account was last modified */ modified: z.string().nullable().optional(),
  /** The nominal account name */ name: z.string().nullable().optional(),
  /** Flag indicating whether or not the nominal account can be associated with works orders */
  appliesToWorksOrders: z.boolean().nullable().optional(),
})
