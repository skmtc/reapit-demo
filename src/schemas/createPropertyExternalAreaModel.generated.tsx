import { z } from 'zod'

/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel =
  /** Request body to set the external land area of a new property */
  z.object({
    /** The unit of area (acres/hectares) */ type: z.string().optional(),
    /** The minimum area bound */ min: z.number().optional(),
    /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
    max: z.number().optional(),
  })
/** Request body to set the external land area of a new property */
export type CreatePropertyExternalAreaModel =
  /** Request body to set the external land area of a new property */
  {
    type?: /** The unit of area (acres/hectares) */ string | undefined
    min?: /** The minimum area bound */ number | undefined
    max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
    number | undefined
  }
