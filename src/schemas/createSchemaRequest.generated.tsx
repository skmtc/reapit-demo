import { z } from 'zod'

/** Payload to create a JSON schema for metadata validation */
export const createSchemaRequest = /** Payload to create a JSON schema for metadata validation */
z.object({entityType: /** The name of the entity type that this schema is related to */
z.string(), schema: /** The JSON schema used to validate entities of this type */
z.string()});
/** Payload to create a JSON schema for metadata validation */
export type CreateSchemaRequest = /** Payload to create a JSON schema for metadata validation */
{entityType: /** The name of the entity type that this schema is related to */
string, schema: /** The JSON schema used to validate entities of this type */
string};