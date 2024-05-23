import { z } from 'zod'

/** Representation of a journal entry */
export const journalEntryModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
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
