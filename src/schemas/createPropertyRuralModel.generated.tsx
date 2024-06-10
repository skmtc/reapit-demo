import { z } from 'zod'

/** Request body used to set details specific to rural properties */
export const createPropertyRuralModel =
  /** Request body used to set details specific to rural properties */
  z.object({
    /** Details of the buildings associated with the property. */
    buildingsDescription: z.string().optional().nullable(),
    /** Details of the land associated with the property. */ landDescription: z.string().optional().nullable(),
  })
/** Request body used to set details specific to rural properties */
export type CreatePropertyRuralModel =
  /** Request body used to set details specific to rural properties */
  {
    buildingsDescription?: /** Details of the buildings associated with the property. */ string | null | undefined
    landDescription?: /** Details of the land associated with the property. */ string | null | undefined
  }
