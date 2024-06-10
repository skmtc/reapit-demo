import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a document */
export const documentModel =
  /** Representation of a document */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the document */ id: z.string().optional().nullable(),
    /** The date and time when the document was created */ created: z.string().optional().nullable(),
    /** The date and time when the document was last modified */ modified: z.string().optional().nullable(),
    /** The type of entity that the document is associated with */ associatedType: z.string().optional().nullable(),
    /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().optional().nullable(),
    /** The unique identifier of the entity that the document is associated with */
    associatedId: z.string().optional().nullable(),
    /** The unique identifier of the type of document */ typeId: z.string().optional().nullable(),
    /** The filename of the document */ name: z.string().optional().nullable(),
    /** App specific metadata that has been set against the document */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the document. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
export type DocumentModel =
  /** Representation of a document */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the document */ string | null | undefined
    created?: /** The date and time when the document was created */ string | null | undefined
    modified?: /** The date and time when the document was last modified */ string | null | undefined
    associatedType?: /** The type of entity that the document is associated with */ string | null | undefined
    isPrivate?: /** A flag denoting whether or not the document is private */ boolean | null | undefined
    associatedId?:
      | /** The unique identifier of the entity that the document is associated with */
      string
      | null
      | undefined
    typeId?: /** The unique identifier of the type of document */ string | null | undefined
    name?: /** The filename of the document */ string | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the document */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the document. Used for managing update concurrency */
      string
      | null
      | undefined
  }
