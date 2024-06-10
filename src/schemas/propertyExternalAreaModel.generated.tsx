import { z } from 'zod'

/** Representation of the external land area of a property */
export const propertyExternalAreaModel =
  /** Representation of the external land area of a property */
  z.object({
    /** The unit of area (acres/hectares) */ type: z.string().optional().nullable(),
    /** The minimum area bound */ min: z.number().optional().nullable(),
    /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
    max: z.number().optional().nullable(),
  })
/** Representation of the external land area of a property */
export type PropertyExternalAreaModel =
  /** Representation of the external land area of a property */
  {
    type?: /** The unit of area (acres/hectares) */ string | null | undefined
    min?: /** The minimum area bound */ number | null | undefined
    max?:
      | /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
      number
      | null
      | undefined
  }
