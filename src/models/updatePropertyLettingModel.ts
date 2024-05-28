import { UpdatePropertyCommissionFeeModel } from '@/models/updatePropertyCommissionFeeModel.ts'
import { UpdateUtilityModel } from '@/models/updateUtilityModel.ts'
import { UpdatePropertyLettingsDepositModel } from '@/models/updatePropertyLettingsDepositModel.ts'
import { UpdatePropertyLettingRentInsuranceModel } from '@/models/updatePropertyLettingRentInsuranceModel.ts'
import { UpdatePropertyLettingLicencingModel } from '@/models/updatePropertyLettingLicencingModel.ts'

/** Request body used to update details specific to lettings marketing on an existing property */
export type UpdatePropertyLettingModel = {
  instructed?: /** The date the property was marked as to let */ string | undefined
  availableFrom?: /** The date the property is next available from */ string | undefined
  availableTo?: /** The date the property is available to */ string | undefined
  agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */ string | undefined
  rent?: /** The rent being charged for the property */ number | undefined
  rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */ string | undefined
  rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
  furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  Array<string> | undefined
  term?: /** The acceptable letting terms (short/long/any) */ string | undefined
  status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  string | undefined
  agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
  brochureId?: /** The unique identifier of the document used for the lettings brochure */ string | undefined
  worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
  minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | undefined
  managementFee?: UpdatePropertyCommissionFeeModel | undefined
  lettingFee?: UpdatePropertyCommissionFeeModel | undefined
  qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
  utilities?: UpdateUtilityModel | undefined
  deposit?: UpdatePropertyLettingsDepositModel | undefined
  rentInsurance?: UpdatePropertyLettingRentInsuranceModel | undefined
  licencing?: UpdatePropertyLettingLicencingModel | undefined
}
