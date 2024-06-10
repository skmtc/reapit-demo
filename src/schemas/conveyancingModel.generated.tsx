import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { checkListItemModel, CheckListItemModel } from '@/schemas/checkListItemModel.generated.tsx'

/** Representation of an offers sales progression information */
export const conveyancingModel =
  /** Representation of an offers sales progression information */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the offer */ id: z.string().optional().nullable(),
    /** The date and time when the offer was created */ created: z.string().optional().nullable(),
    /** The date and time when the offer was modified */ modified: z.string().optional().nullable(),
    /** Flag set to true if this offer is external */ isExternal: z.boolean().optional().nullable(),
    /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    propertyId: z.string().optional().nullable(),
    /** The address of the property that this offer is associated to */
    propertyAddress: z.string().optional().nullable(),
    /** The full name of the vendor of the property */ vendor: z.string().optional().nullable(),
    /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    vendorId: z.string().optional().nullable(),
    /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
    vendorSolicitorId: z.string().optional().nullable(),
    /** The full name of the buyer who has submitted the offer */ buyer: z.string().optional().nullable(),
    /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
    buyerId: z.string().optional().nullable(),
    /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
    buyerSolicitorId: z.string().optional().nullable(),
    /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
    externalAgent: z.string().optional().nullable(),
    /** The unique identifier of the agent company that holds the property instruction */
    externalAgentId: z.string().optional().nullable(),
    /** The unique identifier of the offer that sits above this one in the chain (where known) */
    upwardChainId: z.string().optional().nullable(),
    /** The unique identifier of the offer that sits below this one in the chain (where known) */
    downwardChainId: z.string().optional().nullable(),
    /** The date when the fixtures and fittings form has been completed */
    fixturesAndFittingsCompleted: z.string().optional().nullable(),
    /** The date when the title deeds were requested from land registry */
    deedsRequested: z.string().optional().nullable(),
    /** The date when the title deeds were received from land registry */
    deedsReceived: z.string().optional().nullable(),
    /** The date when the legal enquiries raised by the buyers solicitor were sent */
    enquiriesSent: z.string().optional().nullable(),
    /** The date when the legal enquiries raised by the buyers solicitor were answered */
    enquiriesAnswered: z.string().optional().nullable(),
    /** The date when the buyer paid for conveyancing searches */ searchesPaid: z.string().optional().nullable(),
    /** The date when conveyancing searches were applied for */ searchesApplied: z.string().optional().nullable(),
    /** The date when conveyancing searches were received for */ searchesReceived: z.string().optional().nullable(),
    /** The date when the draft contract was sent */ contractSent: z.string().optional().nullable(),
    /** The date when the draft contract was received */ contractReceived: z.string().optional().nullable(),
    /** The date when the contract was approved */ contractApproved: z.string().optional().nullable(),
    /** The date when the vendor signed the approved contract */ contractVendorSigned: z.string().optional().nullable(),
    /** The date when the buyer signed the approved contract */ contractBuyerSigned: z.string().optional().nullable(),
    /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
    mortgageRequired: z.string().optional().nullable(),
    /** The loan to value percentage of the mortgage required */
    mortgageLoanPercentage: z.number().int().optional().nullable(),
    /** The date when the mortgage application was submitted */ mortgageSubmitted: z.string().optional().nullable(),
    /** The date when the mortgage offer was received */ mortgageOfferReceived: z.string().optional().nullable(),
    /** The unique identifier of the company who will provide the mortgage */
    mortgageLenderId: z.string().optional().nullable(),
    /** The unique identifier of the company who brokered the mortgage */
    mortgageBrokerId: z.string().optional().nullable(),
    /** The date of the mortgage valuation/survey */ mortgageSurveyDate: z.string().optional().nullable(),
    /** The unique identifier of the company who will perform the mortgage valuation/survey */
    mortgageSurveyorId: z.string().optional().nullable(),
    /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
    additionalSurveyRequired: z.string().optional().nullable(),
    /** The date of the additional survey */ additionalSurveyDate: z.string().optional().nullable(),
    /** The unique identifier of the company who will perform the additional survey */
    additionalSurveyorId: z.string().optional().nullable(),
    /** The date when the vendor conveyancer confirms the exchange */ exchangedVendor: z.string().optional().nullable(),
    /** The date when the buyer conveyancer confirms the exchange */ exchangedBuyer: z.string().optional().nullable(),
    /** The date when the sale completed */ completion: z.string().optional().nullable(),
    /** Check list items to be completed as part of the sales progression process */
    checkListItems: z.array(checkListItemModel).optional().nullable(),
    /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
    /** App specific metadata that has been set against this conveyancing record */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
export type ConveyancingModel =
  /** Representation of an offers sales progression information */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the offer */ string | null | undefined
    created?: /** The date and time when the offer was created */ string | null | undefined
    modified?: /** The date and time when the offer was modified */ string | null | undefined
    isExternal?: /** Flag set to true if this offer is external */ boolean | null | undefined
    propertyId?:
      | /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
      string
      | null
      | undefined
    propertyAddress?: /** The address of the property that this offer is associated to */ string | null | undefined
    vendor?: /** The full name of the vendor of the property */ string | null | undefined
    vendorId?:
      | /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
      string
      | null
      | undefined
    vendorSolicitorId?:
      | /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
      string
      | null
      | undefined
    buyer?: /** The full name of the buyer who has submitted the offer */ string | null | undefined
    buyerId?:
      | /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
      string
      | null
      | undefined
    buyerSolicitorId?:
      | /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
      string
      | null
      | undefined
    externalAgent?:
      | /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
      string
      | null
      | undefined
    externalAgentId?:
      | /** The unique identifier of the agent company that holds the property instruction */
      string
      | null
      | undefined
    upwardChainId?:
      | /** The unique identifier of the offer that sits above this one in the chain (where known) */
      string
      | null
      | undefined
    downwardChainId?:
      | /** The unique identifier of the offer that sits below this one in the chain (where known) */
      string
      | null
      | undefined
    fixturesAndFittingsCompleted?:
      | /** The date when the fixtures and fittings form has been completed */
      string
      | null
      | undefined
    deedsRequested?: /** The date when the title deeds were requested from land registry */ string | null | undefined
    deedsReceived?: /** The date when the title deeds were received from land registry */ string | null | undefined
    enquiriesSent?:
      | /** The date when the legal enquiries raised by the buyers solicitor were sent */
      string
      | null
      | undefined
    enquiriesAnswered?:
      | /** The date when the legal enquiries raised by the buyers solicitor were answered */
      string
      | null
      | undefined
    searchesPaid?: /** The date when the buyer paid for conveyancing searches */ string | null | undefined
    searchesApplied?: /** The date when conveyancing searches were applied for */ string | null | undefined
    searchesReceived?: /** The date when conveyancing searches were received for */ string | null | undefined
    contractSent?: /** The date when the draft contract was sent */ string | null | undefined
    contractReceived?: /** The date when the draft contract was received */ string | null | undefined
    contractApproved?: /** The date when the contract was approved */ string | null | undefined
    contractVendorSigned?: /** The date when the vendor signed the approved contract */ string | null | undefined
    contractBuyerSigned?: /** The date when the buyer signed the approved contract */ string | null | undefined
    mortgageRequired?:
      | /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
      string
      | null
      | undefined
    mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */ number | null | undefined
    mortgageSubmitted?: /** The date when the mortgage application was submitted */ string | null | undefined
    mortgageOfferReceived?: /** The date when the mortgage offer was received */ string | null | undefined
    mortgageLenderId?:
      | /** The unique identifier of the company who will provide the mortgage */
      string
      | null
      | undefined
    mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */ string | null | undefined
    mortgageSurveyDate?: /** The date of the mortgage valuation/survey */ string | null | undefined
    mortgageSurveyorId?:
      | /** The unique identifier of the company who will perform the mortgage valuation/survey */
      string
      | null
      | undefined
    additionalSurveyRequired?:
      | /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
      string
      | null
      | undefined
    additionalSurveyDate?: /** The date of the additional survey */ string | null | undefined
    additionalSurveyorId?:
      | /** The unique identifier of the company who will perform the additional survey */
      string
      | null
      | undefined
    exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */ string | null | undefined
    exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */ string | null | undefined
    completion?: /** The date when the sale completed */ string | null | undefined
    checkListItems?:
      | /** Check list items to be completed as part of the sales progression process */
      Array<CheckListItemModel>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
      string
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against this conveyancing record */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
