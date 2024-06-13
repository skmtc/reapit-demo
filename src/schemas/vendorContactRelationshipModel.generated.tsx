import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type VendorContactRelationshipModel =
  /** Representation of a relationship between a vendor and a contact or company */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the vendor relationship */ string | null | undefined
    vendorId?: /** The unique identifier of the vendor */ string | null | undefined
    created?: /** The date and time when the relationship was created */ string | null | undefined
    modified?: /** The date and time when the relationship was last modified */ string | null | undefined
    associatedType?: /** The type of related entity (contact/company) */ string | null | undefined
    associatedId?: /** The unique identifier of the related contact or company */ string | null | undefined
    isMain?:
      | /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
      boolean
      | null
      | undefined
  }
/** Representation of a relationship between a vendor and a contact or company */
export const vendorContactRelationshipModel =
  /** Representation of a relationship between a vendor and a contact or company */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the vendor relationship */ id: z.string().optional().nullable(),
    /** The unique identifier of the vendor */ vendorId: z.string().optional().nullable(),
    /** The date and time when the relationship was created */ created: z.string().optional().nullable(),
    /** The date and time when the relationship was last modified */ modified: z.string().optional().nullable(),
    /** The type of related entity (contact/company) */ associatedType: z.string().optional().nullable(),
    /** The unique identifier of the related contact or company */ associatedId: z.string().optional().nullable(),
    /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
    isMain: z.boolean().optional().nullable(),
  })
