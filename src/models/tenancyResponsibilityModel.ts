import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { tenancyAgreementModel, TenancyAgreementModel } from '@/models/tenancyAgreementModel.ts'

/** Representation of a tenancies responsibility */
export const tenancyResponsibilityModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the responsibility */ id: z.string().nullable().optional(),
  /** The date and time when the responsibility was created */ created: z.string().nullable().optional(),
  /** The date and time when the responsibility last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated to the responsibility */ typeId: z.string().nullable().optional(),
  /** The responsibilities description */ description: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant) */ appliesTo: z.string().nullable().optional(),
  agreements: tenancyAgreementModel.nullable().optional(),
  /** Tenancy agreement text that relates to the responsibility */ letterText: z.string().nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the responsibility. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancies responsibility */
export type TenancyResponsibilityModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the responsibility */ string | undefined
  created?: /** The date and time when the responsibility was created */ string | undefined
  modified?: /** The date and time when the responsibility last modified */ string | undefined
  typeId?: /** The identifier of the associated to the responsibility */ string | undefined
  description?: /** The responsibilities description */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: TenancyAgreementModel | undefined
  letterText?: /** Tenancy agreement text that relates to the responsibility */ string | undefined
  tenancyId?: /** The unique identifier of the associated tenancy */ string | undefined
  _eTag?: /** The ETag for the current version of the responsibility. Used for managing update concurrency */
  string | undefined
}
