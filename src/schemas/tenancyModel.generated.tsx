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
export const tenancyModel =
  /** Representation of a tenancy */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the tenancy */ id: z.string().optional(),
    /** The date and time when the tenancy was created */ created: z.string().optional(),
    /** The date and time when the tenancy was last modified */ modified: z.string().optional(),
    /** The start date of the tenancy */ startDate: z.string().optional(),
    /** The end date of the tenancy */ endDate: z.string().optional(),
    /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
    status: z.string().optional(),
    /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    agentRole: z.string().optional(),
    /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
    rent: z.number().optional(),
    /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().optional(),
    /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
    endDateConfirmed: z.boolean().optional(),
    /** A flag determining whether or not the tenancy has been extended indefinitely */
    isPeriodic: z.boolean().optional(),
    /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
    rentInstalmentsFrequency: z.string().optional(),
    /** The amount due for each rent instalment (where specified) */ rentInstalmentsAmount: z.number().optional(),
    /** The date that the first instalment is due */ rentInstalmentsStart: z.string().optional(),
    /** The recorded utility reading for the gas meter */ meterReadingGas: z.string().optional(),
    /** Date of when the reading of gas utility was last recorded */ meterReadingGasLastRead: z.string().optional(),
    /** The recorded utility reading for the electricity meter */ meterReadingElectricity: z.string().optional(),
    /** Date of when the reading of electricity utility was last recorded */
    meterReadingElectricityLastRead: z.string().optional(),
    /** The recorded utility reading for the water meter */ meterReadingWater: z.string().optional(),
    /** Date of when the reading of water utility was last recorded */ meterReadingWaterLastRead: z.string().optional(),
    /** The unique identifier of the type of tenancy */ typeId: z.string().optional(),
    /** The unique identifier of the negotiator who is managing the tenancy */ negotiatorId: z.string().optional(),
    /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string().optional(),
    /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
    applicantId: z.string().optional(),
    /** The unique identifier of the negotiator assigned as the manager of the tenancy */
    managerId: z.string().optional(),
    /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
    groupPaymentReference: z.string().optional(),
    lettingFee: tenancyLettingFeeModel.optional(),
    managementFee: tenancyManagementFeeModel.optional(),
    source: tenancySourceModel.optional(),
    deposit: tenancyDepositModel.optional(),
    /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
    related: z.array(tenancyContactModel).optional(),
    /** A flag denoting whether or not this tenancy is archived */ fromArchive: z.boolean().optional(),
    /** App specific metadata that has been set against the tenancy */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** Financial notes set against the tenancy */ feeNotes: z.string().optional(),
    /** The identifier of the legal status to set against the tenancy */ legalStatusId: z.string().optional(),
    renewalOptions: renewalOptionsModel.optional(),
    arrears: tenancyArrearsModel.optional(),
    /** The ETag for the current version of the tenancy. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of a tenancy */
export type TenancyModel =
  /** Representation of a tenancy */
  {
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
