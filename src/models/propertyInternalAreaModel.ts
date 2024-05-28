import { z } from 'zod'

/** Representation of the internal dimensions of a property */
export const propertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound */ max: z.number().nullable().optional(),
})
/** Representation of the internal dimensions of a property */
export type PropertyInternalAreaModel = {
  type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound */ number | undefined
}
