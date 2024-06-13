import {
  CreateTenancyLettingFeeModel,
  createTenancyLettingFeeModel,
} from '@/schemas/createTenancyLettingFeeModel.generated.tsx'
import {
  CreateTenancyManagementFeeModel,
  createTenancyManagementFeeModel,
} from '@/schemas/createTenancyManagementFeeModel.generated.tsx'
import { CreateTenancyDepositModel, createTenancyDepositModel } from '@/schemas/createTenancyDepositModel.generated.tsx'
import { CreateTenancySourceModel, createTenancySourceModel } from '@/schemas/createTenancySourceModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new tenancy */
export type CreateTenancyModel =
  /** Request body used to create a new tenancy */
  {
    startDate?: string | null | undefined
    endDate?: string | null | undefined
    status?:
      | /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
      string
      | null
      | undefined
    agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string
    rent: /** The amount of rent required, returned in relation to the collection frequency */ number
    rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */ string
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
    isPeriodic?:
      | /** A flag determining whether or not the tenancy has been extended indefinitely */
      boolean
      | null
      | undefined
    typeId: /** The unique identifier of the type of tenancy */ string
    negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */ string
    propertyId: /** The unique identifier of the property that relates to the tenancy */ string
    applicantId: /** The unique identifier of the applicant who has applied to be a tenant */ string
    feeNotes?: /** Financial notes set against the tenancy */ string | null | undefined
    lettingFee?: CreateTenancyLettingFeeModel | null | undefined
    managementFee?: CreateTenancyManagementFeeModel | null | undefined
    deposit?: CreateTenancyDepositModel | null | undefined
    source?: CreateTenancySourceModel | null | undefined
    metadata?:
      | /** App specific metadata to set against the tenancy */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createTenancyModel =
  /** Request body used to create a new tenancy */
  z.object({
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    status: z.string().optional().nullable(),
    /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    agentRole: z.string(),
    /** The amount of rent required, returned in relation to the collection frequency */ rent: z.number(),
    /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string(),
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
    /** A flag determining whether or not the tenancy has been extended indefinitely */
    isPeriodic: z.boolean().optional().nullable(),
    /** The unique identifier of the type of tenancy */ typeId: z.string(),
    /** The unique identifier of the negotiator who is managing the tenancy */ negotiatorId: z.string(),
    /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string(),
    /** The unique identifier of the applicant who has applied to be a tenant */ applicantId: z.string(),
    /** Financial notes set against the tenancy */ feeNotes: z.string().optional().nullable(),
    lettingFee: createTenancyLettingFeeModel.optional().nullable(),
    managementFee: createTenancyManagementFeeModel.optional().nullable(),
    deposit: createTenancyDepositModel.optional().nullable(),
    source: createTenancySourceModel.optional().nullable(),
    /** App specific metadata to set against the tenancy */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
