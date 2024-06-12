import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type SourceModel =
  /** Representation of a source of business */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the source */ string | null | undefined
    created?: /** The date and time when the source was created */ string | null | undefined
    modified?: /** The date and time when the source was last modified */ string | null | undefined
    name?: /** The name of the source or advertising publication */ string | null | undefined
    type?: /** The type of the source (source/advertisement) */ string | null | undefined
    officeIds?:
      | /** A collection of the unique identifiers of offices that regularly get business from the source */
      Array<string>
      | null
      | undefined
    departmentIds?:
      | /** A collection of unique identifiers of departments that regularly get business from the source */
      Array<string>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the source. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a source of business */
export const sourceModel =
  /** Representation of a source of business */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the source */ id: z.string().optional().nullable(),
    /** The date and time when the source was created */ created: z.string().optional().nullable(),
    /** The date and time when the source was last modified */ modified: z.string().optional().nullable(),
    /** The name of the source or advertising publication */ name: z.string().optional().nullable(),
    /** The type of the source (source/advertisement) */ type: z.string().optional().nullable(),
    /** A collection of the unique identifiers of offices that regularly get business from the source */
    officeIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of departments that regularly get business from the source */
    departmentIds: z.array(z.string()).optional().nullable(),
    /** The ETag for the current version of the source. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
