import { z } from 'zod'

/** Request body used to create a new tenancy */
export const createTenancyModel = z.object({
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
  status: z.string().nullable().optional(),
  /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string(),
  /** The amount of rent required, returned in relation to the collection frequency */ rent: z.number(),
  /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string(),
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
  /** A flag determining whether or not the tenancy has been extended indefinitely */
  isPeriodic: z.boolean().nullable().optional(),
  /** The unique identifier of the type of tenancy */ typeId: z.string(),
  /** The unique identifier of the negotiator who is managing the tenancy */ negotiatorId: z.string(),
  /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string(),
  /** The unique identifier of the applicant who has applied to be a tenant */ applicantId: z.string(),
  /** Financial notes set against the tenancy */ feeNotes: z.string().nullable().optional(),
  /** Request body used to set letting fees on a new tenancy */
  lettingFee: z
    .object({
      /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The fee amount */ amount: z.number().nullable().optional(),
      /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set management fees on a new tenancy */
  managementFee: z
    .object({
      /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The fee amount */ amount: z.number().nullable().optional(),
      /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set the deposit of a new tenancy */
  deposit: z
    .object({
      /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
      heldBy: z.string().nullable().optional(),
      /** The number of weeks or months rent collected as the deposit on the tenancy */
      period: z.number().int().nullable().optional(),
      /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ type: z.string().nullable().optional(),
      /** The amount of deposit held */ sum: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set the source of a new tenancy */
  source: z
    .object({
      /** The unique identifier of the source for the tenancy */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** App specific metadata to set against the tenancy */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new tenancy */
export type CreateTenancyModel = {
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
  lettingFee?: /** Request body used to set letting fees on a new tenancy */
  | {
        type?: /** The letting fee type (percentage/fixed) */ string | undefined
        amount?: /** The fee amount */ number | undefined
        frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
        string | undefined
      }
    | undefined
  managementFee?: /** Request body used to set management fees on a new tenancy */
  | {
        type?: /** The management fee type (percentage/fixed) */ string | undefined
        amount?: /** The fee amount */ number | undefined
        frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
        string | undefined
      }
    | undefined
  deposit?: /** Request body used to set the deposit of a new tenancy */
  | {
        heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
        string | undefined
        period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
        type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
        sum?: /** The amount of deposit held */ number | undefined
      }
    | undefined
  source?: /** Request body used to set the source of a new tenancy */
  | {
        id?: /** The unique identifier of the source for the tenancy */ string | undefined
        type?: /** The source type (office/source) */ string | undefined
      }
    | undefined
  metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
}
