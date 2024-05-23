import { z } from 'zod'

export const vendorContactRelationshipModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a relationship between a vendor and a contact or company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the vendor relationship */ id: z.string().nullable().optional(),
        /** The unique identifier of the vendor */ vendorId: z.string().nullable().optional(),
        /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
        /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
        /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
        /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
        /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
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
