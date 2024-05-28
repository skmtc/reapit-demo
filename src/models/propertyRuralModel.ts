import { z } from 'zod'

/** Details specific to rural properties */
export const propertyRuralModel = z.object({
  /** Details of the rural tenure associated with the property. */ tenureId: z.string().nullable().optional(),
  /** Details of the buildings associated with the property. */ buildingsDescription: z.string().nullable().optional(),
  /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
})
/** Details specific to rural properties */
export type PropertyRuralModel = {
  tenureId?: /** Details of the rural tenure associated with the property. */ string | undefined
  buildingsDescription?: /** Details of the buildings associated with the property. */ string | undefined
  landDescription?: /** Details of the land associated with the property. */ string | undefined
}
