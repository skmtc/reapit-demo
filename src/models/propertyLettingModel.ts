import { z } from 'zod'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/models/propertyCommissionFeeModel.ts'
import { utilityModel, UtilityModel } from '@/models/utilityModel.ts'
import { propertyLettingsDepositModel, PropertyLettingsDepositModel } from '@/models/propertyLettingsDepositModel.ts'
import {
  propertyLettingRentInsuranceModel,
  PropertyLettingRentInsuranceModel,
} from '@/models/propertyLettingRentInsuranceModel.ts'
import { propertyLettingLicencingModel, PropertyLettingLicencingModel } from '@/models/propertyLettingLicencingModel.ts'

/** Representation of property details specific to lettings marketing */
export const propertyLettingModel = z.object({
  /** The date the property was marked as to let */ instructed: z.string().nullable().optional(),
  /** The date the property is next available from */ availableFrom: z.string().nullable().optional(),
  /** The date the property is available to */ availableTo: z.string().nullable().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().nullable().optional(),
  /** The rent being charged for the property */ rent: z.number().nullable().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** Details of any bills that are included in the rent */ rentIncludes: z.string().nullable().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The acceptable letting terms (short/long/any) */ term: z.string().nullable().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().nullable().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().nullable().optional(),
  /** The unique identifier of the landlord letting the property */ landlordId: z.string().nullable().optional(),
  /** A note to accompany any works orders created for the property */ worksOrderNote: z.string().nullable().optional(),
  /** The minimum number of months the property can be let out for */
  minimumTerm: z.number().int().nullable().optional(),
  /** The unique identifier of the negotiator that manages the property */
  propertyManagerId: z.string().nullable().optional(),
  /** The unique identifiers of the management companies associated to the property */
  managementCompanyIds: z.array(z.string()).nullable().optional(),
  /** The unique identifier of the document used for the lettings brochure */
  brochureId: z.string().nullable().optional(),
  /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  publicBrochureUrl: z.string().nullable().optional(),
  managementFee: propertyCommissionFeeModel.nullable().optional(),
  lettingFee: propertyCommissionFeeModel.nullable().optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().nullable().optional(),
  utilities: utilityModel.nullable().optional(),
  deposit: propertyLettingsDepositModel.nullable().optional(),
  rentInsurance: propertyLettingRentInsuranceModel.nullable().optional(),
  licencing: propertyLettingLicencingModel.nullable().optional(),
})
/** Representation of property details specific to lettings marketing */
export type PropertyLettingModel = {
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
  worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
  minimumTerm?: /** The minimum number of months the property can be let out for */ number | undefined
  propertyManagerId?: /** The unique identifier of the negotiator that manages the property */ string | undefined
  managementCompanyIds?: /** The unique identifiers of the management companies associated to the property */
  Array<string> | undefined
  brochureId?: /** The unique identifier of the document used for the lettings brochure */ string | undefined
  publicBrochureUrl?: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  string | undefined
  managementFee?: PropertyCommissionFeeModel | undefined
  lettingFee?: PropertyCommissionFeeModel | undefined
  qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
  utilities?: UtilityModel | undefined
  deposit?: PropertyLettingsDepositModel | undefined
  rentInsurance?: PropertyLettingRentInsuranceModel | undefined
  licencing?: PropertyLettingLicencingModel | undefined
}
