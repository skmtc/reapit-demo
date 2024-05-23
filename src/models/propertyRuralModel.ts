import { z } from 'zod'

/** Details specific to rural properties */
export const propertyRuralModel = z.object({
  /** Details of the rural tenure associated with the property. */ tenureId: z.string().nullable().optional(),
  /** Details of the buildings associated with the property. */ buildingsDescription: z.string().nullable().optional(),
  /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
})
