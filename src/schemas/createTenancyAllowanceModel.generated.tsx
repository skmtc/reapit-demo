import {
  CreateTenancyAgreementModel,
  createTenancyAgreementModel,
} from '@/schemas/createTenancyAgreementModel.generated.tsx'
import { z } from 'zod'

/** Request body used to set a tenancy allowance */
export type CreateTenancyAllowanceModel =
  /** Request body used to set a tenancy allowance */
  {
    typeId?: /** The identifier of the associated to the allowance */ string | null | undefined
    state?: /** The state of the allowance (allowed/notAllowed) */ string | null | undefined
    agreements?: CreateTenancyAgreementModel | null | undefined
  }
export const createTenancyAllowanceModel =
  /** Request body used to set a tenancy allowance */
  z.object({
    /** The identifier of the associated to the allowance */ typeId: z.string().optional().nullable(),
    /** The state of the allowance (allowed/notAllowed) */ state: z.string().optional().nullable(),
    agreements: createTenancyAgreementModel.optional().nullable(),
  })
