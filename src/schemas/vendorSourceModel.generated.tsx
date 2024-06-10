import { z } from 'zod'

/** Representation of a vendor's source */
export const vendorSourceModel =
  /** Representation of a vendor's source */
  z.object({
    /** The unique identifier of the source of the vendor */ id: z.string().optional().nullable(),
    /** The source type (office/source) */ type: z.string().optional().nullable(),
  })
/** Representation of a vendor's source */
export type VendorSourceModel =
  /** Representation of a vendor's source */
  {
    id?: /** The unique identifier of the source of the vendor */ string | null | undefined
    type?: /** The source type (office/source) */ string | null | undefined
  }
