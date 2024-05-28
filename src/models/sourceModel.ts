import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a source of business */
export const sourceModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
/** Representation of a source of business */
export type SourceModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the source */ string | undefined
  created?: /** The date and time when the source was created */ string | undefined
  modified?: /** The date and time when the source was last modified */ string | undefined
  name?: /** The name of the source or advertising publication */ string | undefined
  type?: /** The type of the source (source/advertisement) */ string | undefined
  officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
  Array<string> | undefined
  _eTag?: /** The ETag for the current version of the source. Used for managing update concurrency */ string | undefined
}
