import { z } from 'zod'

/** Payload to update a metadata record */
export const updateMetadataRequest = /** Payload to update a metadata record */
z.object({metadata: /** The updated JSON document to store */
z.string()});
/** Payload to update a metadata record */
export type UpdateMetadataRequest = /** Payload to update a metadata record */
{metadata: /** The updated JSON document to store */
string};