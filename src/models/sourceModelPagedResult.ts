import { z } from 'zod'

export const sourceModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a source of business */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the source */ id: z.string().nullable().optional(),
        /** The date and time when the source was created */ created: z.string().nullable().optional(),
        /** The date and time when the source was last modified */ modified: z.string().nullable().optional(),
        /** The name of the source or advertising publication */ name: z.string().nullable().optional(),
        /** The type of the source (source/advertisement) */ type: z.string().nullable().optional(),
        /** A collection of the unique identifiers of offices that regularly get business from the source */
        officeIds: z.array(z.string()).nullable().optional(),
        /** A collection of unique identifiers of departments that regularly get business from the source */
        departmentIds: z.array(z.string()).nullable().optional(),
        /** The ETag for the current version of the source. Used for managing update concurrency */
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
