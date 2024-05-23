import { z } from 'zod'

/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().nullable().optional(),
})
