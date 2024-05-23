import { z } from 'zod'

/** Request body to update the external land area of an existing property */
export const updatePropertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().nullable().optional(),
})
