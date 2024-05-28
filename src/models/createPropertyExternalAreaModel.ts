import { z } from 'zod'

/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().nullable().optional(),
})
/** Request body to set the external land area of a new property */
export type CreatePropertyExternalAreaModel = {
  type?: /** The unit of area (acres/hectares) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */ number | undefined
}
