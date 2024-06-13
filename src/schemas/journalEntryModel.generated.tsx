import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type JournalEntryModel =
  /** Representation of a journal entry */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    created?: /** The date and time when the journal entry was created */ string | null | undefined
    propertyId?:
      | /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
      string
      | null
      | undefined
    associatedType?:
      | /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
      string
      | null
      | undefined
    associatedId?:
      | /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
      string
      | null
      | undefined
    typeId?: /** The type of journal entry */ string | null | undefined
    negotiatorId?: /** The unique identifier of the negotiator that created the entry */ string | null | undefined
    description?: /** The textual description of the journal entry event */ string | null | undefined
  }
/** Representation of a journal entry */
export const journalEntryModel =
  /** Representation of a journal entry */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The date and time when the journal entry was created */ created: z.string().optional().nullable(),
    /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
    propertyId: z.string().optional().nullable(),
    /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
    associatedType: z.string().optional().nullable(),
    /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
    associatedId: z.string().optional().nullable(),
    /** The type of journal entry */ typeId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that created the entry */
    negotiatorId: z.string().optional().nullable(),
    /** The textual description of the journal entry event */ description: z.string().optional().nullable(),
  })
