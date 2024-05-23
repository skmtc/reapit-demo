import { z } from 'zod'

export const journalEntryModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a journal entry */
      z.object({
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
        /** The unique identifier of the negotiator that created the entry */
        negotiatorId: z.string().nullable().optional(),
        /** The textual description of the journal entry event */ description: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
