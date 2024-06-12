import { z } from 'zod'

/** Details specific to rural properties */
export type PropertyRuralModel =
  /** Details specific to rural properties */
  {
    tenureId?: /** Details of the rural tenure associated with the property. */ string | null | undefined
    buildingsDescription?: /** Details of the buildings associated with the property. */ string | null | undefined
    landDescription?: /** Details of the land associated with the property. */ string | null | undefined
  }
/** Details specific to rural properties */
export const propertyRuralModel =
  /** Details specific to rural properties */
  z.object({
    /** Details of the rural tenure associated with the property. */ tenureId: z.string().optional().nullable(),
    /** Details of the buildings associated with the property. */
    buildingsDescription: z.string().optional().nullable(),
    /** Details of the land associated with the property. */ landDescription: z.string().optional().nullable(),
  })
