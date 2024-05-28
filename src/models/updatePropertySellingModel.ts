import { UpdatePropertyTenureModel } from '@/models/updatePropertyTenureModel.ts'
import { UpdatePropertyCommissionFeeModel } from '@/models/updatePropertyCommissionFeeModel.ts'
import { UpdatePropertySharedOwnershipModel } from '@/models/updatePropertySharedOwnershipModel.ts'

/** Request body used to update details specific to sales marketing on an existing property */
export type UpdatePropertySellingModel = {
  instructed?: /** The date that the property was marked as for sale */ string | undefined
  price?: /** The marketing price of the property */ number | undefined
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
  tenure?: UpdatePropertyTenureModel | undefined
  sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  string | undefined
  agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  string | undefined
  agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */ string | undefined
  fee?: UpdatePropertyCommissionFeeModel | undefined
  recommendedPrice?: /** The agent's recommended asking price */ number | undefined
  valuationPrice?: /** The agent's valuation price */ number | undefined
  brochureId?: /** The unique identifier of the document used for the sales brochure */ string | undefined
  decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */ Array<string> | undefined
  sharedOwnership?: UpdatePropertySharedOwnershipModel | undefined
}
