import { z } from 'zod'

/** Request body used to create a new negotiator */
export const createNegotiatorModel =
  /** Request body used to create a new negotiator */
  z.object({
    /** The name of the negotiator */ name: z.string(),
    /** The job title of the negotiator */ jobTitle: z.string().optional(),
    /** A flag determining whether or not the negotiator is active */ active: z.boolean().optional(),
    /** The unique identifier of the office that the negotiator is attached to */ officeId: z.string(),
    /** The work phone number of the negotiator */ workPhone: z.string().optional(),
    /** The mobile phone number of the negotiator */ mobilePhone: z.string().optional(),
    /** The email address of the negotiator */ email: z.string().optional(),
    /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    diaryNegotiatorIds: z.array(z.string()).optional(),
    /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    diaryOfficeIds: z.array(z.string()).optional(),
    /** App specific metadata to set against the negotiator */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new negotiator */
export type CreateNegotiatorModel =
  /** Request body used to create a new negotiator */
  {
    name: /** The name of the negotiator */ string
    jobTitle?: /** The job title of the negotiator */ string | undefined
    active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined
    officeId: /** The unique identifier of the office that the negotiator is attached to */ string
    workPhone?: /** The work phone number of the negotiator */ string | undefined
    mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined
    email?: /** The email address of the negotiator */ string | undefined
    diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined
    diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined
    metadata?: /** App specific metadata to set against the negotiator */
    Record<string, Record<string, never>> | undefined
  }
