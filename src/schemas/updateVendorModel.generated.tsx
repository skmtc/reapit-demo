import { z } from 'zod'
import { vendorUpdateSourceModel, VendorUpdateSourceModel } from '@/schemas/vendorUpdateSourceModel.generated.tsx'

/** Request body used to update an existing vendor */
export const updateVendorModel = /** Request body used to update an existing vendor */
z.object({lastCall: /** The date the vendor was last called */
z.string().optional(), nextCall: /** The date the vendor is next due to be called */
z.string().optional(), typeId: /** The unique identifier of the type of vendor */
z.string().optional(), sellingReasonId: /** The unique identifier of the reason the vendor is selling */
z.string().optional(), solicitorId: /** The unique identifier of the vendor's solicitor */
z.string().optional(), correspondenceAddressType: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
z.string().optional(), source: vendorUpdateSourceModel.optional(), metadata: /** App specific metadata that has been set against the vendor */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing vendor */
export type UpdateVendorModel = /** Request body used to update an existing vendor */
{lastCall?: /** The date the vendor was last called */
string | undefined, nextCall?: /** The date the vendor is next due to be called */
string | undefined, typeId?: /** The unique identifier of the type of vendor */
string | undefined, sellingReasonId?: /** The unique identifier of the reason the vendor is selling */
string | undefined, solicitorId?: /** The unique identifier of the vendor's solicitor */
string | undefined, correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
string | undefined, source?: VendorUpdateSourceModel | undefined, metadata?: /** App specific metadata that has been set against the vendor */
Record<string, Record<string, never>> | undefined};