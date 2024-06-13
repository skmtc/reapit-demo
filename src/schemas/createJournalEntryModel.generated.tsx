import { z } from 'zod'

/** Request body to create a journal entry */
export const createJournalEntryModel =
  /** Request body to create a journal entry */
  z.object({
    /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
    typeId: z.string().optional().nullable(),
    /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
    propertyId: z.string().optional().nullable(),
    /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
    associatedType: z.string().optional().nullable(),
    /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
    associatedId: z.string().optional().nullable(),
    /** The textual description of the journal entry event */ description: z.string(),
    /** The identifier of the negotiator recording the journal entry */ negotiatorId: z.string().optional().nullable(),
  })
/** Request body to create a journal entry */
export type CreateJournalEntryModel =
  /** Request body to create a journal entry */
  {
    typeId?:
      | /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
      string
      | null
      | undefined
    propertyId?:
      | /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
      string
      | null
      | undefined
    associatedType?:
      | /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
      string
      | null
      | undefined
    associatedId?:
      | /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
      string
      | null
      | undefined
    description: /** The textual description of the journal entry event */ string
    negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | null | undefined
  }
