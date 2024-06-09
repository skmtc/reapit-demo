import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a document */
export const documentModel =
  /** Representation of a document */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the document */ id: z.string().optional(),
    /** The date and time when the document was created */ created: z.string().optional(),
    /** The date and time when the document was last modified */ modified: z.string().optional(),
    /** The type of entity that the document is associated with */ associatedType: z.string().optional(),
    /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().optional(),
    /** The unique identifier of the entity that the document is associated with */ associatedId: z.string().optional(),
    /** The unique identifier of the type of document */ typeId: z.string().optional(),
    /** The filename of the document */ name: z.string().optional(),
    /** App specific metadata that has been set against the document */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the document. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of a document */
export type DocumentModel =
  /** Representation of a document */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the document */ string | undefined
    created?: /** The date and time when the document was created */ string | undefined
    modified?: /** The date and time when the document was last modified */ string | undefined
    associatedType?: /** The type of entity that the document is associated with */ string | undefined
    isPrivate?: /** A flag denoting whether or not the document is private */ boolean | undefined
    associatedId?: /** The unique identifier of the entity that the document is associated with */ string | undefined
    typeId?: /** The unique identifier of the type of document */ string | undefined
    name?: /** The filename of the document */ string | undefined
    metadata?: /** App specific metadata that has been set against the document */
    Record<string, Record<string, never>> | undefined
    _eTag?: /** The ETag for the current version of the document. Used for managing update concurrency */
    string | undefined
  }
