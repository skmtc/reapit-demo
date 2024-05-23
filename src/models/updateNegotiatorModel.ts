import { z } from 'zod'

/** Request body used to update an existing negotiator */
export const updateNegotiatorModel = z.object({
  /** The name of the negotiator */ name: z.string().nullable().optional(),
  /** The job title of the negotiator */ jobTitle: z.string().nullable().optional(),
  /** A flag determining whether or not the negotiator is active */ active: z.boolean().nullable().optional(),
  /** The work phone number of the negotiator */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the negotiator */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the negotiator */ email: z.string().nullable().optional(),
  /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
  /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryOfficeIds: z.array(z.string()).nullable().optional(),
  /** App specific metadata to set against the negotiator */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
