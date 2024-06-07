import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a property image */
export const propertyImageModel = /** Representation of a property image */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the image, which is also the filename */
z.string().optional(), created: /** The date and time when the image was created */
z.string().optional(), modified: /** The date and time when the property image was last modified */
z.string().optional(), propertyId: /** The unique identifier of the property attached to the image */
z.string().optional(), url: /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
z.string().optional(), caption: /** The image caption */
z.string().optional(), type: /** The type of image (photograph/floorPlan/epc/map) */
z.string().optional(), order: /** The display order index of the image which can be used to correctly order the whole collection */
z.number().int().optional(), fromArchive: /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
z.boolean().optional(), _eTag: /** The ETag for the current version of the image. Used for managing update concurrency */
z.string().optional()});
/** Representation of a property image */
export type PropertyImageModel = /** Representation of a property image */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the image, which is also the filename */
string | undefined, created?: /** The date and time when the image was created */
string | undefined, modified?: /** The date and time when the property image was last modified */
string | undefined, propertyId?: /** The unique identifier of the property attached to the image */
string | undefined, url?: /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
string | undefined, caption?: /** The image caption */
string | undefined, type?: /** The type of image (photograph/floorPlan/epc/map) */
string | undefined, order?: /** The display order index of the image which can be used to correctly order the whole collection */
number | undefined, fromArchive?: /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
boolean | undefined, _eTag?: /** The ETag for the current version of the image. Used for managing update concurrency */
string | undefined};