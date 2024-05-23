import { z } from 'zod'

export const propertyCheckModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a check */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the check */ id: z.string().nullable().optional(),
        /** The date and time when the check was created */ created: z.string().nullable().optional(),
        /** The date and time when the check was last modified */ modified: z.string().nullable().optional(),
        /** Textual description of what the check relates to */ description: z.string().nullable().optional(),
        /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string().nullable().optional(),
        /** The type of the check (preInstruction) */ type: z.string().nullable().optional(),
        /** The unique identifier of the property that this check relates to */
        propertyId: z.string().nullable().optional(),
        /** The ETag for the current version of the check. Used for managing update concurrency */
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
