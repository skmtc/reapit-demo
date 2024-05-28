import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { tenancyLettingFeeModel, TenancyLettingFeeModel } from '@/models/tenancyLettingFeeModel.ts'
import { tenancyManagementFeeModel, TenancyManagementFeeModel } from '@/models/tenancyManagementFeeModel.ts'
import { tenancySourceModel, TenancySourceModel } from '@/models/tenancySourceModel.ts'
import { tenancyDepositModel, TenancyDepositModel } from '@/models/tenancyDepositModel.ts'
import { tenancyContactModel, TenancyContactModel } from '@/models/tenancyContactModel.ts'
import { renewalOptionsModel, RenewalOptionsModel } from '@/models/renewalOptionsModel.ts'
import { tenancyArrearsModel, TenancyArrearsModel } from '@/models/tenancyArrearsModel.ts'

/** Representation of a tenancy */
export const tenancyModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy */ id: z.string().nullable().optional(),
  /** The date and time when the tenancy was created */ created: z.string().nullable().optional(),
  /** The date and time when the tenancy was last modified */ modified: z.string().nullable().optional(),
  /** The start date of the tenancy */ startDate: z.string().nullable().optional(),
  /** The end date of the tenancy */ endDate: z.string().nullable().optional(),
  /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  status: z.string().nullable().optional(),
  /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().nullable().optional(),
  /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
  rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().nullable().optional(),
  /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
  endDateConfirmed: z.boolean().nullable().optional(),
  /** A flag determining whether or not the tenancy has been extended indefinitely */
  isPeriodic: z.boolean().nullable().optional(),
  /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  rentInstalmentsFrequency: z.string().nullable().optional(),
  /** The amount due for each rent instalment (where specified) */
  rentInstalmentsAmount: z.number().nullable().optional(),
  /** The date that the first instalment is due */ rentInstalmentsStart: z.string().nullable().optional(),
  /** The recorded utility reading for the gas meter */ meterReadingGas: z.string().nullable().optional(),
  /** Date of when the reading of gas utility was last recorded */
  meterReadingGasLastRead: z.string().nullable().optional(),
  /** The recorded utility reading for the electricity meter */
  meterReadingElectricity: z.string().nullable().optional(),
  /** Date of when the reading of electricity utility was last recorded */
  meterReadingElectricityLastRead: z.string().nullable().optional(),
  /** The recorded utility reading for the water meter */ meterReadingWater: z.string().nullable().optional(),
  /** Date of when the reading of water utility was last recorded */
  meterReadingWaterLastRead: z.string().nullable().optional(),
  /** The unique identifier of the type of tenancy */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who is managing the tenancy */
  negotiatorId: z.string().nullable().optional(),
  /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
  applicantId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator assigned as the manager of the tenancy */
  managerId: z.string().nullable().optional(),
  /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
  groupPaymentReference: z.string().nullable().optional(),
  lettingFee: tenancyLettingFeeModel.nullable().optional(),
  managementFee: tenancyManagementFeeModel.nullable().optional(),
  source: tenancySourceModel.nullable().optional(),
  deposit: tenancyDepositModel.nullable().optional(),
  /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
  related: z.array(tenancyContactModel).nullable().optional(),
  /** A flag denoting whether or not this tenancy is archived */ fromArchive: z.boolean().nullable().optional(),
  /** App specific metadata that has been set against the tenancy */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** Financial notes set against the tenancy */ feeNotes: z.string().nullable().optional(),
  /** The identifier of the legal status to set against the tenancy */ legalStatusId: z.string().nullable().optional(),
  renewalOptions: renewalOptionsModel.nullable().optional(),
  arrears: tenancyArrearsModel.nullable().optional(),
  /** The ETag for the current version of the tenancy. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy */
export type TenancyModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy */ string | undefined
  created?: /** The date and time when the tenancy was created */ string | undefined
  modified?: /** The date and time when the tenancy was last modified */ string | undefined
  startDate?: /** The start date of the tenancy */ string | undefined
  endDate?: /** The end date of the tenancy */ string | undefined
  status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  string | undefined
  agentRole?: /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
  number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  endDateConfirmed?: /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
  boolean | undefined
  isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
  rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  string | undefined
  rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | undefined
  rentInstalmentsStart?: /** The date that the first instalment is due */ string | undefined
  meterReadingGas?: /** The recorded utility reading for the gas meter */ string | undefined
  meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | undefined
  meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | undefined
  meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
  string | undefined
  meterReadingWater?: /** The recorded utility reading for the water meter */ string | undefined
  meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */ string | undefined
  typeId?: /** The unique identifier of the type of tenancy */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */ string | undefined
  propertyId?: /** The unique identifier of the property that relates to the tenancy */ string | undefined
  applicantId?: /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
  string | undefined
  managerId?: /** The unique identifier of the negotiator assigned as the manager of the tenancy */ string | undefined
  groupPaymentReference?: /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
  string | undefined
  lettingFee?: TenancyLettingFeeModel | undefined
  managementFee?: TenancyManagementFeeModel | undefined
  source?: TenancySourceModel | undefined
  deposit?: TenancyDepositModel | undefined
  related?: /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
  Array<TenancyContactModel> | undefined
  fromArchive?: /** A flag denoting whether or not this tenancy is archived */ boolean | undefined
  metadata?: /** App specific metadata that has been set against the tenancy */
  Record<string, Record<string, never>> | undefined
  feeNotes?: /** Financial notes set against the tenancy */ string | undefined
  legalStatusId?: /** The identifier of the legal status to set against the tenancy */ string | undefined
  renewalOptions?: RenewalOptionsModel | undefined
  arrears?: TenancyArrearsModel | undefined
  _eTag?: /** The ETag for the current version of the tenancy. Used for managing update concurrency */
  string | undefined
}
