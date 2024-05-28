import { z } from 'zod'

/** Representation of the tenure of a property */
export const propertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().nullable().optional(),
  /** The tenure expiration date */ expiry: z.string().nullable().optional(),
})
/** Representation of the tenure of a property */
export type PropertyTenureModel = {
  type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  string | undefined
  expiry?: /** The tenure expiration date */ string | undefined
}
