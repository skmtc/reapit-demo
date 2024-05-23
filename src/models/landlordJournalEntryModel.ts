import { z } from 'zod'

/** Representation of a landlord related journal entry */
export const landlordJournalEntryModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The date and time when the journal entry was created */ created: z.string().nullable().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the landlord the journal entry is related to. */
  landlordId: z.string().nullable().optional(),
  /** The type of journal entry */ type: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that created the entry */ negotiatorId: z.string().nullable().optional(),
  /** The textual description of the journal entry event */ description: z.string().nullable().optional(),
})
