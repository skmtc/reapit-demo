import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type PropertyImageModel =
  /** Representation of a property image */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the image, which is also the filename */ string | null | undefined
    created?: /** The date and time when the image was created */ string | null | undefined
    modified?: /** The date and time when the property image was last modified */ string | null | undefined
    propertyId?: /** The unique identifier of the property attached to the image */ string | null | undefined
    url?:
      | /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
      string
      | null
      | undefined
    caption?: /** The image caption */ string | null | undefined
    type?: /** The type of image (photograph/floorPlan/epc/map) */ string | null | undefined
    order?:
      | /** The display order index of the image which can be used to correctly order the whole collection */
      number
      | null
      | undefined
    fromArchive?:
      | /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
      boolean
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the image. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a property image */
export const propertyImageModel =
  /** Representation of a property image */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the image, which is also the filename */ id: z.string().optional().nullable(),
    /** The date and time when the image was created */ created: z.string().optional().nullable(),
    /** The date and time when the property image was last modified */ modified: z.string().optional().nullable(),
    /** The unique identifier of the property attached to the image */ propertyId: z.string().optional().nullable(),
    /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
    url: z.string().optional().nullable(),
    /** The image caption */ caption: z.string().optional().nullable(),
    /** The type of image (photograph/floorPlan/epc/map) */ type: z.string().optional().nullable(),
    /** The display order index of the image which can be used to correctly order the whole collection */
    order: z.number().int().optional().nullable(),
    /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
    fromArchive: z.boolean().optional().nullable(),
    /** The ETag for the current version of the image. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
