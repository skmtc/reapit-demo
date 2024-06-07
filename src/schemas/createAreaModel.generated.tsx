import { z } from 'zod'

/** Request body used to create a new area */
export const createAreaModel = /** Request body used to create a new area */
z.object({name: /** The name of the area */
z.string(), type: /** The type of area (postcodes/polygon/group) */
z.string(), area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
z.array(z.string()), departmentIds: /** A collection of unique identifiers of departments associated to the area */
z.array(z.string()).optional(), officeIds: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), parentId: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
z.string().optional()});
/** Request body used to create a new area */
export type CreateAreaModel = /** Request body used to create a new area */
{name: /** The name of the area */
string, type: /** The type of area (postcodes/polygon/group) */
string, area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
Array<string>, departmentIds?: /** A collection of unique identifiers of departments associated to the area */
Array<string> | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
Array<string> | undefined, parentId?: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
string | undefined};