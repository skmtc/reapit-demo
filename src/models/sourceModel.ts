import { z } from 'zod'

/** Representation of a source of business */
export const sourceModel = z.object({
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
})
