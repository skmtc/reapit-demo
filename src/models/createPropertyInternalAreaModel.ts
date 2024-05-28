import { z } from 'zod'

/** Request body to set the internal dimensions of a new property */
export const createPropertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound */ max: z.number().nullable().optional(),
})
/** Request body to set the internal dimensions of a new property */
export type CreatePropertyInternalAreaModel = {
  type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound */ number | undefined
}
