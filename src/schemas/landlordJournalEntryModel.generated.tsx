import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type LandlordJournalEntryModel =
  /** Representation of a landlord related journal entry */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    created?: /** The date and time when the journal entry was created */ string | null | undefined
    propertyId?:
      | /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
      string
      | null
      | undefined
    landlordId?: /** The unique identifier of the landlord the journal entry is related to. */ string | null | undefined
    type?: /** The type of journal entry */ string | null | undefined
    negotiatorId?: /** The unique identifier of the negotiator that created the entry */ string | null | undefined
    description?: /** The textual description of the journal entry event */ string | null | undefined
  }
/** Representation of a landlord related journal entry */
export const landlordJournalEntryModel =
  /** Representation of a landlord related journal entry */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The date and time when the journal entry was created */ created: z.string().optional().nullable(),
    /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the landlord the journal entry is related to. */
    landlordId: z.string().optional().nullable(),
    /** The type of journal entry */ type: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that created the entry */
    negotiatorId: z.string().optional().nullable(),
    /** The textual description of the journal entry event */ description: z.string().optional().nullable(),
  })
