import { z } from 'zod'
import { propertyTenureModel, PropertyTenureModel } from '@/models/propertyTenureModel.ts'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/models/propertyCommissionFeeModel.ts'
import { propertySharedOwnershipModel, PropertySharedOwnershipModel } from '@/models/propertySharedOwnershipModel.ts'
import { propertySubAgentTermsModel, PropertySubAgentTermsModel } from '@/models/propertySubAgentTermsModel.ts'

/** Representation of property details specific to sales marketing */
export const propertySellingModel = z.object({
  /** The date that the property was marked as for sale */ instructed: z.string().nullable().optional(),
  /** The marketing price of the property */ price: z.number().nullable().optional(),
  /** The maximum price of a property on the development plot */ priceTo: z.number().nullable().optional(),
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
  tenure: propertyTenureModel.nullable().optional(),
  /** The unique identifier of the vendor selling the property */ vendorId: z.string().nullable().optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  agency: z.string().nullable().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
  agencyId: z.string().nullable().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().nullable().optional(),
  fee: propertyCommissionFeeModel.nullable().optional(),
  /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
  exchangedCompanyFee: z.number().nullable().optional(),
  /** The agent's recommended asking price */ recommendedPrice: z.number().int().nullable().optional(),
  /** The agent's valuation price */ valuationPrice: z.number().int().nullable().optional(),
  /** The unique identifier of the document used for the sales brochure */ brochureId: z.string().nullable().optional(),
  /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  publicBrochureUrl: z.string().nullable().optional(),
  /** The price the property exchanged/sold for */ exchangedPrice: z.number().int().nullable().optional(),
  /** The unique identifier of the office that sold the property */ exchangedOfficeId: z.string().nullable().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  sharedOwnership: propertySharedOwnershipModel.nullable().optional(),
  subAgentTerms: propertySubAgentTermsModel.nullable().optional(),
})
/** Representation of property details specific to sales marketing */
export type PropertySellingModel = {
  instructed?: /** The date that the property was marked as for sale */ string | undefined
  price?: /** The marketing price of the property */ number | undefined
  priceTo?: /** The maximum price of a property on the development plot */ number | undefined
  reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */ number | undefined
  qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  string | undefined
  status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  string | undefined
  completed?: /** The date the property sale was completed */ string | undefined
  exchanged?: /** The date the property was exchanged */ string | undefined
  accountPaid?: /** The date the property account was paid */ string | undefined
  tenure?: PropertyTenureModel | undefined
  vendorId?: /** The unique identifier of the vendor selling the property */ string | undefined
  agency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  string | undefined
  agencyId?: /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
  string | undefined
  agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */ string | undefined
  fee?: PropertyCommissionFeeModel | undefined
  exchangedCompanyFee?: /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
  number | undefined
  recommendedPrice?: /** The agent's recommended asking price */ number | undefined
  valuationPrice?: /** The agent's valuation price */ number | undefined
  brochureId?: /** The unique identifier of the document used for the sales brochure */ string | undefined
  publicBrochureUrl?: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  string | undefined
  exchangedPrice?: /** The price the property exchanged/sold for */ number | undefined
  exchangedOfficeId?: /** The unique identifier of the office that sold the property */ string | undefined
  decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */ Array<string> | undefined
  sharedOwnership?: PropertySharedOwnershipModel | undefined
  subAgentTerms?: PropertySubAgentTermsModel | undefined
}
