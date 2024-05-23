import { z } from 'zod'

export const propertyImageModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a property image */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the image, which is also the filename */ id: z.string().nullable().optional(),
        /** The date and time when the image was created */ created: z.string().nullable().optional(),
        /** The date and time when the property image was last modified */ modified: z.string().nullable().optional(),
        /** The unique identifier of the property attached to the image */ propertyId: z.string().nullable().optional(),
        /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
        url: z.string().nullable().optional(),
        /** The image caption */ caption: z.string().nullable().optional(),
        /** The type of image (photograph/floorPlan/epc/map) */ type: z.string().nullable().optional(),
        /** The display order index of the image which can be used to correctly order the whole collection */
        order: z.number().int().nullable().optional(),
        /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
        fromArchive: z.boolean().nullable().optional(),
        /** The ETag for the current version of the image. Used for managing update concurrency */
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
