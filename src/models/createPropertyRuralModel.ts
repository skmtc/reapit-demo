import { z } from 'zod'

/** Request body used to set details specific to rural properties */
export const createPropertyRuralModel = z.object({
  /** Details of the buildings associated with the property. */ buildingsDescription: z.string().nullable().optional(),
  /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
})
/** Request body used to set details specific to rural properties */
export type CreatePropertyRuralModel = {
  buildingsDescription?: /** Details of the buildings associated with the property. */ string | undefined
  landDescription?: /** Details of the land associated with the property. */ string | undefined
}
