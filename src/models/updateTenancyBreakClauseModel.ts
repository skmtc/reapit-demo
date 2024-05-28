import { UpdateTenancyAgreementModel } from '@/models/updateTenancyAgreementModel.ts'
import { UpdateTenancyBreakFromModel } from '@/models/updateTenancyBreakFromModel.ts'
import { UpdateTenancyNoticeRequiredModel } from '@/models/updateTenancyNoticeRequiredModel.ts'

/** Request body used to update tenancy break clause */
export type UpdateTenancyBreakClauseModel = {
  active?: /** The date the break clause becomes/became active */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | undefined
  agreements?: UpdateTenancyAgreementModel | undefined
  breakFrom?: UpdateTenancyBreakFromModel | undefined
  noticeRequired?: UpdateTenancyNoticeRequiredModel | undefined
}
