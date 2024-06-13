import { z } from 'zod'

/** Request body used to create a new property image */
export const createPropertyImageModel =
  /** Request body used to create a new property image */
  z.object({
    /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
    data: z.string().optional().nullable(),
    /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
    fileUrl: z.string().optional().nullable(),
    /** The unique identifier of the property attached to the image */ propertyId: z.string(),
    /** The image caption */ caption: z.string(),
    /** The type of image (photograph/floorPlan/epc/map) */ type: z.string(),
  })
/** Request body used to create a new property image */
export type CreatePropertyImageModel =
  /** Request body used to create a new property image */
  {
    data?:
      | /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
      string
      | null
      | undefined
    fileUrl?:
      | /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
      string
      | null
      | undefined
    propertyId: /** The unique identifier of the property attached to the image */ string
    caption: /** The image caption */ string
    type: /** The type of image (photograph/floorPlan/epc/map) */ string
  }
