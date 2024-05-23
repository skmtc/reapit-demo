import { z } from 'zod'

export const documentModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a document */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
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
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
