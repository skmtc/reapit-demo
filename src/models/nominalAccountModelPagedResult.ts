import { z } from 'zod'

export const nominalAccountModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing a nominal account */
      z.object({
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
