import { z } from 'zod'
import { updateTenancySourceModel, UpdateTenancySourceModel } from '@/schemas/updateTenancySourceModel.generated.tsx'
import { updateTenancyDepositModel, UpdateTenancyDepositModel } from '@/schemas/updateTenancyDepositModel.generated.tsx'
import { updateTenancyLettingFeeModel, UpdateTenancyLettingFeeModel } from '@/schemas/updateTenancyLettingFeeModel.generated.tsx'
import { updateTenancyManagementFeeModel, UpdateTenancyManagementFeeModel } from '@/schemas/updateTenancyManagementFeeModel.generated.tsx'

/** Request body used to update an existing Tenancy */
export const updateTenancyModel = /** Request body used to update an existing Tenancy */
z.object({startDate: /** The start date of the tenancy */
z.string().optional(), endDate: /** The end date of the tenancy */
z.string().optional(), status: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
z.string().optional(), agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
z.string().optional(), rent: /** The amount of rent required, returned in relation to the collection frequency */
z.number().optional(), rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
z.string().optional(), endDateConfirmed: /** Flag for end date confirmation */
z.boolean().optional(), isPeriodic: /** A flag determining whether or not the tenancy has been extended indefinitely */
z.boolean().optional(), typeId: /** The unique identifier of the type of tenancy */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
z.string().optional(), source: updateTenancySourceModel.optional(), rentInstalmentsFrequency: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
z.string().optional(), rentInstalmentsAmount: /** The amount due for each rent instalment (where specified) */
z.number().optional(), rentInstalmentsStart: /** The date that the first instalment is due */
z.string().optional(), meterReadingGas: /** The recorded utility reading for the gas meter */
z.string().optional(), meterReadingGasLastRead: /** Date of when the reading of gas utility was last recorded */
z.string().optional(), meterReadingElectricity: /** The recorded utility reading for the electricity meter */
z.string().optional(), meterReadingElectricityLastRead: /** Date of when the reading of electricity utility was last recorded */
z.string().optional(), meterReadingWater: /** The recorded utility reading for the water meter */
z.string().optional(), meterReadingWaterLastRead: /** Date of when the reading of water utility was last recorded */
z.string().optional(), feeNotes: /** Financial notes set against the tenancy */
z.string().optional(), legalStatusId: /** The identifier of the legal status to set against the tenancy */
z.string().optional(), deposit: updateTenancyDepositModel.optional(), lettingFee: updateTenancyLettingFeeModel.optional(), managementFee: updateTenancyManagementFeeModel.optional(), metadata: /** App specific metadata to set against the tenancy */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing Tenancy */
export type UpdateTenancyModel = /** Request body used to update an existing Tenancy */
{startDate?: /** The start date of the tenancy */
string | undefined, endDate?: /** The end date of the tenancy */
string | undefined, status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
string | undefined, agentRole?: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
string | undefined, rent?: /** The amount of rent required, returned in relation to the collection frequency */
number | undefined, rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
string | undefined, endDateConfirmed?: /** Flag for end date confirmation */
boolean | undefined, isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
boolean | undefined, typeId?: /** The unique identifier of the type of tenancy */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */
string | undefined, source?: UpdateTenancySourceModel | undefined, rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
string | undefined, rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */
number | undefined, rentInstalmentsStart?: /** The date that the first instalment is due */
string | undefined, meterReadingGas?: /** The recorded utility reading for the gas meter */
string | undefined, meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */
string | undefined, meterReadingElectricity?: /** The recorded utility reading for the electricity meter */
string | undefined, meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
string | undefined, meterReadingWater?: /** The recorded utility reading for the water meter */
string | undefined, meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */
string | undefined, feeNotes?: /** Financial notes set against the tenancy */
string | undefined, legalStatusId?: /** The identifier of the legal status to set against the tenancy */
string | undefined, deposit?: UpdateTenancyDepositModel | undefined, lettingFee?: UpdateTenancyLettingFeeModel | undefined, managementFee?: UpdateTenancyManagementFeeModel | undefined, metadata?: /** App specific metadata to set against the tenancy */
Record<string, Record<string, never>> | undefined};