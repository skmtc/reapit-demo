import {
  CreateLettingFeeRenewalModel,
  createLettingFeeRenewalModel,
} from '@/schemas/createLettingFeeRenewalModel.generated.tsx'
import {
  CreateManagementFeeRenewalModel,
  createManagementFeeRenewalModel,
} from '@/schemas/createManagementFeeRenewalModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a tenancy renewal negotiation */
export type CreateTenancyRenewalModel =
  /** Request body used to create a tenancy renewal negotiation */
  {
    startDate?: /** The proposed start date of the tenancy renewal */ string | null | undefined
    endDate?: /** The proposed end date of the tenancy renewal */ string | null | undefined
    negotiatorId?:
      | /** The unique identifier of the negotiator who is managing this tenancy renewal */
      string
      | null
      | undefined
    rent?:
      | /** The amount of rent required, returned in relation to the collection frequency */
      number
      | null
      | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | null | undefined
    lettingFee?: CreateLettingFeeRenewalModel | null | undefined
    managementFee?: CreateManagementFeeRenewalModel | null | undefined
  }
export const createTenancyRenewalModel =
  /** Request body used to create a tenancy renewal negotiation */
  z.object({
    /** The proposed start date of the tenancy renewal */ startDate: z.string().optional().nullable(),
    /** The proposed end date of the tenancy renewal */ endDate: z.string().optional().nullable(),
    /** The unique identifier of the negotiator who is managing this tenancy renewal */
    negotiatorId: z.string().optional().nullable(),
    /** The amount of rent required, returned in relation to the collection frequency */
    rent: z.number().optional().nullable(),
    /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().optional().nullable(),
    lettingFee: createLettingFeeRenewalModel.optional().nullable(),
    managementFee: createManagementFeeRenewalModel.optional().nullable(),
  })
