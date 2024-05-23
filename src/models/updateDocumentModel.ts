import { z } from 'zod'

/** Request body used to update an existing document */
export const updateDocumentModel = z.object({
  /** The unique identifier of the type of document */ typeId: z.string().nullable().optional(),
  /** The filename of the document */ name: z.string().nullable().optional(),
  /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().nullable().optional(),
  /** App specific metadata to set against the document */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
