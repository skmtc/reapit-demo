import { PropertyTenureModel, propertyTenureModel } from '@/schemas/propertyTenureModel.generated.tsx'
import {
  PropertyCommissionFeeModel,
  propertyCommissionFeeModel,
} from '@/schemas/propertyCommissionFeeModel.generated.tsx'
import {
  PropertySharedOwnershipModel,
  propertySharedOwnershipModel,
} from '@/schemas/propertySharedOwnershipModel.generated.tsx'
import {
  PropertySubAgentTermsModel,
  propertySubAgentTermsModel,
} from '@/schemas/propertySubAgentTermsModel.generated.tsx'
import { z } from 'zod'

/** Representation of property details specific to sales marketing */
export type PropertySellingModel =
  /** Representation of property details specific to sales marketing */
  {
    instructed?: /** The date that the property was marked as for sale */ string | null | undefined
    price?: /** The marketing price of the property */ number | null | undefined
    priceTo?: /** The maximum price of a property on the development plot */ number | null | undefined
    reservationFee?:
      | /** The fee charged by the agent to reserve a property (typically a new build) */
      number
      | null
      | undefined
    qualifier?:
      | /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
      string
      | null
      | undefined
    status?:
      | /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
      string
      | null
      | undefined
    disposal?:
      | /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
      string
      | null
      | undefined
    completed?: /** The date the property sale was completed */ string | null | undefined
    exchanged?: /** The date the property was exchanged */ string | null | undefined
    accountPaid?: /** The date the property account was paid */ string | null | undefined
    tenure?: PropertyTenureModel | null | undefined
    vendorId?: /** The unique identifier of the vendor selling the property */ string | null | undefined
    agency?:
      | /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
      string
      | null
      | undefined
    agencyId?:
      | /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
      string
      | null
      | undefined
    agreementExpiry?:
      | /** The date on which the agreement between the vendor and agent expires */
      string
      | null
      | undefined
    fee?: PropertyCommissionFeeModel | null | undefined
    exchangedCompanyFee?:
      | /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
      number
      | null
      | undefined
    recommendedPrice?: /** The agent's recommended asking price */ number | null | undefined
    valuationPrice?: /** The agent's valuation price */ number | null | undefined
    brochureId?: /** The unique identifier of the document used for the sales brochure */ string | null | undefined
    publicBrochureUrl?:
      | /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
      string
      | null
      | undefined
    exchangedPrice?: /** The price the property exchanged/sold for */ number | null | undefined
    exchangedOfficeId?: /** The unique identifier of the office that sold the property */ string | null | undefined
    decoration?:
      | /** The property's decorative condition (unmodernised/fair/good/veryGood) */
      Array<string>
      | null
      | undefined
    sharedOwnership?: PropertySharedOwnershipModel | null | undefined
    subAgentTerms?: PropertySubAgentTermsModel | null | undefined
  }
/** Representation of property details specific to sales marketing */
export const propertySellingModel =
  /** Representation of property details specific to sales marketing */
  z.object({
    /** The date that the property was marked as for sale */ instructed: z.string().optional().nullable(),
    /** The marketing price of the property */ price: z.number().optional().nullable(),
    /** The maximum price of a property on the development plot */ priceTo: z.number().optional().nullable(),
    /** The fee charged by the agent to reserve a property (typically a new build) */
    reservationFee: z.number().int().optional().nullable(),
    /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
    qualifier: z.string().optional().nullable(),
    /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    status: z.string().optional().nullable(),
    /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
    disposal: z.string().optional().nullable(),
    /** The date the property sale was completed */ completed: z.string().optional().nullable(),
    /** The date the property was exchanged */ exchanged: z.string().optional().nullable(),
    /** The date the property account was paid */ accountPaid: z.string().optional().nullable(),
    tenure: propertyTenureModel.optional().nullable(),
    /** The unique identifier of the vendor selling the property */ vendorId: z.string().optional().nullable(),
    /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
    agency: z.string().optional().nullable(),
    /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
    agencyId: z.string().optional().nullable(),
    /** The date on which the agreement between the vendor and agent expires */
    agreementExpiry: z.string().optional().nullable(),
    fee: propertyCommissionFeeModel.optional().nullable(),
    /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
    exchangedCompanyFee: z.number().optional().nullable(),
    /** The agent's recommended asking price */ recommendedPrice: z.number().int().optional().nullable(),
    /** The agent's valuation price */ valuationPrice: z.number().int().optional().nullable(),
    /** The unique identifier of the document used for the sales brochure */
    brochureId: z.string().optional().nullable(),
    /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
    publicBrochureUrl: z.string().optional().nullable(),
    /** The price the property exchanged/sold for */ exchangedPrice: z.number().int().optional().nullable(),
    /** The unique identifier of the office that sold the property */
    exchangedOfficeId: z.string().optional().nullable(),
    /** The property's decorative condition (unmodernised/fair/good/veryGood) */
    decoration: z.array(z.string()).optional().nullable(),
    sharedOwnership: propertySharedOwnershipModel.optional().nullable(),
    subAgentTerms: propertySubAgentTermsModel.optional().nullable(),
  })
