import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/schemas/additionalContactDetailModel.generated.tsx'

/** Representation of a negotiator */
export const negotiatorModel = /** Representation of a negotiator */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the negotiator */
z.string().optional(), created: /** The date and time when the negotiator was created */
z.string().optional(), modified: /** The date and time when the negotiator was last modified */
z.string().optional(), name: /** The name of the negotiator */
z.string().optional(), jobTitle: /** The job title of the negotiator */
z.string().optional(), officeId: /** The unique identifier of the office that the negotiator is attached to */
z.string().optional(), workPhone: /** The work phone number of the negotiator */
z.string().optional(), mobilePhone: /** The mobile phone number of the negotiator */
z.string().optional(), email: /** The email address of the negotiator */
z.string().optional(), profileImageUrl: /** The URL of the optional negotiator profile image */
z.string().optional(), active: /** A flag determining whether or not the negotiator is active */
z.boolean().optional(), diaryNegotiatorIds: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
z.array(z.string()).optional(), diaryOfficeIds: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
z.array(z.string()).optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalContactDetailModel).optional(), metadata: /** App specific metadata that has been set against the negotiator */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the negotiator. Used for managing update concurrency */
z.string().optional()});
/** Representation of a negotiator */
export type NegotiatorModel = /** Representation of a negotiator */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the negotiator */
string | undefined, created?: /** The date and time when the negotiator was created */
string | undefined, modified?: /** The date and time when the negotiator was last modified */
string | undefined, name?: /** The name of the negotiator */
string | undefined, jobTitle?: /** The job title of the negotiator */
string | undefined, officeId?: /** The unique identifier of the office that the negotiator is attached to */
string | undefined, workPhone?: /** The work phone number of the negotiator */
string | undefined, mobilePhone?: /** The mobile phone number of the negotiator */
string | undefined, email?: /** The email address of the negotiator */
string | undefined, profileImageUrl?: /** The URL of the optional negotiator profile image */
string | undefined, active?: /** A flag determining whether or not the negotiator is active */
boolean | undefined, diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
Array<string> | undefined, diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
Array<string> | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalContactDetailModel> | undefined, metadata?: /** App specific metadata that has been set against the negotiator */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the negotiator. Used for managing update concurrency */
string | undefined};