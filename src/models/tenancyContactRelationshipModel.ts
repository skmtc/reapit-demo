import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { guarantorModel, GuarantorModel } from '@/models/guarantorModel.ts'
import { referenceModel, ReferenceModel } from '@/models/referenceModel.ts'

/** Representation of a relationship between a tenancy and a contact or company */
export const tenancyContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the tenancy */ tenancyId: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
  isMain: z.boolean().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
  /** Collection of guarantors recorded for this relationship */
  guarantors: z.array(guarantorModel).nullable().optional(),
  /** Collection of references recorded for this relationship */
  references: z.array(referenceModel).nullable().optional(),
})
/** Representation of a relationship between a tenancy and a contact or company */
export type TenancyContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy relationship */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
  boolean | undefined
  fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | undefined
  guarantors?: /** Collection of guarantors recorded for this relationship */ Array<GuarantorModel> | undefined
  references?: /** Collection of references recorded for this relationship */ Array<ReferenceModel> | undefined
}
