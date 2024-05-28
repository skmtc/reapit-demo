import { z } from 'zod'
import { createLettingFeeRenewalModel, CreateLettingFeeRenewalModel } from '@/models/createLettingFeeRenewalModel.ts'
import {
  createManagementFeeRenewalModel,
  CreateManagementFeeRenewalModel,
} from '@/models/createManagementFeeRenewalModel.ts'

/** Request body used to create a tenancy renewal negotiation */
export const createTenancyRenewalModel = z.object({
  /** The proposed start date of the tenancy renewal */ startDate: z.string().nullable().optional(),
  /** The proposed end date of the tenancy renewal */ endDate: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who is managing this tenancy renewal */
  negotiatorId: z.string().nullable().optional(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().nullable().optional(),
  lettingFee: createLettingFeeRenewalModel.nullable().optional(),
  managementFee: createManagementFeeRenewalModel.nullable().optional(),
})
/** Request body used to create a tenancy renewal negotiation */
export type CreateTenancyRenewalModel = {
  startDate?: /** The proposed start date of the tenancy renewal */ string | undefined
  endDate?: /** The proposed end date of the tenancy renewal */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */ string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  lettingFee?: CreateLettingFeeRenewalModel | undefined
  managementFee?: CreateManagementFeeRenewalModel | undefined
}
