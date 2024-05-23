import { z } from 'zod'

/** Request body for updating sales progression information on an existing offer */
export const updateConveyancingModel = z.object({
  /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  vendorSolicitorId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
  buyerSolicitorId: z.string().nullable().optional(),
  /** The date when the fixtures and fittings form has been completed */
  fixturesAndFittingsCompleted: z.string().nullable().optional(),
  /** The date when the title deeds were requested from land registry */
  deedsRequested: z.string().nullable().optional(),
  /** The date when the title deeds were received from land registry */ deedsReceived: z.string().nullable().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were sent */
  enquiriesSent: z.string().nullable().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were answered */
  enquiriesAnswered: z.string().nullable().optional(),
  /** The date when the buyer paid for conveyancing searches */ searchesPaid: z.string().nullable().optional(),
  /** The date when conveyancing searches were applied for */ searchesApplied: z.string().nullable().optional(),
  /** The date when conveyancing searches were received */ searchesReceived: z.string().nullable().optional(),
  /** The date when the draft contract was sent */ contractSent: z.string().nullable().optional(),
  /** The date when the draft contract was received */ contractReceived: z.string().nullable().optional(),
  /** The date when the contract was approved */ contractApproved: z.string().nullable().optional(),
  /** The date when the vendor signed the approved contract */ contractVendorSigned: z.string().nullable().optional(),
  /** The date when the buyer signed the approved contract */ contractBuyerSigned: z.string().nullable().optional(),
  /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
  mortgageRequired: z.string().nullable().optional(),
  /** The loan to value percentage of the mortgage required */
  mortgageLoanPercentage: z.number().int().nullable().optional(),
  /** The date when the mortgage application was submitted */ mortgageSubmitted: z.string().nullable().optional(),
  /** The date when the mortgage offer was received */ mortgageOfferReceived: z.string().nullable().optional(),
  /** The unique identifier of the company who will provide the mortgage */
  mortgageLenderId: z.string().nullable().optional(),
  /** The unique identifier of the company who brokered the mortgage */
  mortgageBrokerId: z.string().nullable().optional(),
  /** The date of the mortgage valuation/survey */ mortgageSurveyDate: z.string().nullable().optional(),
  /** The unique identifier of the company who will perform the mortgage valuation/survey */
  mortgageSurveyorId: z.string().nullable().optional(),
  /** Indication of whether the buyer requires that an additional survey take place (yes/no/unknown) */
  additionalSurveyRequired: z.string().nullable().optional(),
  /** The date of the additional survey */ additionalSurveyDate: z.string().nullable().optional(),
  /** The unique identifier of the company who will perform the additional survey */
  additionalSurveyorId: z.string().nullable().optional(),
  /** The date when the vendor conveyancer confirms the exchange */ exchangedVendor: z.string().nullable().optional(),
  /** The date when the buyer conveyancer confirms the exchange */ exchangedBuyer: z.string().nullable().optional(),
  /** The date when the sale completed */ completion: z.string().nullable().optional(),
  /** App specific metadata to set against this conveyancing record */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
