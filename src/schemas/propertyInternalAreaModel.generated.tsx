import { z } from 'zod'

/** Representation of the internal dimensions of a property */
export type PropertyInternalAreaModel =
  /** Representation of the internal dimensions of a property */
  {
    type?: /** The unit of area (squareFeet/squareMetres) */ string | null | undefined
    min?: /** The minimum area bound */ number | null | undefined
    max?: /** The maximum area bound */ number | null | undefined
  }
/** Representation of the internal dimensions of a property */
export const propertyInternalAreaModel =
  /** Representation of the internal dimensions of a property */
  z.object({
    /** The unit of area (squareFeet/squareMetres) */ type: z.string().optional().nullable(),
    /** The minimum area bound */ min: z.number().optional().nullable(),
    /** The maximum area bound */ max: z.number().optional().nullable(),
  })
