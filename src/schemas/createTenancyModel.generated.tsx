import { z } from 'zod'
import { createTenancyLettingFeeModel, CreateTenancyLettingFeeModel } from '@/schemas/createTenancyLettingFeeModel.generated.tsx'
import { createTenancyManagementFeeModel, CreateTenancyManagementFeeModel } from '@/schemas/createTenancyManagementFeeModel.generated.tsx'
import { createTenancyDepositModel, CreateTenancyDepositModel } from '@/schemas/createTenancyDepositModel.generated.tsx'
import { createTenancySourceModel, CreateTenancySourceModel } from '@/schemas/createTenancySourceModel.generated.tsx'

/** Request body used to create a new tenancy */
export const createTenancyModel = /** Request body used to create a new tenancy */
z.object({startDate: z.string().optional(), endDate: z.string().optional(), status: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
z.string().optional(), agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
z.string(), rent: /** The amount of rent required, returned in relation to the collection frequency */
z.number(), rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
z.string(), rentInstalmentsFrequency: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
z.string().optional(), rentInstalmentsAmount: /** The amount due for each rent instalment (where specified) */
z.number().optional(), rentInstalmentsStart: /** The date that the first instalment is due */
z.string().optional(), meterReadingGas: /** The recorded utility reading for the gas meter */
z.string().optional(), meterReadingGasLastRead: /** Date of when the reading of gas utility was last recorded */
z.string().optional(), meterReadingElectricity: /** The recorded utility reading for the electricity meter */
z.string().optional(), meterReadingElectricityLastRead: /** Date of when the reading of electricity utility was last recorded */
z.string().optional(), meterReadingWater: /** The recorded utility reading for the water meter */
z.string().optional(), meterReadingWaterLastRead: /** Date of when the reading of water utility was last recorded */
z.string().optional(), isPeriodic: /** A flag determining whether or not the tenancy has been extended indefinitely */
z.boolean().optional(), typeId: /** The unique identifier of the type of tenancy */
z.string(), negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
z.string(), propertyId: /** The unique identifier of the property that relates to the tenancy */
z.string(), applicantId: /** The unique identifier of the applicant who has applied to be a tenant */
z.string(), feeNotes: /** Financial notes set against the tenancy */
z.string().optional(), lettingFee: createTenancyLettingFeeModel.optional(), managementFee: createTenancyManagementFeeModel.optional(), deposit: createTenancyDepositModel.optional(), source: createTenancySourceModel.optional(), metadata: /** App specific metadata to set against the tenancy */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new tenancy */
export type CreateTenancyModel = /** Request body used to create a new tenancy */
{startDate?: string | undefined, endDate?: string | undefined, status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
string | undefined, agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
string, rent: /** The amount of rent required, returned in relation to the collection frequency */
number, rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
string, rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
string | undefined, rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */
number | undefined, rentInstalmentsStart?: /** The date that the first instalment is due */
string | undefined, meterReadingGas?: /** The recorded utility reading for the gas meter */
string | undefined, meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */
string | undefined, meterReadingElectricity?: /** The recorded utility reading for the electricity meter */
string | undefined, meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
string | undefined, meterReadingWater?: /** The recorded utility reading for the water meter */
string | undefined, meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */
string | undefined, isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
boolean | undefined, typeId: /** The unique identifier of the type of tenancy */
string, negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
string, propertyId: /** The unique identifier of the property that relates to the tenancy */
string, applicantId: /** The unique identifier of the applicant who has applied to be a tenant */
string, feeNotes?: /** Financial notes set against the tenancy */
string | undefined, lettingFee?: CreateTenancyLettingFeeModel | undefined, managementFee?: CreateTenancyManagementFeeModel | undefined, deposit?: CreateTenancyDepositModel | undefined, source?: CreateTenancySourceModel | undefined, metadata?: /** App specific metadata to set against the tenancy */
Record<string, Record<string, never>> | undefined};