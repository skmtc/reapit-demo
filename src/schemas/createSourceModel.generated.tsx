import { z } from 'zod'

/** Request body used to create a new source of business */
export const createSourceModel = /** Request body used to create a new source of business */
z.object({name: /** The name of the source or advertising publication */
z.string(), type: /** The type of the source (source/advertisement) */
z.string(), officeIds: /** A collection of the unique identifiers of offices that regularly get business from the source */
z.array(z.string()).optional(), departmentIds: /** A collection of unique identifiers of departments that regularly get business from the source */
z.array(z.string()).optional()});
/** Request body used to create a new source of business */
export type CreateSourceModel = /** Request body used to create a new source of business */
{name: /** The name of the source or advertising publication */
string, type: /** The type of the source (source/advertisement) */
string, officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
Array<string> | undefined, departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
Array<string> | undefined};