import { z } from 'zod'

/** Request body used to update an existing area */
export const updateAreaModel = /** Request body used to update an existing area */
z.object({name: /** The name of the area */
z.string().optional(), area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
z.array(z.string()).optional(), departmentIds: /** A collection of unique identifiers of departments associated to the area */
z.array(z.string()).optional(), officeIds: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
z.array(z.string()).optional()});
/** Request body used to update an existing area */
export type UpdateAreaModel = /** Request body used to update an existing area */
{name?: /** The name of the area */
string | undefined, area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
Array<string> | undefined, departmentIds?: /** A collection of unique identifiers of departments associated to the area */
Array<string> | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
Array<string> | undefined};