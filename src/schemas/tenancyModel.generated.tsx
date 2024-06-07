import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { tenancyLettingFeeModel, TenancyLettingFeeModel } from '@/schemas/tenancyLettingFeeModel.generated.tsx'
import { tenancyManagementFeeModel, TenancyManagementFeeModel } from '@/schemas/tenancyManagementFeeModel.generated.tsx'
import { tenancySourceModel, TenancySourceModel } from '@/schemas/tenancySourceModel.generated.tsx'
import { tenancyDepositModel, TenancyDepositModel } from '@/schemas/tenancyDepositModel.generated.tsx'
import { tenancyContactModel, TenancyContactModel } from '@/schemas/tenancyContactModel.generated.tsx'
import { renewalOptionsModel, RenewalOptionsModel } from '@/schemas/renewalOptionsModel.generated.tsx'
import { tenancyArrearsModel, TenancyArrearsModel } from '@/schemas/tenancyArrearsModel.generated.tsx'

/** Representation of a tenancy */
export const tenancyModel = /** Representation of a tenancy */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the tenancy */
z.string().optional(), created: /** The date and time when the tenancy was created */
z.string().optional(), modified: /** The date and time when the tenancy was last modified */
z.string().optional(), startDate: /** The start date of the tenancy */
z.string().optional(), endDate: /** The end date of the tenancy */
z.string().optional(), status: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
z.string().optional(), agentRole: /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
z.string().optional(), rent: /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
z.number().optional(), rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
z.string().optional(), endDateConfirmed: /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
z.boolean().optional(), isPeriodic: /** A flag determining whether or not the tenancy has been extended indefinitely */
z.boolean().optional(), rentInstalmentsFrequency: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
z.string().optional(), rentInstalmentsAmount: /** The amount due for each rent instalment (where specified) */
z.number().optional(), rentInstalmentsStart: /** The date that the first instalment is due */
z.string().optional(), meterReadingGas: /** The recorded utility reading for the gas meter */
z.string().optional(), meterReadingGasLastRead: /** Date of when the reading of gas utility was last recorded */
z.string().optional(), meterReadingElectricity: /** The recorded utility reading for the electricity meter */
z.string().optional(), meterReadingElectricityLastRead: /** Date of when the reading of electricity utility was last recorded */
z.string().optional(), meterReadingWater: /** The recorded utility reading for the water meter */
z.string().optional(), meterReadingWaterLastRead: /** Date of when the reading of water utility was last recorded */
z.string().optional(), typeId: /** The unique identifier of the type of tenancy */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
z.string().optional(), propertyId: /** The unique identifier of the property that relates to the tenancy */
z.string().optional(), applicantId: /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
z.string().optional(), managerId: /** The unique identifier of the negotiator assigned as the manager of the tenancy */
z.string().optional(), groupPaymentReference: /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
z.string().optional(), lettingFee: tenancyLettingFeeModel.optional(), managementFee: tenancyManagementFeeModel.optional(), source: tenancySourceModel.optional(), deposit: tenancyDepositModel.optional(), related: /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
z.array(tenancyContactModel).optional(), fromArchive: /** A flag denoting whether or not this tenancy is archived */
z.boolean().optional(), metadata: /** App specific metadata that has been set against the tenancy */
z.record(z.string(), z.object({})).optional(), feeNotes: /** Financial notes set against the tenancy */
z.string().optional(), legalStatusId: /** The identifier of the legal status to set against the tenancy */
z.string().optional(), renewalOptions: renewalOptionsModel.optional(), arrears: tenancyArrearsModel.optional(), _eTag: /** The ETag for the current version of the tenancy. Used for managing update concurrency */
z.string().optional()});
/** Representation of a tenancy */
export type TenancyModel = /** Representation of a tenancy */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the tenancy */
string | undefined, created?: /** The date and time when the tenancy was created */
string | undefined, modified?: /** The date and time when the tenancy was last modified */
string | undefined, startDate?: /** The start date of the tenancy */
string | undefined, endDate?: /** The end date of the tenancy */
string | undefined, status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
string | undefined, agentRole?: /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
string | undefined, rent?: /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
number | undefined, rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
string | undefined, endDateConfirmed?: /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
boolean | undefined, isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
boolean | undefined, rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
string | undefined, rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */
number | undefined, rentInstalmentsStart?: /** The date that the first instalment is due */
string | undefined, meterReadingGas?: /** The recorded utility reading for the gas meter */
string | undefined, meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */
string | undefined, meterReadingElectricity?: /** The recorded utility reading for the electricity meter */
string | undefined, meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
string | undefined, meterReadingWater?: /** The recorded utility reading for the water meter */
string | undefined, meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */
string | undefined, typeId?: /** The unique identifier of the type of tenancy */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */
string | undefined, propertyId?: /** The unique identifier of the property that relates to the tenancy */
string | undefined, applicantId?: /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
string | undefined, managerId?: /** The unique identifier of the negotiator assigned as the manager of the tenancy */
string | undefined, groupPaymentReference?: /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
string | undefined, lettingFee?: TenancyLettingFeeModel | undefined, managementFee?: TenancyManagementFeeModel | undefined, source?: TenancySourceModel | undefined, deposit?: TenancyDepositModel | undefined, related?: /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
Array<TenancyContactModel> | undefined, fromArchive?: /** A flag denoting whether or not this tenancy is archived */
boolean | undefined, metadata?: /** App specific metadata that has been set against the tenancy */
Record<string, Record<string, never>> | undefined, feeNotes?: /** Financial notes set against the tenancy */
string | undefined, legalStatusId?: /** The identifier of the legal status to set against the tenancy */
string | undefined, renewalOptions?: RenewalOptionsModel | undefined, arrears?: TenancyArrearsModel | undefined, _eTag?: /** The ETag for the current version of the tenancy. Used for managing update concurrency */
string | undefined};