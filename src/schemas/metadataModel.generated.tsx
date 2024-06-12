import { z } from 'zod'

export type MetadataModel =
  /** Model representing the state of a metadata record for a given entity */
  {
    id?: /** The unique identifier of this metadata record */ string | null | undefined
    modified?: /** The date and time of when this metadata record was last updated */ string | null | undefined
    entityType?: /** The name of the entity type that this metadata record is associated to */ string | null | undefined
    entityId?:
      | /** The unique identifier of the the entity that this metadata is associated to */
      string
      | null
      | undefined
    metadata?: /** The JSON document content */ string | null | undefined
  }
/** Model representing the state of a metadata record for a given entity */
export const metadataModel =
  /** Model representing the state of a metadata record for a given entity */
  z.object({
    /** The unique identifier of this metadata record */ id: z.string().optional().nullable(),
    /** The date and time of when this metadata record was last updated */ modified: z.string().optional().nullable(),
    /** The name of the entity type that this metadata record is associated to */
    entityType: z.string().optional().nullable(),
    /** The unique identifier of the the entity that this metadata is associated to */
    entityId: z.string().optional().nullable(),
    /** The JSON document content */ metadata: z.string().optional().nullable(),
  })
