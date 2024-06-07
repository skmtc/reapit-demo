import { z } from 'zod'

/** Model representing a JSON schema used to validate a specific entity type */
export const schemaModel = /** Model representing a JSON schema used to validate a specific entity type */
z.object({id: /** The unique identifier of this JSON schema */
z.string().optional(), modified: /** The date and time of when this JSON schema was last updated */
z.string().optional(), schema: /** The JSON schema document */
z.string().optional()});
/** Model representing a JSON schema used to validate a specific entity type */
export type SchemaModel = /** Model representing a JSON schema used to validate a specific entity type */
{id?: /** The unique identifier of this JSON schema */
string | undefined, modified?: /** The date and time of when this JSON schema was last updated */
string | undefined, schema?: /** The JSON schema document */
string | undefined};