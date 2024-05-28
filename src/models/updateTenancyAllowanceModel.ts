import { UpdateTenancyAgreementModel } from '@/models/updateTenancyAgreementModel.ts'

/** Request body used to update tenancy allowance */
export type UpdateTenancyAllowanceModel = {
  state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
  agreements?: UpdateTenancyAgreementModel | undefined
}
