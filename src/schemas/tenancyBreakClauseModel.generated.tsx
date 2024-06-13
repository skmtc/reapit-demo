import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import {
  TenancyBreakClauseBreakFromModel,
  tenancyBreakClauseBreakFromModel,
} from '@/schemas/tenancyBreakClauseBreakFromModel.generated.tsx'
import {
  TenancyBreakClauseNoticeRequiredModel,
  tenancyBreakClauseNoticeRequiredModel,
} from '@/schemas/tenancyBreakClauseNoticeRequiredModel.generated.tsx'
import { TenancyAgreementModel, tenancyAgreementModel } from '@/schemas/tenancyAgreementModel.generated.tsx'
import { z } from 'zod'

export type TenancyBreakClauseModel =
  /** Representation of a tenancy break clause */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the break clause */ string | null | undefined
    created?: /** The date and time when the break clause was created */ string | null | undefined
    modified?: /** The date and time when the break clause last modified */ string | null | undefined
    clauseTypeId?: /** The identifier of the associated break clause */ string | null | undefined
    description?: /** The break clauses description */ string | null | undefined
    active?: /** The date the break clause became (or becomes) active */ string | null | undefined
    appliesTo?: /** The parties that the break clause applies to (landlord/tenant/mutual) */ string | null | undefined
    letterText?: /** Tenancy agreement text relating to the break clause */ string | null | undefined
    breakFrom?: TenancyBreakClauseBreakFromModel | null | undefined
    noticeRequired?: TenancyBreakClauseNoticeRequiredModel | null | undefined
    agreements?: TenancyAgreementModel | null | undefined
    tenancyId?: /** The unique identifier of the associated tenancy */ string | null | undefined
    _eTag?:
      | /** The ETag for the current version of the break clause. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a tenancy break clause */
export const tenancyBreakClauseModel =
  /** Representation of a tenancy break clause */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the break clause */ id: z.string().optional().nullable(),
    /** The date and time when the break clause was created */ created: z.string().optional().nullable(),
    /** The date and time when the break clause last modified */ modified: z.string().optional().nullable(),
    /** The identifier of the associated break clause */ clauseTypeId: z.string().optional().nullable(),
    /** The break clauses description */ description: z.string().optional().nullable(),
    /** The date the break clause became (or becomes) active */ active: z.string().optional().nullable(),
    /** The parties that the break clause applies to (landlord/tenant/mutual) */
    appliesTo: z.string().optional().nullable(),
    /** Tenancy agreement text relating to the break clause */ letterText: z.string().optional().nullable(),
    breakFrom: tenancyBreakClauseBreakFromModel.optional().nullable(),
    noticeRequired: tenancyBreakClauseNoticeRequiredModel.optional().nullable(),
    agreements: tenancyAgreementModel.optional().nullable(),
    /** The unique identifier of the associated tenancy */ tenancyId: z.string().optional().nullable(),
    /** The ETag for the current version of the break clause. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
