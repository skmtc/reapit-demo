import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type TenancyCheckModel =
  /** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the tenancy check */ string | null | undefined
    created?: /** The date and time when the tenancy check was created */ string | null | undefined
    modified?: /** The date and time when the tenancy check was last modified */ string | null | undefined
    description?: /** Textual description of what the tenancy check relates to */ string | null | undefined
    status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | null | undefined
    type?: /** The type of the tenancy check (preTenancy/postTenancy) */ string | null | undefined
    checkTypeId?:
      | /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
      string
      | null
      | undefined
    tenancyId?: /** The unique identifier of the tenancy that this check relates to */ string | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the tenancy check */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export const tenancyCheckModel =
  /** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the tenancy check */ id: z.string().optional().nullable(),
    /** The date and time when the tenancy check was created */ created: z.string().optional().nullable(),
    /** The date and time when the tenancy check was last modified */ modified: z.string().optional().nullable(),
    /** Textual description of what the tenancy check relates to */ description: z.string().optional().nullable(),
    /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    status: z.string().optional().nullable(),
    /** The type of the tenancy check (preTenancy/postTenancy) */ type: z.string().optional().nullable(),
    /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
    checkTypeId: z.string().optional().nullable(),
    /** The unique identifier of the tenancy that this check relates to */ tenancyId: z.string().optional().nullable(),
    /** App specific metadata that has been set against the tenancy check */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
