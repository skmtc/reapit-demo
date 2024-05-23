import { z } from 'zod'

export const conveyancingModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an offers sales progression information */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the offer */ id: z.string().nullable().optional(),
        /** The date and time when the offer was created */ created: z.string().nullable().optional(),
        /** The date and time when the offer was modified */ modified: z.string().nullable().optional(),
        /** Flag set to true if this offer is external */ isExternal: z.boolean().nullable().optional(),
        /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
        propertyId: z.string().nullable().optional(),
        /** The address of the property that this offer is associated to */
        propertyAddress: z.string().nullable().optional(),
        /** The full name of the vendor of the property */ vendor: z.string().nullable().optional(),
        /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
        vendorId: z.string().nullable().optional(),
        /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
        vendorSolicitorId: z.string().nullable().optional(),
        /** The full name of the buyer who has submitted the offer */ buyer: z.string().nullable().optional(),
        /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
        buyerId: z.string().nullable().optional(),
        /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
        buyerSolicitorId: z.string().nullable().optional(),
        /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
        externalAgent: z.string().nullable().optional(),
        /** The unique identifier of the agent company that holds the property instruction */
        externalAgentId: z.string().nullable().optional(),
        /** The unique identifier of the offer that sits above this one in the chain (where known) */
        upwardChainId: z.string().nullable().optional(),
        /** The unique identifier of the offer that sits below this one in the chain (where known) */
        downwardChainId: z.string().nullable().optional(),
        /** The date when the fixtures and fittings form has been completed */
        fixturesAndFittingsCompleted: z.string().nullable().optional(),
        /** The date when the title deeds were requested from land registry */
        deedsRequested: z.string().nullable().optional(),
        /** The date when the title deeds were received from land registry */
        deedsReceived: z.string().nullable().optional(),
        /** The date when the legal enquiries raised by the buyers solicitor were sent */
        enquiriesSent: z.string().nullable().optional(),
        /** The date when the legal enquiries raised by the buyers solicitor were answered */
        enquiriesAnswered: z.string().nullable().optional(),
        /** The date when the buyer paid for conveyancing searches */ searchesPaid: z.string().nullable().optional(),
        /** The date when conveyancing searches were applied for */ searchesApplied: z.string().nullable().optional(),
        /** The date when conveyancing searches were received for */ searchesReceived: z.string().nullable().optional(),
        /** The date when the draft contract was sent */ contractSent: z.string().nullable().optional(),
        /** The date when the draft contract was received */ contractReceived: z.string().nullable().optional(),
        /** The date when the contract was approved */ contractApproved: z.string().nullable().optional(),
        /** The date when the vendor signed the approved contract */
        contractVendorSigned: z.string().nullable().optional(),
        /** The date when the buyer signed the approved contract */
        contractBuyerSigned: z.string().nullable().optional(),
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
        /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
        additionalSurveyRequired: z.string().nullable().optional(),
        /** The date of the additional survey */ additionalSurveyDate: z.string().nullable().optional(),
        /** The unique identifier of the company who will perform the additional survey */
        additionalSurveyorId: z.string().nullable().optional(),
        /** The date when the vendor conveyancer confirms the exchange */
        exchangedVendor: z.string().nullable().optional(),
        /** The date when the buyer conveyancer confirms the exchange */
        exchangedBuyer: z.string().nullable().optional(),
        /** The date when the sale completed */ completion: z.string().nullable().optional(),
        /** Check list items to be completed as part of the sales progression process */
        checkListItems: z
          .array(
            /** Representation of a check list item */
            z.object({
              /** The name of the check list item */ name: z.string().nullable().optional(),
              /** A flag to determine if the item is completed */ completed: z.boolean().nullable().optional(),
              /** The date when the item was completed */ completedDate: z.string().nullable().optional(),
            }),
          )
          .nullable()
          .optional(),
        /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
        /** App specific metadata that has been set against this conveyancing record */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
