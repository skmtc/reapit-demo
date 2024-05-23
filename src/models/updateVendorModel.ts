import { z } from 'zod'

/** Request body used to update an existing vendor */
export const updateVendorModel = z.object({
  /** The date the vendor was last called */ lastCall: z.string().nullable().optional(),
  /** The date the vendor is next due to be called */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the type of vendor */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the reason the vendor is selling */ sellingReasonId: z.string().nullable().optional(),
  /** The unique identifier of the vendor's solicitor */ solicitorId: z.string().nullable().optional(),
  /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
  correspondenceAddressType: z.string().nullable().optional(),
  /** Representation of a vendor's source */
  source: z
    .object({
      /** The unique identifier of the source of the vendor */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** App specific metadata that has been set against the vendor */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
