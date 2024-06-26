import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

/** Representation of the roles that an individual contacts possesses */
export type ContactRoleModel =
  /** Representation of the roles that an individual contacts possesses */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the relationship */ string | null | undefined
    created?: /** The date and time when the relationship was created */ string | null | undefined
    modified?: /** The date and time when the relationship was last modified */ string | null | undefined
    contactId?: /** The unique identifier of the related contact */ string | null | undefined
    associatedType?:
      | /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
      string
      | null
      | undefined
    associatedId?: /** The unique identifier of the related entity */ string | null | undefined
    fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | null | undefined
  }
/** Representation of the roles that an individual contacts possesses */
export const contactRoleModel =
  /** Representation of the roles that an individual contacts possesses */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the relationship */ id: z.string().optional().nullable(),
    /** The date and time when the relationship was created */ created: z.string().optional().nullable(),
    /** The date and time when the relationship was last modified */ modified: z.string().optional().nullable(),
    /** The unique identifier of the related contact */ contactId: z.string().optional().nullable(),
    /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
    associatedType: z.string().optional().nullable(),
    /** The unique identifier of the related entity */ associatedId: z.string().optional().nullable(),
    /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().optional().nullable(),
  })
