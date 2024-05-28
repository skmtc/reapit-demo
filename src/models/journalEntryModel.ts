import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a journal entry */
export const journalEntryModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The date and time when the journal entry was created */ created: z.string().nullable().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  propertyId: z.string().nullable().optional(),
  /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
  associatedType: z.string().nullable().optional(),
  /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
  associatedId: z.string().nullable().optional(),
  /** The type of journal entry */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that created the entry */ negotiatorId: z.string().nullable().optional(),
  /** The textual description of the journal entry event */ description: z.string().nullable().optional(),
})
/** Representation of a journal entry */
export type JournalEntryModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  created?: /** The date and time when the journal entry was created */ string | undefined
  propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  string | undefined
  associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
  string | undefined
  associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
  string | undefined
  typeId?: /** The type of journal entry */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that created the entry */ string | undefined
  description?: /** The textual description of the journal entry event */ string | undefined
}
