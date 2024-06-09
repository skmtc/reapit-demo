import { z } from 'zod'
import { createPropertyTenureModel, CreatePropertyTenureModel } from '@/schemas/createPropertyTenureModel.generated.tsx'
import {
  createPropertyCommissionFeeModel,
  CreatePropertyCommissionFeeModel,
} from '@/schemas/createPropertyCommissionFeeModel.generated.tsx'
import {
  createPropertySharedOwnershipModel,
  CreatePropertySharedOwnershipModel,
} from '@/schemas/createPropertySharedOwnershipModel.generated.tsx'

/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export const createPropertySellingModel =
  /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
  z.object({
    /** The date that the property was marked as for sale */ instructed: z.string().optional(),
    /** The marketing price of the property */ price: z.number().int().optional(),
    /** The fee charged by the agent to reserve a property (typically a new build) */
    reservationFee: z.number().int().optional(),
    /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
    qualifier: z.string().optional(),
    /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    status: z.string().optional(),
    /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
    disposal: z.string().optional(),
    /** The date the property sale was completed */ completed: z.string().optional(),
    /** The date the property was exchanged */ exchanged: z.string().optional(),
    /** The date the property account was paid */ accountPaid: z.string().optional(),
    tenure: createPropertyTenureModel.optional(),
    /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
    sellingAgency: z.string().optional(),
    /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
    agencyId: z.string().optional(),
    /** The date on which the agreement between the vendor and agent expires */ agreementExpiry: z.string().optional(),
    fee: createPropertyCommissionFeeModel.optional(),
    /** The agent's recommended asking price */ recommendedPrice: z.number().int().optional(),
    /** The agent's valuation price */ valuationPrice: z.number().int().optional(),
    /** The property's decorative condition (unmodernised/fair/good/veryGood) */
    decoration: z.array(z.string()).optional(),
    sharedOwnership: createPropertySharedOwnershipModel.optional(),
  })
/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export type CreatePropertySellingModel =
  /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
  {
    instructed?: /** The date that the property was marked as for sale */ string | undefined
    price?: /** The marketing price of the property */ number | undefined
    reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
    number | undefined
    qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
    string | undefined
    status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    string | undefined
    disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
    string | undefined
    completed?: /** The date the property sale was completed */ string | undefined
    exchanged?: /** The date the property was exchanged */ string | undefined
    accountPaid?: /** The date the property account was paid */ string | undefined
    tenure?: CreatePropertyTenureModel | undefined
    sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
    string | undefined
    agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
    string | undefined
    agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */ string | undefined
    fee?: CreatePropertyCommissionFeeModel | undefined
    recommendedPrice?: /** The agent's recommended asking price */ number | undefined
    valuationPrice?: /** The agent's valuation price */ number | undefined
    decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */ Array<string> | undefined
    sharedOwnership?: CreatePropertySharedOwnershipModel | undefined
  }
