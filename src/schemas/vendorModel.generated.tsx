import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { vendorSourceModel, VendorSourceModel } from '@/schemas/vendorSourceModel.generated.tsx'
import { vendorContactModel, VendorContactModel } from '@/schemas/vendorContactModel.generated.tsx'

/** Representation of a vendor */
export const vendorModel = /** Representation of a vendor */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the vendor */
z.string().optional(), created: /** The date and time when the vendor was created */
z.string().optional(), modified: /** The date and time when the vendor was last modified */
z.string().optional(), lastCall: /** The date the vendor was last called */
z.string().optional(), nextCall: /** The date the vendor is next due to be called */
z.string().optional(), typeId: /** The unique identifier of the type of vendor */
z.string().optional(), sellingReasonId: /** The unique identifier of the reason the vendor is selling */
z.string().optional(), solicitorId: /** The unique identifier of the solicitor associated to the vendor */
z.string().optional(), propertyId: /** The unique identifier of the property associated to the vendor */
z.string().optional(), source: vendorSourceModel.optional(), related: /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
z.array(vendorContactModel).optional(), correspondenceAddressType: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
z.string().optional(), officeIds: /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), archivedOn: /** The date and time the vendor was archived */
z.string().optional(), fromArchive: /** A flag determining whether or not the vendor is archived */
z.boolean().optional(), metadata: /** App specific metadata that has been set against the vendor */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the vendor. Used for managing update concurrency */
z.string().optional()});
/** Representation of a vendor */
export type VendorModel = /** Representation of a vendor */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the vendor */
string | undefined, created?: /** The date and time when the vendor was created */
string | undefined, modified?: /** The date and time when the vendor was last modified */
string | undefined, lastCall?: /** The date the vendor was last called */
string | undefined, nextCall?: /** The date the vendor is next due to be called */
string | undefined, typeId?: /** The unique identifier of the type of vendor */
string | undefined, sellingReasonId?: /** The unique identifier of the reason the vendor is selling */
string | undefined, solicitorId?: /** The unique identifier of the solicitor associated to the vendor */
string | undefined, propertyId?: /** The unique identifier of the property associated to the vendor */
string | undefined, source?: VendorSourceModel | undefined, related?: /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
Array<VendorContactModel> | undefined, correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
string | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
Array<string> | undefined, archivedOn?: /** The date and time the vendor was archived */
string | undefined, fromArchive?: /** A flag determining whether or not the vendor is archived */
boolean | undefined, metadata?: /** App specific metadata that has been set against the vendor */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the vendor. Used for managing update concurrency */
string | undefined};