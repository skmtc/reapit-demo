import { z } from 'zod'

/** Request body used to reindex property images */
export const reindexPropertyImagesModel = z.object({
  /** The unique identifier of the property to update */ propertyId: z.string().nullable().optional(),
  /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
  imageOrder: z.array(z.string()).nullable().optional(),
})
/** Request body used to reindex property images */
export type ReindexPropertyImagesModel = {
  propertyId?: /** The unique identifier of the property to update */ string | undefined
  imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
  Array<string> | undefined
}
