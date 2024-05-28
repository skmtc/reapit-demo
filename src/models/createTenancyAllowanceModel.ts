import { z } from 'zod'
import { createTenancyAgreementModel, CreateTenancyAgreementModel } from '@/models/createTenancyAgreementModel.ts'

/** Request body used to set a tenancy allowance */
export const createTenancyAllowanceModel = z.object({
  /** The identifier of the associated to the allowance */ typeId: z.string().nullable().optional(),
  /** The state of the allowance (allowed/notAllowed) */ state: z.string().nullable().optional(),
  agreements: createTenancyAgreementModel.nullable().optional(),
})
/** Request body used to set a tenancy allowance */
export type CreateTenancyAllowanceModel = {
  typeId?: /** The identifier of the associated to the allowance */ string | undefined
  state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
  agreements?: CreateTenancyAgreementModel | undefined
}
