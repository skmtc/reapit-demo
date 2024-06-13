import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { TenancyAgreementModel, tenancyAgreementModel } from '@/schemas/tenancyAgreementModel.generated.tsx'
import { z } from 'zod'

export type TenancyAllowanceModel =
  /** Representation of a tenancy allowance */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the allowance */ string | null | undefined
    created?: /** The date and time when the allowance was created */ string | null | undefined
    modified?: /** The date and time when the allowance last modified */ string | null | undefined
    typeId?: /** The identifier of the associated allowance */ string | null | undefined
    description?: /** The break clauses description */ string | null | undefined
    state?: /** The state of the allowance (allowed/notAllowed) */ string | null | undefined
    agreements?: TenancyAgreementModel | null | undefined
    letterText?: /** Tenancy agreement text that relates to the allowance */ string | null | undefined
    tenancyId?: /** The unique identifier of the associated tenancy */ string | null | undefined
    _eTag?:
      | /** The ETag for the current version of the allowance. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a tenancy allowance */
export const tenancyAllowanceModel =
  /** Representation of a tenancy allowance */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the allowance */ id: z.string().optional().nullable(),
    /** The date and time when the allowance was created */ created: z.string().optional().nullable(),
    /** The date and time when the allowance last modified */ modified: z.string().optional().nullable(),
    /** The identifier of the associated allowance */ typeId: z.string().optional().nullable(),
    /** The break clauses description */ description: z.string().optional().nullable(),
    /** The state of the allowance (allowed/notAllowed) */ state: z.string().optional().nullable(),
    agreements: tenancyAgreementModel.optional().nullable(),
    /** Tenancy agreement text that relates to the allowance */ letterText: z.string().optional().nullable(),
    /** The unique identifier of the associated tenancy */ tenancyId: z.string().optional().nullable(),
    /** The ETag for the current version of the allowance. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
