import { z } from 'zod'

export const metadataModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing the state of a metadata record for a given entity */
      z.object({
        /** The unique identifier of this metadata record */ id: z.string().nullable().optional(),
        /** The date and time of when this metadata record was last updated */
        modified: z.string().nullable().optional(),
        /** The name of the entity type that this metadata record is associated to */
        entityType: z.string().nullable().optional(),
        /** The unique identifier of the the entity that this metadata is associated to */
        entityId: z.string().nullable().optional(),
        /** The JSON document content */ metadata: z.string().nullable().optional(),
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
