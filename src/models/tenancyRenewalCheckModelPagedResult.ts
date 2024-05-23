import { z } from 'zod'

export const tenancyRenewalCheckModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy renewal check */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the tenancy renewal check */ id: z.string().nullable().optional(),
        /** The date and time when the tenancy renewal check was created */ created: z.string().nullable().optional(),
        /** The date and time when the tenancy renewal check was last modified */
        modified: z.string().nullable().optional(),
        /** The status of the tenancy renewal check (needed/notNeeded/arranging/completed) */
        status: z.string().nullable().optional(),
        /** Textual description of what the tenancy renewal check relates to */
        description: z.string().nullable().optional(),
        /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
        checkTypeId: z.string().nullable().optional(),
        /** The unique identifier of the tenancy that this check relates to */
        tenancyId: z.string().nullable().optional(),
        /** The unique identifier of the renewal that this check relates to */
        renewalId: z.string().nullable().optional(),
        /** App specific metadata that has been set against the tenancy renewal check */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
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
