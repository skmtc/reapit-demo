import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
export const areaModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the area */ id: z.string().nullable().optional(),
  /** The date and time when the area was created */ created: z.string().nullable().optional(),
  /** The date and time when the area was last modified */ modified: z.string().nullable().optional(),
  /** The name of the area */ name: z.string().nullable().optional(),
  /** A flag denoting whether the area can currently be selected against properties and applicants */
  active: z.boolean().nullable().optional(),
  /** The type of area (postcodes/polygon/group) */ type: z.string().nullable().optional(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
  parentIds: z.array(z.string()).nullable().optional(),
  /** The ETag for the current version of the area. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
export type AreaModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the area */ string | undefined
  created?: /** The date and time when the area was created */ string | undefined
  modified?: /** The date and time when the area was last modified */ string | undefined
  name?: /** The name of the area */ string | undefined
  active?: /** A flag denoting whether the area can currently be selected against properties and applicants */
  boolean | undefined
  type?: /** The type of area (postcodes/polygon/group) */ string | undefined
  area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments associated to the area */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  Array<string> | undefined
  parentIds?: /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
  Array<string> | undefined
  _eTag?: /** The ETag for the current version of the area. Used for managing update concurrency */ string | undefined
}
