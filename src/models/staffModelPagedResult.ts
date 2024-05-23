import { z } from 'zod'

export const staffModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a staff member */
      z.object({
        /** The staff member's name */ name: z.string().nullable().optional(),
        /** A flag determining whether or not the staff member is currently active */
        active: z.boolean().nullable().optional(),
        /** The staff member's job title */ jobTitle: z.string().nullable().optional(),
        /** The staff member's work phone */ workPhone: z.string().nullable().optional(),
        /** The staff member's mobile phone */ mobilePhone: z.string().nullable().optional(),
        /** The staff member's email */ email: z.string().nullable().optional(),
        /** The staff member's preferred salutation */ salutation: z.string().nullable().optional(),
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
