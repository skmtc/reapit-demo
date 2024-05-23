import { z } from 'zod'

/** Payload to update a metadata record */
export const updateMetadataRequest = z.object({ /** The updated JSON document to store */ metadata: z.string() })
