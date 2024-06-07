import { z } from 'zod'
import { propertyTenureModel, PropertyTenureModel } from '@/schemas/propertyTenureModel.generated.tsx'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/schemas/propertyCommissionFeeModel.generated.tsx'
import { propertySharedOwnershipModel, PropertySharedOwnershipModel } from '@/schemas/propertySharedOwnershipModel.generated.tsx'
import { propertySubAgentTermsModel, PropertySubAgentTermsModel } from '@/schemas/propertySubAgentTermsModel.generated.tsx'

/** Representation of property details specific to sales marketing */
export const propertySellingModel = /** Representation of property details specific to sales marketing */
z.object({instructed: /** The date that the property was marked as for sale */
z.string().optional(), price: /** The marketing price of the property */
z.number().optional(), priceTo: /** The maximum price of a property on the development plot */
z.number().optional(), reservationFee: /** The fee charged by the agent to reserve a property (typically a new build) */
z.number().int().optional(), qualifier: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
z.string().optional(), status: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
z.string().optional(), disposal: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
z.string().optional(), completed: /** The date the property sale was completed */
z.string().optional(), exchanged: /** The date the property was exchanged */
z.string().optional(), accountPaid: /** The date the property account was paid */
z.string().optional(), tenure: propertyTenureModel.optional(), vendorId: /** The unique identifier of the vendor selling the property */
z.string().optional(), agency: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
z.string().optional(), agencyId: /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
z.string().optional(), agreementExpiry: /** The date on which the agreement between the vendor and agent expires */
z.string().optional(), fee: propertyCommissionFeeModel.optional(), exchangedCompanyFee: /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
z.number().optional(), recommendedPrice: /** The agent's recommended asking price */
z.number().int().optional(), valuationPrice: /** The agent's valuation price */
z.number().int().optional(), brochureId: /** The unique identifier of the document used for the sales brochure */
z.string().optional(), publicBrochureUrl: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
z.string().optional(), exchangedPrice: /** The price the property exchanged/sold for */
z.number().int().optional(), exchangedOfficeId: /** The unique identifier of the office that sold the property */
z.string().optional(), decoration: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
z.array(z.string()).optional(), sharedOwnership: propertySharedOwnershipModel.optional(), subAgentTerms: propertySubAgentTermsModel.optional()});
/** Representation of property details specific to sales marketing */
export type PropertySellingModel = /** Representation of property details specific to sales marketing */
{instructed?: /** The date that the property was marked as for sale */
string | undefined, price?: /** The marketing price of the property */
number | undefined, priceTo?: /** The maximum price of a property on the development plot */
number | undefined, reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
number | undefined, qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
string | undefined, status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
string | undefined, disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
string | undefined, completed?: /** The date the property sale was completed */
string | undefined, exchanged?: /** The date the property was exchanged */
string | undefined, accountPaid?: /** The date the property account was paid */
string | undefined, tenure?: PropertyTenureModel | undefined, vendorId?: /** The unique identifier of the vendor selling the property */
string | undefined, agency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
string | undefined, agencyId?: /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
string | undefined, agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
string | undefined, fee?: PropertyCommissionFeeModel | undefined, exchangedCompanyFee?: /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
number | undefined, recommendedPrice?: /** The agent's recommended asking price */
number | undefined, valuationPrice?: /** The agent's valuation price */
number | undefined, brochureId?: /** The unique identifier of the document used for the sales brochure */
string | undefined, publicBrochureUrl?: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
string | undefined, exchangedPrice?: /** The price the property exchanged/sold for */
number | undefined, exchangedOfficeId?: /** The unique identifier of the office that sold the property */
string | undefined, decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
Array<string> | undefined, sharedOwnership?: PropertySharedOwnershipModel | undefined, subAgentTerms?: PropertySubAgentTermsModel | undefined};