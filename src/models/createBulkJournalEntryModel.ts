import { z } from 'zod'

/** Request body to create bulk journal entry */
export const createBulkJournalEntryModel = z.object({
  /** Collection of journal entries */
  createJournalEntry: z
    .array(
      /** Request body to create a journal entry */
      z.object({
        /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
        typeId: z.string().nullable().optional(),
        /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
        propertyId: z.string().nullable().optional(),
        /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
        associatedType: z.string().nullable().optional(),
        /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
        associatedId: z.string().nullable().optional(),
        /** The textual description of the journal entry event */ description: z.string(),
        /** The identifier of the negotiator recording the journal entry */
        negotiatorId: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
