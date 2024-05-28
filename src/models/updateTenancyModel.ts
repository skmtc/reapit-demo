import { UpdateTenancySourceModel } from '@/models/updateTenancySourceModel.ts'
import { UpdateTenancyDepositModel } from '@/models/updateTenancyDepositModel.ts'
import { UpdateTenancyLettingFeeModel } from '@/models/updateTenancyLettingFeeModel.ts'
import { UpdateTenancyManagementFeeModel } from '@/models/updateTenancyManagementFeeModel.ts'

/** Request body used to update an existing Tenancy */
export type UpdateTenancyModel = {
  startDate?: /** The start date of the tenancy */ string | undefined
  endDate?: /** The end date of the tenancy */ string | undefined
  status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  string | undefined
  agentRole?: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  endDateConfirmed?: /** Flag for end date confirmation */ boolean | undefined
  isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
  typeId?: /** The unique identifier of the type of tenancy */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */ string | undefined
  source?: UpdateTenancySourceModel | undefined
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
  feeNotes?: /** Financial notes set against the tenancy */ string | undefined
  legalStatusId?: /** The identifier of the legal status to set against the tenancy */ string | undefined
  deposit?: UpdateTenancyDepositModel | undefined
  lettingFee?: UpdateTenancyLettingFeeModel | undefined
  managementFee?: UpdateTenancyManagementFeeModel | undefined
  metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
}
