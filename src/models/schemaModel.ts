import { z } from 'zod'

/** Model representing a JSON schema used to validate a specific entity type */
export const schemaModel = z.object({
  /** The unique identifier of this JSON schema */ id: z.string().nullable().optional(),
  /** The date and time of when this JSON schema was last updated */ modified: z.string().nullable().optional(),
  /** The JSON schema document */ schema: z.string().nullable().optional(),
})
/** Model representing a JSON schema used to validate a specific entity type */
export type SchemaModel = {
  id?: /** The unique identifier of this JSON schema */ string | undefined
  modified?: /** The date and time of when this JSON schema was last updated */ string | undefined
  schema?: /** The JSON schema document */ string | undefined
}
