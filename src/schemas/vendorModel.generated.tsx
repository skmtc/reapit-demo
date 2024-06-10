import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { vendorSourceModel, VendorSourceModel } from '@/schemas/vendorSourceModel.generated.tsx'
import { vendorContactModel, VendorContactModel } from '@/schemas/vendorContactModel.generated.tsx'

/** Representation of a vendor */
export const vendorModel =
  /** Representation of a vendor */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the vendor */ id: z.string().optional().nullable(),
    /** The date and time when the vendor was created */ created: z.string().optional().nullable(),
    /** The date and time when the vendor was last modified */ modified: z.string().optional().nullable(),
    /** The date the vendor was last called */ lastCall: z.string().optional().nullable(),
    /** The date the vendor is next due to be called */ nextCall: z.string().optional().nullable(),
    /** The unique identifier of the type of vendor */ typeId: z.string().optional().nullable(),
    /** The unique identifier of the reason the vendor is selling */ sellingReasonId: z.string().optional().nullable(),
    /** The unique identifier of the solicitor associated to the vendor */
    solicitorId: z.string().optional().nullable(),
    /** The unique identifier of the property associated to the vendor */ propertyId: z.string().optional().nullable(),
    source: vendorSourceModel.optional().nullable(),
    /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
    related: z.array(vendorContactModel).optional().nullable(),
    /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
    correspondenceAddressType: z.string().optional().nullable(),
    /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
    negotiatorId: z.string().optional().nullable(),
    /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** The date and time the vendor was archived */ archivedOn: z.string().optional().nullable(),
    /** A flag determining whether or not the vendor is archived */ fromArchive: z.boolean().optional().nullable(),
    /** App specific metadata that has been set against the vendor */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the vendor. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
export type VendorModel =
  /** Representation of a vendor */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the vendor */ string | null | undefined
    created?: /** The date and time when the vendor was created */ string | null | undefined
    modified?: /** The date and time when the vendor was last modified */ string | null | undefined
    lastCall?: /** The date the vendor was last called */ string | null | undefined
    nextCall?: /** The date the vendor is next due to be called */ string | null | undefined
    typeId?: /** The unique identifier of the type of vendor */ string | null | undefined
    sellingReasonId?: /** The unique identifier of the reason the vendor is selling */ string | null | undefined
    solicitorId?: /** The unique identifier of the solicitor associated to the vendor */ string | null | undefined
    propertyId?: /** The unique identifier of the property associated to the vendor */ string | null | undefined
    source?: VendorSourceModel | null | undefined
    related?:
      | /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
      Array<VendorContactModel>
      | null
      | undefined
    correspondenceAddressType?:
      | /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
      string
      | null
      | undefined
    negotiatorId?:
      | /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
      string
      | null
      | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    archivedOn?: /** The date and time the vendor was archived */ string | null | undefined
    fromArchive?: /** A flag determining whether or not the vendor is archived */ boolean | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the vendor */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the vendor. Used for managing update concurrency */
      string
      | null
      | undefined
  }
