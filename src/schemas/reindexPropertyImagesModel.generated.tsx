import { z } from 'zod'

/** Request body used to reindex property images */
export const reindexPropertyImagesModel = /** Request body used to reindex property images */
z.object({propertyId: /** The unique identifier of the property to update */
z.string().optional(), imageOrder: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
z.array(z.string()).optional()});
/** Request body used to reindex property images */
export type ReindexPropertyImagesModel = /** Request body used to reindex property images */
{propertyId?: /** The unique identifier of the property to update */
string | undefined, imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
Array<string> | undefined};