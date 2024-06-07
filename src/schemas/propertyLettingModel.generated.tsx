import { z } from 'zod'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/schemas/propertyCommissionFeeModel.generated.tsx'
import { utilityModel, UtilityModel } from '@/schemas/utilityModel.generated.tsx'
import { propertyLettingsDepositModel, PropertyLettingsDepositModel } from '@/schemas/propertyLettingsDepositModel.generated.tsx'
import { propertyLettingRentInsuranceModel, PropertyLettingRentInsuranceModel } from '@/schemas/propertyLettingRentInsuranceModel.generated.tsx'
import { propertyLettingLicencingModel, PropertyLettingLicencingModel } from '@/schemas/propertyLettingLicencingModel.generated.tsx'

/** Representation of property details specific to lettings marketing */
export const propertyLettingModel = /** Representation of property details specific to lettings marketing */
z.object({instructed: /** The date the property was marked as to let */
z.string().optional(), availableFrom: /** The date the property is next available from */
z.string().optional(), availableTo: /** The date the property is available to */
z.string().optional(), agreementSigned: /** The date the letting agreement between the landlord and agent was signed */
z.string().optional(), rent: /** The rent being charged for the property */
z.number().optional(), rentFrequency: /** The frequency at which rent will be collected (weekly/monthly/annually) */
z.string().optional(), rentIncludes: /** Details of any bills that are included in the rent */
z.string().optional(), furnishing: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
z.array(z.string()).optional(), term: /** The acceptable letting terms (short/long/any) */
z.string().optional(), status: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
z.string().optional(), agentRole: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
z.string().optional(), landlordId: /** The unique identifier of the landlord letting the property */
z.string().optional(), worksOrderNote: /** A note to accompany any works orders created for the property */
z.string().optional(), minimumTerm: /** The minimum number of months the property can be let out for */
z.number().int().optional(), propertyManagerId: /** The unique identifier of the negotiator that manages the property */
z.string().optional(), managementCompanyIds: /** The unique identifiers of the management companies associated to the property */
z.array(z.string()).optional(), brochureId: /** The unique identifier of the document used for the lettings brochure */
z.string().optional(), publicBrochureUrl: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
z.string().optional(), managementFee: propertyCommissionFeeModel.optional(), lettingFee: propertyCommissionFeeModel.optional(), qualifier: /** The rent qualifier (rentOnApplication/askingRent) */
z.string().optional(), utilities: utilityModel.optional(), deposit: propertyLettingsDepositModel.optional(), rentInsurance: propertyLettingRentInsuranceModel.optional(), licencing: propertyLettingLicencingModel.optional()});
/** Representation of property details specific to lettings marketing */
export type PropertyLettingModel = /** Representation of property details specific to lettings marketing */
{instructed?: /** The date the property was marked as to let */
string | undefined, availableFrom?: /** The date the property is next available from */
string | undefined, availableTo?: /** The date the property is available to */
string | undefined, agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
string | undefined, rent?: /** The rent being charged for the property */
number | undefined, rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
string | undefined, rentIncludes?: /** Details of any bills that are included in the rent */
string | undefined, furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
Array<string> | undefined, term?: /** The acceptable letting terms (short/long/any) */
string | undefined, status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
string | undefined, agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
string | undefined, landlordId?: /** The unique identifier of the landlord letting the property */
string | undefined, worksOrderNote?: /** A note to accompany any works orders created for the property */
string | undefined, minimumTerm?: /** The minimum number of months the property can be let out for */
number | undefined, propertyManagerId?: /** The unique identifier of the negotiator that manages the property */
string | undefined, managementCompanyIds?: /** The unique identifiers of the management companies associated to the property */
Array<string> | undefined, brochureId?: /** The unique identifier of the document used for the lettings brochure */
string | undefined, publicBrochureUrl?: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
string | undefined, managementFee?: PropertyCommissionFeeModel | undefined, lettingFee?: PropertyCommissionFeeModel | undefined, qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */
string | undefined, utilities?: UtilityModel | undefined, deposit?: PropertyLettingsDepositModel | undefined, rentInsurance?: PropertyLettingRentInsuranceModel | undefined, licencing?: PropertyLettingLicencingModel | undefined};