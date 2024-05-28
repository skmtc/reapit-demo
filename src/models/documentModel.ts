import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a document */
export const documentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the document */ id: z.string().nullable().optional(),
  /** The date and time when the document was created */ created: z.string().nullable().optional(),
  /** The date and time when the document was last modified */ modified: z.string().nullable().optional(),
  /** The type of entity that the document is associated with */ associatedType: z.string().nullable().optional(),
  /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().nullable().optional(),
  /** The unique identifier of the entity that the document is associated with */
  associatedId: z.string().nullable().optional(),
  /** The unique identifier of the type of document */ typeId: z.string().nullable().optional(),
  /** The filename of the document */ name: z.string().nullable().optional(),
  /** App specific metadata that has been set against the document */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the document. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a document */
export type DocumentModel = {
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
