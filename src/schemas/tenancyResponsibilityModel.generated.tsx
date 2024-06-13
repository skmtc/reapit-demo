import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { TenancyAgreementModel, tenancyAgreementModel } from '@/schemas/tenancyAgreementModel.generated.tsx'
import { z } from 'zod'

export type TenancyResponsibilityModel =
  /** Representation of a tenancies responsibility */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the responsibility */ string | null | undefined
    created?: /** The date and time when the responsibility was created */ string | null | undefined
    modified?: /** The date and time when the responsibility last modified */ string | null | undefined
    typeId?: /** The identifier of the associated to the responsibility */ string | null | undefined
    description?: /** The responsibilities description */ string | null | undefined
    appliesTo?: /** The responsible party (landlord/tenant) */ string | null | undefined
    agreements?: TenancyAgreementModel | null | undefined
    letterText?: /** Tenancy agreement text that relates to the responsibility */ string | null | undefined
    tenancyId?: /** The unique identifier of the associated tenancy */ string | null | undefined
    _eTag?:
      | /** The ETag for the current version of the responsibility. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a tenancies responsibility */
export const tenancyResponsibilityModel =
  /** Representation of a tenancies responsibility */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the responsibility */ id: z.string().optional().nullable(),
    /** The date and time when the responsibility was created */ created: z.string().optional().nullable(),
    /** The date and time when the responsibility last modified */ modified: z.string().optional().nullable(),
    /** The identifier of the associated to the responsibility */ typeId: z.string().optional().nullable(),
    /** The responsibilities description */ description: z.string().optional().nullable(),
    /** The responsible party (landlord/tenant) */ appliesTo: z.string().optional().nullable(),
    agreements: tenancyAgreementModel.optional().nullable(),
    /** Tenancy agreement text that relates to the responsibility */ letterText: z.string().optional().nullable(),
    /** The unique identifier of the associated tenancy */ tenancyId: z.string().optional().nullable(),
    /** The ETag for the current version of the responsibility. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
