import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a property image */
export const propertyImageModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
})
/** Representation of a property image */
export type PropertyImageModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the image, which is also the filename */ string | undefined
  created?: /** The date and time when the image was created */ string | undefined
  modified?: /** The date and time when the property image was last modified */ string | undefined
  propertyId?: /** The unique identifier of the property attached to the image */ string | undefined
  url?: /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
  string | undefined
  caption?: /** The image caption */ string | undefined
  type?: /** The type of image (photograph/floorPlan/epc/map) */ string | undefined
  order?: /** The display order index of the image which can be used to correctly order the whole collection */
  number | undefined
  fromArchive?: /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
  boolean | undefined
  _eTag?: /** The ETag for the current version of the image. Used for managing update concurrency */ string | undefined
}
