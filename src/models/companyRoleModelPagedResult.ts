import { z } from 'zod'

export const companyRoleModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of the roles that an individual companies possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the relationship */ id: z.string().nullable().optional(),
        /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
        /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
        /** The unique identifier of the related company */ companyId: z.string().nullable().optional(),
        /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
        associatedType: z.string().nullable().optional(),
        /** The unique identifier of the related entity */ associatedId: z.string().nullable().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().nullable().optional(),
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
