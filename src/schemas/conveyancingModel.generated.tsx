import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { checkListItemModel, CheckListItemModel } from '@/schemas/checkListItemModel.generated.tsx'

/** Representation of an offers sales progression information */
export const conveyancingModel = /** Representation of an offers sales progression information */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the offer */
z.string().optional(), created: /** The date and time when the offer was created */
z.string().optional(), modified: /** The date and time when the offer was modified */
z.string().optional(), isExternal: /** Flag set to true if this offer is external */
z.boolean().optional(), propertyId: /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
z.string().optional(), propertyAddress: /** The address of the property that this offer is associated to */
z.string().optional(), vendor: /** The full name of the vendor of the property */
z.string().optional(), vendorId: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
z.string().optional(), vendorSolicitorId: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
z.string().optional(), buyer: /** The full name of the buyer who has submitted the offer */
z.string().optional(), buyerId: /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
z.string().optional(), buyerSolicitorId: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
z.string().optional(), externalAgent: /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
z.string().optional(), externalAgentId: /** The unique identifier of the agent company that holds the property instruction */
z.string().optional(), upwardChainId: /** The unique identifier of the offer that sits above this one in the chain (where known) */
z.string().optional(), downwardChainId: /** The unique identifier of the offer that sits below this one in the chain (where known) */
z.string().optional(), fixturesAndFittingsCompleted: /** The date when the fixtures and fittings form has been completed */
z.string().optional(), deedsRequested: /** The date when the title deeds were requested from land registry */
z.string().optional(), deedsReceived: /** The date when the title deeds were received from land registry */
z.string().optional(), enquiriesSent: /** The date when the legal enquiries raised by the buyers solicitor were sent */
z.string().optional(), enquiriesAnswered: /** The date when the legal enquiries raised by the buyers solicitor were answered */
z.string().optional(), searchesPaid: /** The date when the buyer paid for conveyancing searches */
z.string().optional(), searchesApplied: /** The date when conveyancing searches were applied for */
z.string().optional(), searchesReceived: /** The date when conveyancing searches were received for */
z.string().optional(), contractSent: /** The date when the draft contract was sent */
z.string().optional(), contractReceived: /** The date when the draft contract was received */
z.string().optional(), contractApproved: /** The date when the contract was approved */
z.string().optional(), contractVendorSigned: /** The date when the vendor signed the approved contract */
z.string().optional(), contractBuyerSigned: /** The date when the buyer signed the approved contract */
z.string().optional(), mortgageRequired: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
z.string().optional(), mortgageLoanPercentage: /** The loan to value percentage of the mortgage required */
z.number().int().optional(), mortgageSubmitted: /** The date when the mortgage application was submitted */
z.string().optional(), mortgageOfferReceived: /** The date when the mortgage offer was received */
z.string().optional(), mortgageLenderId: /** The unique identifier of the company who will provide the mortgage */
z.string().optional(), mortgageBrokerId: /** The unique identifier of the company who brokered the mortgage */
z.string().optional(), mortgageSurveyDate: /** The date of the mortgage valuation/survey */
z.string().optional(), mortgageSurveyorId: /** The unique identifier of the company who will perform the mortgage valuation/survey */
z.string().optional(), additionalSurveyRequired: /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
z.string().optional(), additionalSurveyDate: /** The date of the additional survey */
z.string().optional(), additionalSurveyorId: /** The unique identifier of the company who will perform the additional survey */
z.string().optional(), exchangedVendor: /** The date when the vendor conveyancer confirms the exchange */
z.string().optional(), exchangedBuyer: /** The date when the buyer conveyancer confirms the exchange */
z.string().optional(), completion: /** The date when the sale completed */
z.string().optional(), checkListItems: /** Check list items to be completed as part of the sales progression process */
z.array(checkListItemModel).optional(), _eTag: /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
z.string().optional(), metadata: /** App specific metadata that has been set against this conveyancing record */
z.record(z.string(), z.object({})).optional()});
/** Representation of an offers sales progression information */
export type ConveyancingModel = /** Representation of an offers sales progression information */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the offer */
string | undefined, created?: /** The date and time when the offer was created */
string | undefined, modified?: /** The date and time when the offer was modified */
string | undefined, isExternal?: /** Flag set to true if this offer is external */
boolean | undefined, propertyId?: /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
string | undefined, propertyAddress?: /** The address of the property that this offer is associated to */
string | undefined, vendor?: /** The full name of the vendor of the property */
string | undefined, vendorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
string | undefined, vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
string | undefined, buyer?: /** The full name of the buyer who has submitted the offer */
string | undefined, buyerId?: /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
string | undefined, buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
string | undefined, externalAgent?: /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
string | undefined, externalAgentId?: /** The unique identifier of the agent company that holds the property instruction */
string | undefined, upwardChainId?: /** The unique identifier of the offer that sits above this one in the chain (where known) */
string | undefined, downwardChainId?: /** The unique identifier of the offer that sits below this one in the chain (where known) */
string | undefined, fixturesAndFittingsCompleted?: /** The date when the fixtures and fittings form has been completed */
string | undefined, deedsRequested?: /** The date when the title deeds were requested from land registry */
string | undefined, deedsReceived?: /** The date when the title deeds were received from land registry */
string | undefined, enquiriesSent?: /** The date when the legal enquiries raised by the buyers solicitor were sent */
string | undefined, enquiriesAnswered?: /** The date when the legal enquiries raised by the buyers solicitor were answered */
string | undefined, searchesPaid?: /** The date when the buyer paid for conveyancing searches */
string | undefined, searchesApplied?: /** The date when conveyancing searches were applied for */
string | undefined, searchesReceived?: /** The date when conveyancing searches were received for */
string | undefined, contractSent?: /** The date when the draft contract was sent */
string | undefined, contractReceived?: /** The date when the draft contract was received */
string | undefined, contractApproved?: /** The date when the contract was approved */
string | undefined, contractVendorSigned?: /** The date when the vendor signed the approved contract */
string | undefined, contractBuyerSigned?: /** The date when the buyer signed the approved contract */
string | undefined, mortgageRequired?: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
string | undefined, mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */
number | undefined, mortgageSubmitted?: /** The date when the mortgage application was submitted */
string | undefined, mortgageOfferReceived?: /** The date when the mortgage offer was received */
string | undefined, mortgageLenderId?: /** The unique identifier of the company who will provide the mortgage */
string | undefined, mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */
string | undefined, mortgageSurveyDate?: /** The date of the mortgage valuation/survey */
string | undefined, mortgageSurveyorId?: /** The unique identifier of the company who will perform the mortgage valuation/survey */
string | undefined, additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
string | undefined, additionalSurveyDate?: /** The date of the additional survey */
string | undefined, additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
string | undefined, exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */
string | undefined, exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */
string | undefined, completion?: /** The date when the sale completed */
string | undefined, checkListItems?: /** Check list items to be completed as part of the sales progression process */
Array<CheckListItemModel> | undefined, _eTag?: /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
string | undefined, metadata?: /** App specific metadata that has been set against this conveyancing record */
Record<string, Record<string, never>> | undefined};