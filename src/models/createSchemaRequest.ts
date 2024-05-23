import { z } from 'zod'

/** Payload to create a JSON schema for metadata validation */
export const createSchemaRequest = z.object({
  /** The name of the entity type that this schema is related to */ entityType: z.string(),
  /** The JSON schema used to validate entities of this type */ schema: z.string(),
})
