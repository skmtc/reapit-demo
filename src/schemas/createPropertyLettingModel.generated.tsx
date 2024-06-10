import { z } from 'zod'
import {
  createPropertyCommissionFeeModel,
  CreatePropertyCommissionFeeModel,
} from '@/schemas/createPropertyCommissionFeeModel.generated.tsx'
import { createUtilityModel, CreateUtilityModel } from '@/schemas/createUtilityModel.generated.tsx'
import {
  createPropertyLettingsDepositModel,
  CreatePropertyLettingsDepositModel,
} from '@/schemas/createPropertyLettingsDepositModel.generated.tsx'

/** Request body used to set details specific to lettings marketing on a new property */
export const createPropertyLettingModel =
  /** Request body used to set details specific to lettings marketing on a new property */
  z.object({
    /** The date the property was marked as to let */ instructed: z.string().optional().nullable(),
    /** The date the property is available from */ availableFrom: z.string().optional().nullable(),
    /** The date the property is available to */ availableTo: z.string().optional().nullable(),
    /** The date the letting agreement between the landlord and agent was signed */
    agreementSigned: z.string().optional().nullable(),
    /** The rent being charged for the property */ rent: z.number().optional().nullable(),
    /** The frequency at which rent will be collected (weekly/monthly/annually) */
    rentFrequency: z.string().optional().nullable(),
    /** Details of any bills that are included in the rent */ rentIncludes: z.string().optional().nullable(),
    /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
    furnishing: z.array(z.string()).optional().nullable(),
    /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    agentRole: z.string().optional().nullable(),
    /** The acceptable letting terms (short/long/any) */ term: z.string().optional().nullable(),
    /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
    status: z.string().optional().nullable(),
    /** The unique identifier of the landlord letting the property */ landlordId: z.string().optional().nullable(),
    /** A note to accompany any works orders created for the property */
    worksOrderNote: z.string().optional().nullable(),
    /** Sets the minimum number of months the property can be let out for */
    minimumTerm: z.number().int().optional().nullable(),
    managementFee: createPropertyCommissionFeeModel.optional().nullable(),
    lettingFee: createPropertyCommissionFeeModel.optional().nullable(),
    /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().optional().nullable(),
    utilities: createUtilityModel.optional().nullable(),
    deposit: createPropertyLettingsDepositModel.optional().nullable(),
  })
/** Request body used to set details specific to lettings marketing on a new property */
export type CreatePropertyLettingModel =
  /** Request body used to set details specific to lettings marketing on a new property */
  {
    instructed?: /** The date the property was marked as to let */ string | null | undefined
    availableFrom?: /** The date the property is available from */ string | null | undefined
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
    agentRole?:
      | /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
      string
      | null
      | undefined
    term?: /** The acceptable letting terms (short/long/any) */ string | null | undefined
    status?:
      | /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
      string
      | null
      | undefined
    landlordId?: /** The unique identifier of the landlord letting the property */ string | null | undefined
    worksOrderNote?: /** A note to accompany any works orders created for the property */ string | null | undefined
    minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | null | undefined
    managementFee?: CreatePropertyCommissionFeeModel | null | undefined
    lettingFee?: CreatePropertyCommissionFeeModel | null | undefined
    qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | null | undefined
    utilities?: CreateUtilityModel | null | undefined
    deposit?: CreatePropertyLettingsDepositModel | null | undefined
  }
