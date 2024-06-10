import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
export const areaModel =
  /** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the area */ id: z.string().optional().nullable(),
    /** The date and time when the area was created */ created: z.string().optional().nullable(),
    /** The date and time when the area was last modified */ modified: z.string().optional().nullable(),
    /** The name of the area */ name: z.string().optional().nullable(),
    /** A flag denoting whether the area can currently be selected against properties and applicants */
    active: z.boolean().optional().nullable(),
    /** The type of area (postcodes/polygon/group) */ type: z.string().optional().nullable(),
    /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    area: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of departments associated to the area */
    departmentIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
    parentIds: z.array(z.string()).optional().nullable(),
    /** The ETag for the current version of the area. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
export type AreaModel =
  /** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the area */ string | null | undefined
    created?: /** The date and time when the area was created */ string | null | undefined
    modified?: /** The date and time when the area was last modified */ string | null | undefined
    name?: /** The name of the area */ string | null | undefined
    active?:
      | /** A flag denoting whether the area can currently be selected against properties and applicants */
      boolean
      | null
      | undefined
    type?: /** The type of area (postcodes/polygon/group) */ string | null | undefined
    area?:
      | /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
      Array<string>
      | null
      | undefined
    departmentIds?:
      | /** A collection of unique identifiers of departments associated to the area */
      Array<string>
      | null
      | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    parentIds?:
      | /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
      Array<string>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the area. Used for managing update concurrency */
      string
      | null
      | undefined
  }
