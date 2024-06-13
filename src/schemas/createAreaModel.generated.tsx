import { z } from 'zod'

/** Request body used to create a new area */
export type CreateAreaModel =
  /** Request body used to create a new area */
  {
    name: /** The name of the area */ string
    type: /** The type of area (postcodes/polygon/group) */ string
    area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string>
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
    parentId?:
      | /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
      string
      | null
      | undefined
  }
export const createAreaModel =
  /** Request body used to create a new area */
  z.object({
    /** The name of the area */ name: z.string(),
    /** The type of area (postcodes/polygon/group) */ type: z.string(),
    /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    area: z.array(z.string()),
    /** A collection of unique identifiers of departments associated to the area */
    departmentIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
    parentId: z.string().optional().nullable(),
  })
