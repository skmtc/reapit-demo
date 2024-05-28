import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/models/additionalContactDetailModel.ts'

/** Representation of a negotiator */
export const negotiatorModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
  /** App specific metadata that has been set against the negotiator */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the negotiator. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a negotiator */
export type NegotiatorModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the negotiator */ string | undefined
  created?: /** The date and time when the negotiator was created */ string | undefined
  modified?: /** The date and time when the negotiator was last modified */ string | undefined
  name?: /** The name of the negotiator */ string | undefined
  jobTitle?: /** The job title of the negotiator */ string | undefined
  officeId?: /** The unique identifier of the office that the negotiator is attached to */ string | undefined
  workPhone?: /** The work phone number of the negotiator */ string | undefined
  mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined
  email?: /** The email address of the negotiator */ string | undefined
  profileImageUrl?: /** The URL of the optional negotiator profile image */ string | undefined
  active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined
  diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
  metadata?: /** App specific metadata that has been set against the negotiator */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the negotiator. Used for managing update concurrency */
  string | undefined
}
