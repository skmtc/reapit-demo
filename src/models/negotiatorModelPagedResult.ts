import { z } from 'zod'

export const negotiatorModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a negotiator */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the negotiator */ id: z.string().nullable().optional(),
        /** The date and time when the negotiator was created */ created: z.string().nullable().optional(),
        /** The date and time when the negotiator was last modified */ modified: z.string().nullable().optional(),
        /** The name of the negotiator */ name: z.string().nullable().optional(),
        /** The job title of the negotiator */ jobTitle: z.string().nullable().optional(),
        /** The unique identifier of the office that the negotiator is attached to */
        officeId: z.string().nullable().optional(),
        /** The work phone number of the negotiator */ workPhone: z.string().nullable().optional(),
        /** The mobile phone number of the negotiator */ mobilePhone: z.string().nullable().optional(),
        /** The email address of the negotiator */ email: z.string().nullable().optional(),
        /** The URL of the optional negotiator profile image */ profileImageUrl: z.string().nullable().optional(),
        /** A flag determining whether or not the negotiator is active */ active: z.boolean().nullable().optional(),
        /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
        diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
        /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
        diaryOfficeIds: z.array(z.string()).nullable().optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().nullable().optional(),
              /** The contact detail */ value: z.string().nullable().optional(),
            }),
          )
          .nullable()
          .optional(),
        /** App specific metadata that has been set against the negotiator */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** The ETag for the current version of the negotiator. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
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
