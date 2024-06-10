import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import {
  additionalContactDetailModel,
  AdditionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'

/** Representation of a negotiator */
export const negotiatorModel =
  /** Representation of a negotiator */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the negotiator */ id: z.string().optional().nullable(),
    /** The date and time when the negotiator was created */ created: z.string().optional().nullable(),
    /** The date and time when the negotiator was last modified */ modified: z.string().optional().nullable(),
    /** The name of the negotiator */ name: z.string().optional().nullable(),
    /** The job title of the negotiator */ jobTitle: z.string().optional().nullable(),
    /** The unique identifier of the office that the negotiator is attached to */
    officeId: z.string().optional().nullable(),
    /** The work phone number of the negotiator */ workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the negotiator */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the negotiator */ email: z.string().optional().nullable(),
    /** The URL of the optional negotiator profile image */ profileImageUrl: z.string().optional().nullable(),
    /** A flag determining whether or not the negotiator is active */ active: z.boolean().optional().nullable(),
    /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    diaryNegotiatorIds: z.array(z.string()).optional().nullable(),
    /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    diaryOfficeIds: z.array(z.string()).optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional().nullable(),
    /** App specific metadata that has been set against the negotiator */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the negotiator. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
export type NegotiatorModel =
  /** Representation of a negotiator */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the negotiator */ string | null | undefined
    created?: /** The date and time when the negotiator was created */ string | null | undefined
    modified?: /** The date and time when the negotiator was last modified */ string | null | undefined
    name?: /** The name of the negotiator */ string | null | undefined
    jobTitle?: /** The job title of the negotiator */ string | null | undefined
    officeId?: /** The unique identifier of the office that the negotiator is attached to */ string | null | undefined
    workPhone?: /** The work phone number of the negotiator */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the negotiator */ string | null | undefined
    email?: /** The email address of the negotiator */ string | null | undefined
    profileImageUrl?: /** The URL of the optional negotiator profile image */ string | null | undefined
    active?: /** A flag determining whether or not the negotiator is active */ boolean | null | undefined
    diaryNegotiatorIds?:
      | /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
      Array<string>
      | null
      | undefined
    diaryOfficeIds?:
      | /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
      Array<string>
      | null
      | undefined
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalContactDetailModel>
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against the negotiator */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the negotiator. Used for managing update concurrency */
      string
      | null
      | undefined
  }
