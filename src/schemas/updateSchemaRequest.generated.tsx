import { z } from 'zod'

/** Payload to update a JSON schema */
export const updateSchemaRequest = /** Payload to update a JSON schema */
z.object({schema: /** The updated JSON schema to store */
z.string()});
/** Payload to update a JSON schema */
export type UpdateSchemaRequest = /** Payload to update a JSON schema */
{schema: /** The updated JSON schema to store */
string};