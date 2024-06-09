import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { checkListItemModel, CheckListItemModel } from '@/schemas/checkListItemModel.generated.tsx'

/** Representation of an offers sales progression information */
export const conveyancingModel =
  /** Representation of an offers sales progression information */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the offer */ id: z.string().optional(),
    /** The date and time when the offer was created */ created: z.string().optional(),
    /** The date and time when the offer was modified */ modified: z.string().optional(),
    /** Flag set to true if this offer is external */ isExternal: z.boolean().optional(),
    /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    propertyId: z.string().optional(),
    /** The address of the property that this offer is associated to */ propertyAddress: z.string().optional(),
    /** The full name of the vendor of the property */ vendor: z.string().optional(),
    /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    vendorId: z.string().optional(),
    /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
    vendorSolicitorId: z.string().optional(),
    /** The full name of the buyer who has submitted the offer */ buyer: z.string().optional(),
    /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
    buyerId: z.string().optional(),
    /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
    buyerSolicitorId: z.string().optional(),
    /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
    externalAgent: z.string().optional(),
    /** The unique identifier of the agent company that holds the property instruction */
    externalAgentId: z.string().optional(),
    /** The unique identifier of the offer that sits above this one in the chain (where known) */
    upwardChainId: z.string().optional(),
    /** The unique identifier of the offer that sits below this one in the chain (where known) */
    downwardChainId: z.string().optional(),
    /** The date when the fixtures and fittings form has been completed */
    fixturesAndFittingsCompleted: z.string().optional(),
    /** The date when the title deeds were requested from land registry */ deedsRequested: z.string().optional(),
    /** The date when the title deeds were received from land registry */ deedsReceived: z.string().optional(),
    /** The date when the legal enquiries raised by the buyers solicitor were sent */
    enquiriesSent: z.string().optional(),
    /** The date when the legal enquiries raised by the buyers solicitor were answered */
    enquiriesAnswered: z.string().optional(),
    /** The date when the buyer paid for conveyancing searches */ searchesPaid: z.string().optional(),
    /** The date when conveyancing searches were applied for */ searchesApplied: z.string().optional(),
    /** The date when conveyancing searches were received for */ searchesReceived: z.string().optional(),
    /** The date when the draft contract was sent */ contractSent: z.string().optional(),
    /** The date when the draft contract was received */ contractReceived: z.string().optional(),
    /** The date when the contract was approved */ contractApproved: z.string().optional(),
    /** The date when the vendor signed the approved contract */ contractVendorSigned: z.string().optional(),
    /** The date when the buyer signed the approved contract */ contractBuyerSigned: z.string().optional(),
    /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
    mortgageRequired: z.string().optional(),
    /** The loan to value percentage of the mortgage required */ mortgageLoanPercentage: z.number().int().optional(),
    /** The date when the mortgage application was submitted */ mortgageSubmitted: z.string().optional(),
    /** The date when the mortgage offer was received */ mortgageOfferReceived: z.string().optional(),
    /** The unique identifier of the company who will provide the mortgage */ mortgageLenderId: z.string().optional(),
    /** The unique identifier of the company who brokered the mortgage */ mortgageBrokerId: z.string().optional(),
    /** The date of the mortgage valuation/survey */ mortgageSurveyDate: z.string().optional(),
    /** The unique identifier of the company who will perform the mortgage valuation/survey */
    mortgageSurveyorId: z.string().optional(),
    /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
    additionalSurveyRequired: z.string().optional(),
    /** The date of the additional survey */ additionalSurveyDate: z.string().optional(),
    /** The unique identifier of the company who will perform the additional survey */
    additionalSurveyorId: z.string().optional(),
    /** The date when the vendor conveyancer confirms the exchange */ exchangedVendor: z.string().optional(),
    /** The date when the buyer conveyancer confirms the exchange */ exchangedBuyer: z.string().optional(),
    /** The date when the sale completed */ completion: z.string().optional(),
    /** Check list items to be completed as part of the sales progression process */
    checkListItems: z.array(checkListItemModel).optional(),
    /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
    _eTag: z.string().optional(),
    /** App specific metadata that has been set against this conveyancing record */
    metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Representation of an offers sales progression information */
export type ConveyancingModel =
  /** Representation of an offers sales progression information */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the offer */ string | undefined
    created?: /** The date and time when the offer was created */ string | undefined
    modified?: /** The date and time when the offer was modified */ string | undefined
    isExternal?: /** Flag set to true if this offer is external */ boolean | undefined
    propertyId?: /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    string | undefined
    propertyAddress?: /** The address of the property that this offer is associated to */ string | undefined
    vendor?: /** The full name of the vendor of the property */ string | undefined
    vendorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    string | undefined
    vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
    string | undefined
    buyer?: /** The full name of the buyer who has submitted the offer */ string | undefined
    buyerId?: /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
    string | undefined
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
    string | undefined
    externalAgent?: /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
    string | undefined
    externalAgentId?: /** The unique identifier of the agent company that holds the property instruction */
    string | undefined
    upwardChainId?: /** The unique identifier of the offer that sits above this one in the chain (where known) */
    string | undefined
    downwardChainId?: /** The unique identifier of the offer that sits below this one in the chain (where known) */
    string | undefined
    fixturesAndFittingsCompleted?: /** The date when the fixtures and fittings form has been completed */
    string | undefined
    deedsRequested?: /** The date when the title deeds were requested from land registry */ string | undefined
    deedsReceived?: /** The date when the title deeds were received from land registry */ string | undefined
    enquiriesSent?: /** The date when the legal enquiries raised by the buyers solicitor were sent */ string | undefined
    enquiriesAnswered?: /** The date when the legal enquiries raised by the buyers solicitor were answered */
    string | undefined
    searchesPaid?: /** The date when the buyer paid for conveyancing searches */ string | undefined
    searchesApplied?: /** The date when conveyancing searches were applied for */ string | undefined
    searchesReceived?: /** The date when conveyancing searches were received for */ string | undefined
    contractSent?: /** The date when the draft contract was sent */ string | undefined
    contractReceived?: /** The date when the draft contract was received */ string | undefined
    contractApproved?: /** The date when the contract was approved */ string | undefined
    contractVendorSigned?: /** The date when the vendor signed the approved contract */ string | undefined
    contractBuyerSigned?: /** The date when the buyer signed the approved contract */ string | undefined
    mortgageRequired?: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
    string | undefined
    mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */ number | undefined
    mortgageSubmitted?: /** The date when the mortgage application was submitted */ string | undefined
    mortgageOfferReceived?: /** The date when the mortgage offer was received */ string | undefined
    mortgageLenderId?: /** The unique identifier of the company who will provide the mortgage */ string | undefined
    mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */ string | undefined
    mortgageSurveyDate?: /** The date of the mortgage valuation/survey */ string | undefined
    mortgageSurveyorId?: /** The unique identifier of the company who will perform the mortgage valuation/survey */
    string | undefined
    additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
    string | undefined
    additionalSurveyDate?: /** The date of the additional survey */ string | undefined
    additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
    string | undefined
    exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */ string | undefined
    exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */ string | undefined
    completion?: /** The date when the sale completed */ string | undefined
    checkListItems?: /** Check list items to be completed as part of the sales progression process */
    Array<CheckListItemModel> | undefined
    _eTag?: /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
    string | undefined
    metadata?: /** App specific metadata that has been set against this conveyancing record */
    Record<string, Record<string, never>> | undefined
  }
