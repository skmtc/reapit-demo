import { UpdateTenancyAgreementModel } from '@/models/updateTenancyAgreementModel.ts'

/** Request body used to update tenancy responsibility */
export type UpdateTenancyResponsibilityModel = {
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: UpdateTenancyAgreementModel | undefined
}
