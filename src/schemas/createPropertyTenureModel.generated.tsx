import { z } from 'zod'

/** Request body used to set the tenure of a new property */
export const createPropertyTenureModel =
  /** Request body used to set the tenure of a new property */
  z.object({
    /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
    type: z.string().optional().nullable(),
    /** The tenure expiration date */ expiry: z.string().optional().nullable(),
  })
/** Request body used to set the tenure of a new property */
export type CreatePropertyTenureModel =
  /** Request body used to set the tenure of a new property */
  {
    type?:
      | /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
      string
      | null
      | undefined
    expiry?: /** The tenure expiration date */ string | null | undefined
  }
