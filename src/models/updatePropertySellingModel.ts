import { z } from 'zod'

/** Request body used to update details specific to sales marketing on an existing property */
export const updatePropertySellingModel = z.object({
  /** The date that the property was marked as for sale */ instructed: z.string().nullable().optional(),
  /** The marketing price of the property */ price: z.number().int().nullable().optional(),
  /** The fee charged by the agent to reserve a property (typically a new build) */
  reservationFee: z.number().int().nullable().optional(),
  /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  qualifier: z.string().nullable().optional(),
  /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  status: z.string().nullable().optional(),
  /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  disposal: z.string().nullable().optional(),
  /** The date the property sale was completed */ completed: z.string().nullable().optional(),
  /** The date the property was exchanged */ exchanged: z.string().nullable().optional(),
  /** The date the property account was paid */ accountPaid: z.string().nullable().optional(),
  /** Request body used to set the tenure of an existing property */
  tenure: z
    .object({
      /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
      type: z.string().nullable().optional(),
      /** The tenure expiration date */ expiry: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  sellingAgency: z.string().nullable().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  agencyId: z.string().nullable().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().nullable().optional(),
  /** Request body used to update the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The commission letting fee amount */ amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The agent's recommended asking price */ recommendedPrice: z.number().int().nullable().optional(),
  /** The agent's valuation price */ valuationPrice: z.number().int().nullable().optional(),
  /** The unique identifier of the document used for the sales brochure */ brochureId: z.string().nullable().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  /** Details relating to the shared ownership of the property */
  sharedOwnership: z
    .object({
      /** The percentage of the shared ownership property being sold by the vendor */
      sharedPercentage: z.number().nullable().optional(),
      /** The rent payable on the remainder of the shared ownership property */ rent: z.number().nullable().optional(),
      /** The frequency at which the shared ownership rent should be paid */
      rentFrequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})
