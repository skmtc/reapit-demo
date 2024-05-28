import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { tenancyAgreementModel, TenancyAgreementModel } from '@/models/tenancyAgreementModel.ts'

/** Representation of a tenancy allowance */
export const tenancyAllowanceModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the allowance */ id: z.string().nullable().optional(),
  /** The date and time when the allowance was created */ created: z.string().nullable().optional(),
  /** The date and time when the allowance last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated allowance */ typeId: z.string().nullable().optional(),
  /** The break clauses description */ description: z.string().nullable().optional(),
  /** The state of the allowance (allowed/notAllowed) */ state: z.string().nullable().optional(),
  agreements: tenancyAgreementModel.nullable().optional(),
  /** Tenancy agreement text that relates to the allowance */ letterText: z.string().nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the allowance. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy allowance */
export type TenancyAllowanceModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the allowance */ string | undefined
  created?: /** The date and time when the allowance was created */ string | undefined
  modified?: /** The date and time when the allowance last modified */ string | undefined
  typeId?: /** The identifier of the associated allowance */ string | undefined
  description?: /** The break clauses description */ string | undefined
  state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
  agreements?: TenancyAgreementModel | undefined
  letterText?: /** Tenancy agreement text that relates to the allowance */ string | undefined
  tenancyId?: /** The unique identifier of the associated tenancy */ string | undefined
  _eTag?: /** The ETag for the current version of the allowance. Used for managing update concurrency */
  string | undefined
}
