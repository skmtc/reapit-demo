import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type LandlordContactRelationshipModel =
  /** Representation of relationship between a landlord and a contact or company */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the landlord relationship */ string | null | undefined
    landlordId?: /** The unique identifier of the landlord */ string | null | undefined
    created?: /** The date and time when the relationship was created */ string | null | undefined
    modified?: /** The date and time when the relationship was last modified */ string | null | undefined
    associatedType?: /** The type of related entity (contact/company) */ string | null | undefined
    associatedId?: /** The unique identifier of the related contact or company */ string | null | undefined
    isMain?:
      | /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
      boolean
      | null
      | undefined
  }
/** Representation of relationship between a landlord and a contact or company */
export const landlordContactRelationshipModel =
  /** Representation of relationship between a landlord and a contact or company */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the landlord relationship */ id: z.string().optional().nullable(),
    /** The unique identifier of the landlord */ landlordId: z.string().optional().nullable(),
    /** The date and time when the relationship was created */ created: z.string().optional().nullable(),
    /** The date and time when the relationship was last modified */ modified: z.string().optional().nullable(),
    /** The type of related entity (contact/company) */ associatedType: z.string().optional().nullable(),
    /** The unique identifier of the related contact or company */ associatedId: z.string().optional().nullable(),
    /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
    isMain: z.boolean().optional().nullable(),
  })
