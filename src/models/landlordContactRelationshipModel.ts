import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of relationship between a landlord and a contact or company */
export const landlordContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the landlord relationship */ id: z.string().nullable().optional(),
  /** The unique identifier of the landlord */ landlordId: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
  isMain: z.boolean().nullable().optional(),
})
/** Representation of relationship between a landlord and a contact or company */
export type LandlordContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the landlord relationship */ string | undefined
  landlordId?: /** The unique identifier of the landlord */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
  boolean | undefined
}
