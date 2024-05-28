import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import {
  tenancyBreakClauseBreakFromModel,
  TenancyBreakClauseBreakFromModel,
} from '@/models/tenancyBreakClauseBreakFromModel.ts'
import {
  tenancyBreakClauseNoticeRequiredModel,
  TenancyBreakClauseNoticeRequiredModel,
} from '@/models/tenancyBreakClauseNoticeRequiredModel.ts'
import { tenancyAgreementModel, TenancyAgreementModel } from '@/models/tenancyAgreementModel.ts'

/** Representation of a tenancy break clause */
export const tenancyBreakClauseModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the break clause */ id: z.string().nullable().optional(),
  /** The date and time when the break clause was created */ created: z.string().nullable().optional(),
  /** The date and time when the break clause last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated break clause */ clauseTypeId: z.string().nullable().optional(),
  /** The break clauses description */ description: z.string().nullable().optional(),
  /** The date the break clause became (or becomes) active */ active: z.string().nullable().optional(),
  /** The parties that the break clause applies to (landlord/tenant/mutual) */
  appliesTo: z.string().nullable().optional(),
  /** Tenancy agreement text relating to the break clause */ letterText: z.string().nullable().optional(),
  breakFrom: tenancyBreakClauseBreakFromModel.nullable().optional(),
  noticeRequired: tenancyBreakClauseNoticeRequiredModel.nullable().optional(),
  agreements: tenancyAgreementModel.nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the break clause. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy break clause */
export type TenancyBreakClauseModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the break clause */ string | undefined
  created?: /** The date and time when the break clause was created */ string | undefined
  modified?: /** The date and time when the break clause last modified */ string | undefined
  clauseTypeId?: /** The identifier of the associated break clause */ string | undefined
  description?: /** The break clauses description */ string | undefined
  active?: /** The date the break clause became (or becomes) active */ string | undefined
  appliesTo?: /** The parties that the break clause applies to (landlord/tenant/mutual) */ string | undefined
  letterText?: /** Tenancy agreement text relating to the break clause */ string | undefined
  breakFrom?: TenancyBreakClauseBreakFromModel | undefined
  noticeRequired?: TenancyBreakClauseNoticeRequiredModel | undefined
  agreements?: TenancyAgreementModel | undefined
  tenancyId?: /** The unique identifier of the associated tenancy */ string | undefined
  _eTag?: /** The ETag for the current version of the break clause. Used for managing update concurrency */
  string | undefined
}
