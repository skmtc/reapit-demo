import { z } from 'zod'

/** Request body to create a journal entry */
export const createJournalEntryModel = z.object({
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
  /** The identifier of the negotiator recording the journal entry */ negotiatorId: z.string().nullable().optional(),
})
/** Request body to create a journal entry */
export type CreateJournalEntryModel = {
  typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
  string | undefined
  propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
  string | undefined
  associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
  string | undefined
  associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
  string | undefined
  description: /** The textual description of the journal entry event */ string
  negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | undefined
}
