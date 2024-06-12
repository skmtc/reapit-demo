import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { TenancyLettingFeeModel, tenancyLettingFeeModel } from '@/schemas/tenancyLettingFeeModel.generated.tsx'
import { TenancyManagementFeeModel, tenancyManagementFeeModel } from '@/schemas/tenancyManagementFeeModel.generated.tsx'
import { TenancySourceModel, tenancySourceModel } from '@/schemas/tenancySourceModel.generated.tsx'
import { TenancyDepositModel, tenancyDepositModel } from '@/schemas/tenancyDepositModel.generated.tsx'
import { TenancyContactModel, tenancyContactModel } from '@/schemas/tenancyContactModel.generated.tsx'
import { RenewalOptionsModel, renewalOptionsModel } from '@/schemas/renewalOptionsModel.generated.tsx'
import { TenancyArrearsModel, tenancyArrearsModel } from '@/schemas/tenancyArrearsModel.generated.tsx'
import { z } from 'zod'

export type TenancyModel =
  /** Representation of a tenancy */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the tenancy */ string | null | undefined
    created?: /** The date and time when the tenancy was created */ string | null | undefined
    modified?: /** The date and time when the tenancy was last modified */ string | null | undefined
    startDate?: /** The start date of the tenancy */ string | null | undefined
    endDate?: /** The end date of the tenancy */ string | null | undefined
    status?:
      | /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
      string
      | null
      | undefined
    agentRole?:
      | /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
      string
      | null
      | undefined
    rent?:
      | /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
      number
      | null
      | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | null | undefined
    endDateConfirmed?:
      | /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
      boolean
      | null
      | undefined
    isPeriodic?:
      | /** A flag determining whether or not the tenancy has been extended indefinitely */
      boolean
      | null
      | undefined
    rentInstalmentsFrequency?:
      | /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
      string
      | null
      | undefined
    rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | null | undefined
    rentInstalmentsStart?: /** The date that the first instalment is due */ string | null | undefined
    meterReadingGas?: /** The recorded utility reading for the gas meter */ string | null | undefined
    meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | null | undefined
    meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | null | undefined
    meterReadingElectricityLastRead?:
      | /** Date of when the reading of electricity utility was last recorded */
      string
      | null
      | undefined
    meterReadingWater?: /** The recorded utility reading for the water meter */ string | null | undefined
    meterReadingWaterLastRead?:
      | /** Date of when the reading of water utility was last recorded */
      string
      | null
      | undefined
    typeId?: /** The unique identifier of the type of tenancy */ string | null | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */ string | null | undefined
    propertyId?: /** The unique identifier of the property that relates to the tenancy */ string | null | undefined
    applicantId?:
      | /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
      string
      | null
      | undefined
    managerId?:
      | /** The unique identifier of the negotiator assigned as the manager of the tenancy */
      string
      | null
      | undefined
    groupPaymentReference?:
      | /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
      string
      | null
      | undefined
    lettingFee?: TenancyLettingFeeModel | null | undefined
    managementFee?: TenancyManagementFeeModel | null | undefined
    source?: TenancySourceModel | null | undefined
    deposit?: TenancyDepositModel | null | undefined
    related?:
      | /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
      Array<TenancyContactModel>
      | null
      | undefined
    fromArchive?: /** A flag denoting whether or not this tenancy is archived */ boolean | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the tenancy */
      Record<string, Record<string, never>>
      | null
      | undefined
    feeNotes?: /** Financial notes set against the tenancy */ string | null | undefined
    legalStatusId?: /** The identifier of the legal status to set against the tenancy */ string | null | undefined
    renewalOptions?: RenewalOptionsModel | null | undefined
    arrears?: TenancyArrearsModel | null | undefined
    _eTag?:
      | /** The ETag for the current version of the tenancy. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a tenancy */
export const tenancyModel =
  /** Representation of a tenancy */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the tenancy */ id: z.string().optional().nullable(),
    /** The date and time when the tenancy was created */ created: z.string().optional().nullable(),
    /** The date and time when the tenancy was last modified */ modified: z.string().optional().nullable(),
    /** The start date of the tenancy */ startDate: z.string().optional().nullable(),
    /** The end date of the tenancy */ endDate: z.string().optional().nullable(),
    /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
    status: z.string().optional().nullable(),
    /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    agentRole: z.string().optional().nullable(),
    /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
    rent: z.number().optional().nullable(),
    /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().optional().nullable(),
    /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
    endDateConfirmed: z.boolean().optional().nullable(),
    /** A flag determining whether or not the tenancy has been extended indefinitely */
    isPeriodic: z.boolean().optional().nullable(),
    /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
    rentInstalmentsFrequency: z.string().optional().nullable(),
    /** The amount due for each rent instalment (where specified) */
    rentInstalmentsAmount: z.number().optional().nullable(),
    /** The date that the first instalment is due */ rentInstalmentsStart: z.string().optional().nullable(),
    /** The recorded utility reading for the gas meter */ meterReadingGas: z.string().optional().nullable(),
    /** Date of when the reading of gas utility was last recorded */
    meterReadingGasLastRead: z.string().optional().nullable(),
    /** The recorded utility reading for the electricity meter */
    meterReadingElectricity: z.string().optional().nullable(),
    /** Date of when the reading of electricity utility was last recorded */
    meterReadingElectricityLastRead: z.string().optional().nullable(),
    /** The recorded utility reading for the water meter */ meterReadingWater: z.string().optional().nullable(),
    /** Date of when the reading of water utility was last recorded */
    meterReadingWaterLastRead: z.string().optional().nullable(),
    /** The unique identifier of the type of tenancy */ typeId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator who is managing the tenancy */
    negotiatorId: z.string().optional().nullable(),
    /** The unique identifier of the property that relates to the tenancy */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
    applicantId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator assigned as the manager of the tenancy */
    managerId: z.string().optional().nullable(),
    /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
    groupPaymentReference: z.string().optional().nullable(),
    lettingFee: tenancyLettingFeeModel.optional().nullable(),
    managementFee: tenancyManagementFeeModel.optional().nullable(),
    source: tenancySourceModel.optional().nullable(),
    deposit: tenancyDepositModel.optional().nullable(),
    /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
    related: z.array(tenancyContactModel).optional().nullable(),
    /** A flag denoting whether or not this tenancy is archived */ fromArchive: z.boolean().optional().nullable(),
    /** App specific metadata that has been set against the tenancy */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** Financial notes set against the tenancy */ feeNotes: z.string().optional().nullable(),
    /** The identifier of the legal status to set against the tenancy */
    legalStatusId: z.string().optional().nullable(),
    renewalOptions: renewalOptionsModel.optional().nullable(),
    arrears: tenancyArrearsModel.optional().nullable(),
    /** The ETag for the current version of the tenancy. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
