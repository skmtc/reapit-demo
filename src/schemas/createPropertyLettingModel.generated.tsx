import { z } from 'zod'
import { createPropertyCommissionFeeModel, CreatePropertyCommissionFeeModel } from '@/schemas/createPropertyCommissionFeeModel.generated.tsx'
import { createUtilityModel, CreateUtilityModel } from '@/schemas/createUtilityModel.generated.tsx'
import { createPropertyLettingsDepositModel, CreatePropertyLettingsDepositModel } from '@/schemas/createPropertyLettingsDepositModel.generated.tsx'

/** Request body used to set details specific to lettings marketing on a new property */
export const createPropertyLettingModel = /** Request body used to set details specific to lettings marketing on a new property */
z.object({instructed: /** The date the property was marked as to let */
z.string().optional(), availableFrom: /** The date the property is available from */
z.string().optional(), availableTo: /** The date the property is available to */
z.string().optional(), agreementSigned: /** The date the letting agreement between the landlord and agent was signed */
z.string().optional(), rent: /** The rent being charged for the property */
z.number().optional(), rentFrequency: /** The frequency at which rent will be collected (weekly/monthly/annually) */
z.string().optional(), rentIncludes: /** Details of any bills that are included in the rent */
z.string().optional(), furnishing: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
z.array(z.string()).optional(), agentRole: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
z.string().optional(), term: /** The acceptable letting terms (short/long/any) */
z.string().optional(), status: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
z.string().optional(), landlordId: /** The unique identifier of the landlord letting the property */
z.string().optional(), worksOrderNote: /** A note to accompany any works orders created for the property */
z.string().optional(), minimumTerm: /** Sets the minimum number of months the property can be let out for */
z.number().int().optional(), managementFee: createPropertyCommissionFeeModel.optional(), lettingFee: createPropertyCommissionFeeModel.optional(), qualifier: /** The rent qualifier (rentOnApplication/askingRent) */
z.string().optional(), utilities: createUtilityModel.optional(), deposit: createPropertyLettingsDepositModel.optional()});
/** Request body used to set details specific to lettings marketing on a new property */
export type CreatePropertyLettingModel = /** Request body used to set details specific to lettings marketing on a new property */
{instructed?: /** The date the property was marked as to let */
string | undefined, availableFrom?: /** The date the property is available from */
string | undefined, availableTo?: /** The date the property is available to */
string | undefined, agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
string | undefined, rent?: /** The rent being charged for the property */
number | undefined, rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
string | undefined, rentIncludes?: /** Details of any bills that are included in the rent */
string | undefined, furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
Array<string> | undefined, agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
string | undefined, term?: /** The acceptable letting terms (short/long/any) */
string | undefined, status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
string | undefined, landlordId?: /** The unique identifier of the landlord letting the property */
string | undefined, worksOrderNote?: /** A note to accompany any works orders created for the property */
string | undefined, minimumTerm?: /** Sets the minimum number of months the property can be let out for */
number | undefined, managementFee?: CreatePropertyCommissionFeeModel | undefined, lettingFee?: CreatePropertyCommissionFeeModel | undefined, qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */
string | undefined, utilities?: CreateUtilityModel | undefined, deposit?: CreatePropertyLettingsDepositModel | undefined};