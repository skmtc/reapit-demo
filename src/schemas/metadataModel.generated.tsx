import { z } from 'zod'

/** Model representing the state of a metadata record for a given entity */
export const metadataModel =
  /** Model representing the state of a metadata record for a given entity */
  z.object({
    /** The unique identifier of this metadata record */ id: z.string().optional(),
    /** The date and time of when this metadata record was last updated */ modified: z.string().optional(),
    /** The name of the entity type that this metadata record is associated to */ entityType: z.string().optional(),
    /** The unique identifier of the the entity that this metadata is associated to */ entityId: z.string().optional(),
    /** The JSON document content */ metadata: z.string().optional(),
  })
/** Model representing the state of a metadata record for a given entity */
export type MetadataModel =
  /** Model representing the state of a metadata record for a given entity */
  {
    id?: /** The unique identifier of this metadata record */ string | undefined
    modified?: /** The date and time of when this metadata record was last updated */ string | undefined
    entityType?: /** The name of the entity type that this metadata record is associated to */ string | undefined
    entityId?: /** The unique identifier of the the entity that this metadata is associated to */ string | undefined
    metadata?: /** The JSON document content */ string | undefined
  }
