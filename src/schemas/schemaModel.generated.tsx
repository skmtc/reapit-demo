import { z } from 'zod'

export type SchemaModel =
  /** Model representing a JSON schema used to validate a specific entity type */
  {
    id?: /** The unique identifier of this JSON schema */ string | null | undefined
    modified?: /** The date and time of when this JSON schema was last updated */ string | null | undefined
    schema?: /** The JSON schema document */ string | null | undefined
  }
/** Model representing a JSON schema used to validate a specific entity type */
export const schemaModel =
  /** Model representing a JSON schema used to validate a specific entity type */
  z.object({
    /** The unique identifier of this JSON schema */ id: z.string().optional().nullable(),
    /** The date and time of when this JSON schema was last updated */ modified: z.string().optional().nullable(),
    /** The JSON schema document */ schema: z.string().optional().nullable(),
  })
