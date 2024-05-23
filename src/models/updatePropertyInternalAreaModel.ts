import { z } from 'zod'

/** Request body to update the internal dimensions of an existing property */
export const updatePropertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound */ max: z.number().nullable().optional(),
})
