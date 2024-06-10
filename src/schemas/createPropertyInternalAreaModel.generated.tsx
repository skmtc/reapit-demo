import { z } from 'zod'

/** Request body to set the internal dimensions of a new property */
export const createPropertyInternalAreaModel =
  /** Request body to set the internal dimensions of a new property */
  z.object({
    /** The unit of area (squareFeet/squareMetres) */ type: z.string().optional().nullable(),
    /** The minimum area bound */ min: z.number().optional().nullable(),
    /** The maximum area bound */ max: z.number().optional().nullable(),
  })
/** Request body to set the internal dimensions of a new property */
export type CreatePropertyInternalAreaModel =
  /** Request body to set the internal dimensions of a new property */
  {
    type?: /** The unit of area (squareFeet/squareMetres) */ string | null | undefined
    min?: /** The minimum area bound */ number | null | undefined
    max?: /** The maximum area bound */ number | null | undefined
  }
