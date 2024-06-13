import { z } from 'zod'
import {
  createTenancyAgreementModel,
  CreateTenancyAgreementModel,
} from '@/schemas/createTenancyAgreementModel.generated.tsx'
import {
  createTenancyBreakFromModel,
  CreateTenancyBreakFromModel,
} from '@/schemas/createTenancyBreakFromModel.generated.tsx'
import {
  createTenancyNoticeRequiredModel,
  CreateTenancyNoticeRequiredModel,
} from '@/schemas/createTenancyNoticeRequiredModel.generated.tsx'

/** Request body used to update tenancy break clause */
export const createTenancyBreakClauseModel =
  /** Request body used to update tenancy break clause */
  z.object({
    /** The identifier of the associated to the break clause */ typeId: z.string().optional().nullable(),
    /** The date the break clause becomes/became active */ active: z.string().optional().nullable(),
    /** The responsible party (landlord/tenant/mutual) */ appliesTo: z.string().optional().nullable(),
    agreements: createTenancyAgreementModel.optional().nullable(),
    breakFrom: createTenancyBreakFromModel.optional().nullable(),
    noticeRequired: createTenancyNoticeRequiredModel.optional().nullable(),
  })
/** Request body used to update tenancy break clause */
export type CreateTenancyBreakClauseModel =
  /** Request body used to update tenancy break clause */
  {
    typeId?: /** The identifier of the associated to the break clause */ string | null | undefined
    active?: /** The date the break clause becomes/became active */ string | null | undefined
    appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | null | undefined
    agreements?: CreateTenancyAgreementModel | null | undefined
    breakFrom?: CreateTenancyBreakFromModel | null | undefined
    noticeRequired?: CreateTenancyNoticeRequiredModel | null | undefined
  }
