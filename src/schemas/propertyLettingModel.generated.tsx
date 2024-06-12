import {
  PropertyCommissionFeeModel,
  propertyCommissionFeeModel,
} from '@/schemas/propertyCommissionFeeModel.generated.tsx'
import { UtilityModel, utilityModel } from '@/schemas/utilityModel.generated.tsx'
import {
  PropertyLettingsDepositModel,
  propertyLettingsDepositModel,
} from '@/schemas/propertyLettingsDepositModel.generated.tsx'
import {
  PropertyLettingRentInsuranceModel,
  propertyLettingRentInsuranceModel,
} from '@/schemas/propertyLettingRentInsuranceModel.generated.tsx'
import {
  PropertyLettingLicencingModel,
  propertyLettingLicencingModel,
} from '@/schemas/propertyLettingLicencingModel.generated.tsx'
import { z } from 'zod'

/** Representation of property details specific to lettings marketing */
export type PropertyLettingModel =
  /** Representation of property details specific to lettings marketing */
  {
    instructed?: /** The date the property was marked as to let */ string | null | undefined
    availableFrom?: /** The date the property is next available from */ string | null | undefined
    availableTo?: /** The date the property is available to */ string | null | undefined
    agreementSigned?:
      | /** The date the letting agreement between the landlord and agent was signed */
      string
      | null
      | undefined
    rent?: /** The rent being charged for the property */ number | null | undefined
    rentFrequency?:
      | /** The frequency at which rent will be collected (weekly/monthly/annually) */
      string
      | null
      | undefined
    rentIncludes?: /** Details of any bills that are included in the rent */ string | null | undefined
    furnishing?:
      | /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
      Array<string>
      | null
      | undefined
    term?: /** The acceptable letting terms (short/long/any) */ string | null | undefined
    status?:
      | /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
      string
      | null
      | undefined
    agentRole?:
      | /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
      string
      | null
      | undefined
    landlordId?: /** The unique identifier of the landlord letting the property */ string | null | undefined
    worksOrderNote?: /** A note to accompany any works orders created for the property */ string | null | undefined
    minimumTerm?: /** The minimum number of months the property can be let out for */ number | null | undefined
    propertyManagerId?:
      | /** The unique identifier of the negotiator that manages the property */
      string
      | null
      | undefined
    managementCompanyIds?:
      | /** The unique identifiers of the management companies associated to the property */
      Array<string>
      | null
      | undefined
    brochureId?: /** The unique identifier of the document used for the lettings brochure */ string | null | undefined
    publicBrochureUrl?:
      | /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
      string
      | null
      | undefined
    managementFee?: PropertyCommissionFeeModel | null | undefined
    lettingFee?: PropertyCommissionFeeModel | null | undefined
    qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | null | undefined
    utilities?: UtilityModel | null | undefined
    deposit?: PropertyLettingsDepositModel | null | undefined
    rentInsurance?: PropertyLettingRentInsuranceModel | null | undefined
    licencing?: PropertyLettingLicencingModel | null | undefined
  }
/** Representation of property details specific to lettings marketing */
export const propertyLettingModel =
  /** Representation of property details specific to lettings marketing */
  z.object({
    /** The date the property was marked as to let */ instructed: z.string().optional().nullable(),
    /** The date the property is next available from */ availableFrom: z.string().optional().nullable(),
    /** The date the property is available to */ availableTo: z.string().optional().nullable(),
    /** The date the letting agreement between the landlord and agent was signed */
    agreementSigned: z.string().optional().nullable(),
    /** The rent being charged for the property */ rent: z.number().optional().nullable(),
    /** The frequency at which rent will be collected (weekly/monthly/annually) */
    rentFrequency: z.string().optional().nullable(),
    /** Details of any bills that are included in the rent */ rentIncludes: z.string().optional().nullable(),
    /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
    furnishing: z.array(z.string()).optional().nullable(),
    /** The acceptable letting terms (short/long/any) */ term: z.string().optional().nullable(),
    /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
    status: z.string().optional().nullable(),
    /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    agentRole: z.string().optional().nullable(),
    /** The unique identifier of the landlord letting the property */ landlordId: z.string().optional().nullable(),
    /** A note to accompany any works orders created for the property */
    worksOrderNote: z.string().optional().nullable(),
    /** The minimum number of months the property can be let out for */
    minimumTerm: z.number().int().optional().nullable(),
    /** The unique identifier of the negotiator that manages the property */
    propertyManagerId: z.string().optional().nullable(),
    /** The unique identifiers of the management companies associated to the property */
    managementCompanyIds: z.array(z.string()).optional().nullable(),
    /** The unique identifier of the document used for the lettings brochure */
    brochureId: z.string().optional().nullable(),
    /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
    publicBrochureUrl: z.string().optional().nullable(),
    managementFee: propertyCommissionFeeModel.optional().nullable(),
    lettingFee: propertyCommissionFeeModel.optional().nullable(),
    /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().optional().nullable(),
    utilities: utilityModel.optional().nullable(),
    deposit: propertyLettingsDepositModel.optional().nullable(),
    rentInsurance: propertyLettingRentInsuranceModel.optional().nullable(),
    licencing: propertyLettingLicencingModel.optional().nullable(),
  })
