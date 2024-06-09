import { z } from 'zod'

/** Representation of the tenure of a property */
export const propertyTenureModel =
  /** Representation of the tenure of a property */
  z.object({
    /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
    type: z.string().optional(),
    /** The tenure expiration date */ expiry: z.string().optional(),
  })
/** Representation of the tenure of a property */
export type PropertyTenureModel =
  /** Representation of the tenure of a property */
  {
    type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
    string | undefined
    expiry?: /** The tenure expiration date */ string | undefined
  }
