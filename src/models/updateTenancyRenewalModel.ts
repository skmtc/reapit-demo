import { UpdateLettingFeeRenewalModel } from '@/models/updateLettingFeeRenewalModel.ts'
import { UpdateManagementFeeRenewalModel } from '@/models/updateManagementFeeRenewalModel.ts'

/** Request body used to update a tenancy renewal negotiation */
export type UpdateTenancyRenewalModel = {
  startDate?: /** The proposed start date of the tenancy renewal */ string | undefined
  endDate?: /** The proposed end date of the tenancy renewal */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */ string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  lettingFee?: UpdateLettingFeeRenewalModel | undefined
  managementFee?: UpdateManagementFeeRenewalModel | undefined
}
