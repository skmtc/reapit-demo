import { z } from 'zod'

/** Payload to update a metadata record */
export const updateMetadataRequest = z.object({ /** The updated JSON document to store */ metadata: z.string() })
/** Payload to update a metadata record */
export type UpdateMetadataRequest = { metadata: /** The updated JSON document to store */ string }
