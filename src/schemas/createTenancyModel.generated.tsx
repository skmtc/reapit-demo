import { z } from 'zod'
import {
  createTenancyLettingFeeModel,
  CreateTenancyLettingFeeModel,
} from '@/schemas/createTenancyLettingFeeModel.generated.tsx'
import {
  createTenancyManagementFeeModel,
  CreateTenancyManagementFeeModel,
} from '@/schemas/createTenancyManagementFeeModel.generated.tsx'
import { createTenancyDepositModel, CreateTenancyDepositModel } from '@/schemas/createTenancyDepositModel.generated.tsx'
import { createTenancySourceModel, CreateTenancySourceModel } from '@/schemas/createTenancySourceModel.generated.tsx'

/** Request body used to create a new tenancy */
export const createTenancyModel =
  /** Request body used to create a new tenancy */
  z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    status: z.string().optional(),
    /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    agentRole: z.string(),
    /** The amount of rent required, returned in relation to the collection frequency */ rent: z.number(),
    /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string(),
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
    /** A flag determining whether or not the tenancy has been extended indefinitely */
    isPeriodic: z.boolean().optional(),
    /** The unique identifier of the type of tenancy */ typeId: z.string(),
    /** The unique identifier of the negotiator who is managing the tenancy */ negotiatorId: z.string(),
    /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string(),
    /** The unique identifier of the applicant who has applied to be a tenant */ applicantId: z.string(),
    /** Financial notes set against the tenancy */ feeNotes: z.string().optional(),
    lettingFee: createTenancyLettingFeeModel.optional(),
    managementFee: createTenancyManagementFeeModel.optional(),
    deposit: createTenancyDepositModel.optional(),
    source: createTenancySourceModel.optional(),
    /** App specific metadata to set against the tenancy */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new tenancy */
export type CreateTenancyModel =
  /** Request body used to create a new tenancy */
  {
    startDate?: string | undefined
    endDate?: string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    string | undefined
    agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string
    rent: /** The amount of rent required, returned in relation to the collection frequency */ number
    rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */ string
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
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
    typeId: /** The unique identifier of the type of tenancy */ string
    negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */ string
    propertyId: /** The unique identifier of the property that relates to the tenancy */ string
    applicantId: /** The unique identifier of the applicant who has applied to be a tenant */ string
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    lettingFee?: CreateTenancyLettingFeeModel | undefined
    managementFee?: CreateTenancyManagementFeeModel | undefined
    deposit?: CreateTenancyDepositModel | undefined
    source?: CreateTenancySourceModel | undefined
    metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
  }
