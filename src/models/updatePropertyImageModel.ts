import { z } from 'zod'

/** Request body used to update an existing property image */
export const updatePropertyImageModel = z.object({
  /** The image caption */ caption: z.string().nullable().optional(),
  /** The type of image (photograph/floorPlan/epc/map) */ type: z.string().nullable().optional(),
})
