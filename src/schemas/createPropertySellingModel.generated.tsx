import { CreatePropertyTenureModel, createPropertyTenureModel } from '@/schemas/createPropertyTenureModel.generated.tsx'
import {
  CreatePropertyCommissionFeeModel,
  createPropertyCommissionFeeModel,
} from '@/schemas/createPropertyCommissionFeeModel.generated.tsx'
import {
  CreatePropertySharedOwnershipModel,
  createPropertySharedOwnershipModel,
} from '@/schemas/createPropertySharedOwnershipModel.generated.tsx'
import { z } from 'zod'

/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export type CreatePropertySellingModel =
  /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
  {
    instructed?: /** The date that the property was marked as for sale */ string | null | undefined
    price?: /** The marketing price of the property */ number | null | undefined
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
    tenure?: CreatePropertyTenureModel | null | undefined
    sellingAgency?:
      | /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
      string
      | null
      | undefined
    agencyId?:
      | /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
      string
      | null
      | undefined
    agreementExpiry?:
      | /** The date on which the agreement between the vendor and agent expires */
      string
      | null
      | undefined
    fee?: CreatePropertyCommissionFeeModel | null | undefined
    recommendedPrice?: /** The agent's recommended asking price */ number | null | undefined
    valuationPrice?: /** The agent's valuation price */ number | null | undefined
    decoration?:
      | /** The property's decorative condition (unmodernised/fair/good/veryGood) */
      Array<string>
      | null
      | undefined
    sharedOwnership?: CreatePropertySharedOwnershipModel | null | undefined
  }
/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export const createPropertySellingModel =
  /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
  z.object({
    /** The date that the property was marked as for sale */ instructed: z.string().optional().nullable(),
    /** The marketing price of the property */ price: z.number().int().optional().nullable(),
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
    tenure: createPropertyTenureModel.optional().nullable(),
    /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
    sellingAgency: z.string().optional().nullable(),
    /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
    agencyId: z.string().optional().nullable(),
    /** The date on which the agreement between the vendor and agent expires */
    agreementExpiry: z.string().optional().nullable(),
    fee: createPropertyCommissionFeeModel.optional().nullable(),
    /** The agent's recommended asking price */ recommendedPrice: z.number().int().optional().nullable(),
    /** The agent's valuation price */ valuationPrice: z.number().int().optional().nullable(),
    /** The property's decorative condition (unmodernised/fair/good/veryGood) */
    decoration: z.array(z.string()).optional().nullable(),
    sharedOwnership: createPropertySharedOwnershipModel.optional().nullable(),
  })
