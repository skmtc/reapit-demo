import { z } from 'zod'

/** Request body used to update an existing area */
export const updateAreaModel = z.object({
  /** The name of the area */ name: z.string().nullable().optional(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
})
