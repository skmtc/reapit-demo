import { z } from 'zod'

/** Payload to update a JSON schema */
export const updateSchemaRequest = z.object({ /** The updated JSON schema to store */ schema: z.string() })
