import { z } from 'zod'

export const schemaModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing a JSON schema used to validate a specific entity type */
      z.object({
        /** The unique identifier of this JSON schema */ id: z.string().nullable().optional(),
        /** The date and time of when this JSON schema was last updated */ modified: z.string().nullable().optional(),
        /** The JSON schema document */ schema: z.string().nullable().optional(),
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
