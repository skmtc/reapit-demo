import { VendorUpdateSourceModel } from '@/models/vendorUpdateSourceModel.ts'

/** Request body used to update an existing vendor */
export type UpdateVendorModel = {
  lastCall?: /** The date the vendor was last called */ string | undefined
  nextCall?: /** The date the vendor is next due to be called */ string | undefined
  typeId?: /** The unique identifier of the type of vendor */ string | undefined
  sellingReasonId?: /** The unique identifier of the reason the vendor is selling */ string | undefined
  solicitorId?: /** The unique identifier of the vendor's solicitor */ string | undefined
  correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
  string | undefined
  source?: VendorUpdateSourceModel | undefined
  metadata?: /** App specific metadata that has been set against the vendor */
  Record<string, Record<string, never>> | undefined
}
