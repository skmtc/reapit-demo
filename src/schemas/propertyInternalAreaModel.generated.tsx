import { z } from 'zod'

/** Representation of the internal dimensions of a property */
export const propertyInternalAreaModel =
  /** Representation of the internal dimensions of a property */
  z.object({
    /** The unit of area (squareFeet/squareMetres) */ type: z.string().optional(),
    /** The minimum area bound */ min: z.number().optional(),
    /** The maximum area bound */ max: z.number().optional(),
  })
/** Representation of the internal dimensions of a property */
export type PropertyInternalAreaModel =
  /** Representation of the internal dimensions of a property */
  {
    type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
    min?: /** The minimum area bound */ number | undefined
    max?: /** The maximum area bound */ number | undefined
  }
