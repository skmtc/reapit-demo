import { z } from 'zod'

/** Request body used to update an existing property image */
export const updatePropertyImageModel = /** Request body used to update an existing property image */
z.object({caption: /** The image caption */
z.string().optional(), type: /** The type of image (photograph/floorPlan/epc/map) */
z.string().optional()});
/** Request body used to update an existing property image */
export type UpdatePropertyImageModel = /** Request body used to update an existing property image */
{caption?: /** The image caption */
string | undefined, type?: /** The type of image (photograph/floorPlan/epc/map) */
string | undefined};