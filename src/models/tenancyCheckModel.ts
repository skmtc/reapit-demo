import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export const tenancyCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy check */ id: z.string().nullable().optional(),
  /** The date and time when the tenancy check was created */ created: z.string().nullable().optional(),
  /** The date and time when the tenancy check was last modified */ modified: z.string().nullable().optional(),
  /** Textual description of what the tenancy check relates to */ description: z.string().nullable().optional(),
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** The type of the tenancy check (preTenancy/postTenancy) */ type: z.string().nullable().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that this check relates to */ tenancyId: z.string().nullable().optional(),
  /** App specific metadata that has been set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export type TenancyCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy check */ string | undefined
  created?: /** The date and time when the tenancy check was created */ string | undefined
  modified?: /** The date and time when the tenancy check was last modified */ string | undefined
  description?: /** Textual description of what the tenancy check relates to */ string | undefined
  status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
  type?: /** The type of the tenancy check (preTenancy/postTenancy) */ string | undefined
  checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  string | undefined
  tenancyId?: /** The unique identifier of the tenancy that this check relates to */ string | undefined
  metadata?: /** App specific metadata that has been set against the tenancy check */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  string | undefined
}
