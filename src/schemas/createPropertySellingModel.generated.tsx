import { z } from 'zod'
import { createPropertyTenureModel, CreatePropertyTenureModel } from '@/schemas/createPropertyTenureModel.generated.tsx'
import { createPropertyCommissionFeeModel, CreatePropertyCommissionFeeModel } from '@/schemas/createPropertyCommissionFeeModel.generated.tsx'
import { createPropertySharedOwnershipModel, CreatePropertySharedOwnershipModel } from '@/schemas/createPropertySharedOwnershipModel.generated.tsx'

/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export const createPropertySellingModel = /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
z.object({instructed: /** The date that the property was marked as for sale */
z.string().optional(), price: /** The marketing price of the property */
z.number().int().optional(), reservationFee: /** The fee charged by the agent to reserve a property (typically a new build) */
z.number().int().optional(), qualifier: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
z.string().optional(), status: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
z.string().optional(), disposal: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
z.string().optional(), completed: /** The date the property sale was completed */
z.string().optional(), exchanged: /** The date the property was exchanged */
z.string().optional(), accountPaid: /** The date the property account was paid */
z.string().optional(), tenure: createPropertyTenureModel.optional(), sellingAgency: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
z.string().optional(), agencyId: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
z.string().optional(), agreementExpiry: /** The date on which the agreement between the vendor and agent expires */
z.string().optional(), fee: createPropertyCommissionFeeModel.optional(), recommendedPrice: /** The agent's recommended asking price */
z.number().int().optional(), valuationPrice: /** The agent's valuation price */
z.number().int().optional(), decoration: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
z.array(z.string()).optional(), sharedOwnership: createPropertySharedOwnershipModel.optional()});
/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export type CreatePropertySellingModel = /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
{instructed?: /** The date that the property was marked as for sale */
string | undefined, price?: /** The marketing price of the property */
number | undefined, reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
number | undefined, qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
string | undefined, status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
string | undefined, disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
string | undefined, completed?: /** The date the property sale was completed */
string | undefined, exchanged?: /** The date the property was exchanged */
string | undefined, accountPaid?: /** The date the property account was paid */
string | undefined, tenure?: CreatePropertyTenureModel | undefined, sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
string | undefined, agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
string | undefined, agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
string | undefined, fee?: CreatePropertyCommissionFeeModel | undefined, recommendedPrice?: /** The agent's recommended asking price */
number | undefined, valuationPrice?: /** The agent's valuation price */
number | undefined, decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
Array<string> | undefined, sharedOwnership?: CreatePropertySharedOwnershipModel | undefined};