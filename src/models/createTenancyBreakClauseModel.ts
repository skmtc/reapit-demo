import { z } from 'zod'
import { createTenancyAgreementModel, CreateTenancyAgreementModel } from '@/models/createTenancyAgreementModel.ts'
import { createTenancyBreakFromModel, CreateTenancyBreakFromModel } from '@/models/createTenancyBreakFromModel.ts'
import {
  createTenancyNoticeRequiredModel,
  CreateTenancyNoticeRequiredModel,
} from '@/models/createTenancyNoticeRequiredModel.ts'

/** Request body used to update tenancy break clause */
export const createTenancyBreakClauseModel = z.object({
  /** The identifier of the associated to the break clause */ typeId: z.string().nullable().optional(),
  /** The date the break clause becomes/became active */ active: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant/mutual) */ appliesTo: z.string().nullable().optional(),
  agreements: createTenancyAgreementModel.nullable().optional(),
  breakFrom: createTenancyBreakFromModel.nullable().optional(),
  noticeRequired: createTenancyNoticeRequiredModel.nullable().optional(),
})
/** Request body used to update tenancy break clause */
export type CreateTenancyBreakClauseModel = {
  typeId?: /** The identifier of the associated to the break clause */ string | undefined
  active?: /** The date the break clause becomes/became active */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | undefined
  agreements?: CreateTenancyAgreementModel | undefined
  breakFrom?: CreateTenancyBreakFromModel | undefined
  noticeRequired?: CreateTenancyNoticeRequiredModel | undefined
}
