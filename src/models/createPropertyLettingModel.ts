import { z } from 'zod'
import {
  createPropertyCommissionFeeModel,
  CreatePropertyCommissionFeeModel,
} from '@/models/createPropertyCommissionFeeModel.ts'
import { createUtilityModel, CreateUtilityModel } from '@/models/createUtilityModel.ts'
import {
  createPropertyLettingsDepositModel,
  CreatePropertyLettingsDepositModel,
} from '@/models/createPropertyLettingsDepositModel.ts'

/** Request body used to set details specific to lettings marketing on a new property */
export const createPropertyLettingModel = z.object({
  /** The date the property was marked as to let */ instructed: z.string().nullable().optional(),
  /** The date the property is available from */ availableFrom: z.string().nullable().optional(),
  /** The date the property is available to */ availableTo: z.string().nullable().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().nullable().optional(),
  /** The rent being charged for the property */ rent: z.number().nullable().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** Details of any bills that are included in the rent */ rentIncludes: z.string().nullable().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().nullable().optional(),
  /** The acceptable letting terms (short/long/any) */ term: z.string().nullable().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the landlord letting the property */ landlordId: z.string().nullable().optional(),
  /** A note to accompany any works orders created for the property */ worksOrderNote: z.string().nullable().optional(),
  /** Sets the minimum number of months the property can be let out for */
  minimumTerm: z.number().int().nullable().optional(),
  managementFee: createPropertyCommissionFeeModel.nullable().optional(),
  lettingFee: createPropertyCommissionFeeModel.nullable().optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().nullable().optional(),
  utilities: createUtilityModel.nullable().optional(),
  deposit: createPropertyLettingsDepositModel.nullable().optional(),
})
/** Request body used to set details specific to lettings marketing on a new property */
export type CreatePropertyLettingModel = {
  instructed?: /** The date the property was marked as to let */ string | undefined
  availableFrom?: /** The date the property is available from */ string | undefined
  availableTo?: /** The date the property is available to */ string | undefined
  agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */ string | undefined
  rent?: /** The rent being charged for the property */ number | undefined
  rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */ string | undefined
  rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
  furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  Array<string> | undefined
  agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  term?: /** The acceptable letting terms (short/long/any) */ string | undefined
  status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  string | undefined
  landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
  worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
  minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | undefined
  managementFee?: CreatePropertyCommissionFeeModel | undefined
  lettingFee?: CreatePropertyCommissionFeeModel | undefined
  qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
  utilities?: CreateUtilityModel | undefined
  deposit?: CreatePropertyLettingsDepositModel | undefined
}
