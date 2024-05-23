import { z } from 'zod'

/** Request body used to set the tenure of a new property */
export const createPropertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().nullable().optional(),
  /** The tenure expiration date */ expiry: z.string().nullable().optional(),
})
