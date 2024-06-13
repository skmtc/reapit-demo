import { z } from 'zod'

/** Request body used to reindex property images */
export type ReindexPropertyImagesModel =
  /** Request body used to reindex property images */
  {
    propertyId?: /** The unique identifier of the property to update */ string | null | undefined
    imageOrder?:
      | /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
      Array<string>
      | null
      | undefined
  }
export const reindexPropertyImagesModel =
  /** Request body used to reindex property images */
  z.object({
    /** The unique identifier of the property to update */ propertyId: z.string().optional().nullable(),
    /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
    imageOrder: z.array(z.string()).optional().nullable(),
  })
