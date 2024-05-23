import { z } from 'zod'

export const landlordContactRelationshipModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of relationship between a landlord and a contact or company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the landlord relationship */ id: z.string().nullable().optional(),
        /** The unique identifier of the landlord */ landlordId: z.string().nullable().optional(),
        /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
        /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
        /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
        /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
        /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
        isMain: z.boolean().nullable().optional(),
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
