import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { GuarantorModel, guarantorModel } from '@/schemas/guarantorModel.generated.tsx'
import { ReferenceModel, referenceModel } from '@/schemas/referenceModel.generated.tsx'
import { z } from 'zod'

export type TenancyContactRelationshipModel =
  /** Representation of a relationship between a tenancy and a contact or company */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the tenancy relationship */ string | null | undefined
    created?: /** The date and time when the relationship was created */ string | null | undefined
    modified?: /** The date and time when the relationship was last modified */ string | null | undefined
    tenancyId?: /** The unique identifier of the tenancy */ string | null | undefined
    associatedType?: /** The type of related entity (contact/company) */ string | null | undefined
    associatedId?: /** The unique identifier of the related contact or company */ string | null | undefined
    isMain?:
      | /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
      boolean
      | null
      | undefined
    fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | null | undefined
    guarantors?: /** Collection of guarantors recorded for this relationship */ Array<GuarantorModel> | null | undefined
    references?: /** Collection of references recorded for this relationship */ Array<ReferenceModel> | null | undefined
  }
/** Representation of a relationship between a tenancy and a contact or company */
export const tenancyContactRelationshipModel =
  /** Representation of a relationship between a tenancy and a contact or company */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the tenancy relationship */ id: z.string().optional().nullable(),
    /** The date and time when the relationship was created */ created: z.string().optional().nullable(),
    /** The date and time when the relationship was last modified */ modified: z.string().optional().nullable(),
    /** The unique identifier of the tenancy */ tenancyId: z.string().optional().nullable(),
    /** The type of related entity (contact/company) */ associatedType: z.string().optional().nullable(),
    /** The unique identifier of the related contact or company */ associatedId: z.string().optional().nullable(),
    /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
    isMain: z.boolean().optional().nullable(),
    /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().optional().nullable(),
    /** Collection of guarantors recorded for this relationship */
    guarantors: z.array(guarantorModel).optional().nullable(),
    /** Collection of references recorded for this relationship */
    references: z.array(referenceModel).optional().nullable(),
  })
