import { z } from 'zod'

/** Request body used to set details specific to rural properties. */
export const updatePropertyRuralModel = z.object({
  /** Details of the building associated with the property. */ buildingsDescription: z.string().nullable().optional(),
  /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
})
