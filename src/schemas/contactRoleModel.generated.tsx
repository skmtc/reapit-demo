import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of the roles that an individual contacts possesses */
export const contactRoleModel =
  /** Representation of the roles that an individual contacts possesses */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the relationship */ id: z.string().optional(),
    /** The date and time when the relationship was created */ created: z.string().optional(),
    /** The date and time when the relationship was last modified */ modified: z.string().optional(),
    /** The unique identifier of the related contact */ contactId: z.string().optional(),
    /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */ associatedType: z.string().optional(),
    /** The unique identifier of the related entity */ associatedId: z.string().optional(),
    /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().optional(),
  })
/** Representation of the roles that an individual contacts possesses */
export type ContactRoleModel =
  /** Representation of the roles that an individual contacts possesses */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the relationship */ string | undefined
    created?: /** The date and time when the relationship was created */ string | undefined
    modified?: /** The date and time when the relationship was last modified */ string | undefined
    contactId?: /** The unique identifier of the related contact */ string | undefined
    associatedType?: /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */ string | undefined
    associatedId?: /** The unique identifier of the related entity */ string | undefined
    fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | undefined
  }
