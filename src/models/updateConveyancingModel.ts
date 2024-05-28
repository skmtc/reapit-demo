/** Request body for updating sales progression information on an existing offer */
export type UpdateConveyancingModel = {
  vendorSolicitorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  string | undefined
  buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
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
  searchesReceived?: /** The date when conveyancing searches were received */ string | undefined
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
  additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place (yes/no/unknown) */
  string | undefined
  additionalSurveyDate?: /** The date of the additional survey */ string | undefined
  additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
  string | undefined
  exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */ string | undefined
  exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */ string | undefined
  completion?: /** The date when the sale completed */ string | undefined
  metadata?: /** App specific metadata to set against this conveyancing record */
  Record<string, Record<string, never>> | undefined
}
