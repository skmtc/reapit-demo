import { z } from 'zod'

/** Representation of a vendor's source */
export const vendorSourceModel = z.object({
  /** The unique identifier of the source of the vendor */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Representation of a vendor's source */
export type VendorSourceModel = {
  id?: /** The unique identifier of the source of the vendor */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
