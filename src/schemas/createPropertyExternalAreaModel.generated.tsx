import { z } from 'zod'

/** Request body to set the external land area of a new property */
export type CreatePropertyExternalAreaModel =
  /** Request body to set the external land area of a new property */
  {
    type?: /** The unit of area (acres/hectares) */ string | null | undefined
    min?: /** The minimum area bound */ number | null | undefined
    max?:
      | /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
      number
      | null
      | undefined
  }
/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel =
  /** Request body to set the external land area of a new property */
  z.object({
    /** The unit of area (acres/hectares) */ type: z.string().optional().nullable(),
    /** The minimum area bound */ min: z.number().optional().nullable(),
    /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
    max: z.number().optional().nullable(),
  })
