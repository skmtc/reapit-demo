import { z } from 'zod'

/** Request body used to update an existing negotiator */
export const updateNegotiatorModel = /** Request body used to update an existing negotiator */
z.object({name: /** The name of the negotiator */
z.string().optional(), jobTitle: /** The job title of the negotiator */
z.string().optional(), active: /** A flag determining whether or not the negotiator is active */
z.boolean().optional(), workPhone: /** The work phone number of the negotiator */
z.string().optional(), mobilePhone: /** The mobile phone number of the negotiator */
z.string().optional(), email: /** The email address of the negotiator */
z.string().optional(), diaryNegotiatorIds: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
z.array(z.string()).optional(), diaryOfficeIds: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
z.array(z.string()).optional(), metadata: /** App specific metadata to set against the negotiator */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing negotiator */
export type UpdateNegotiatorModel = /** Request body used to update an existing negotiator */
{name?: /** The name of the negotiator */
string | undefined, jobTitle?: /** The job title of the negotiator */
string | undefined, active?: /** A flag determining whether or not the negotiator is active */
boolean | undefined, workPhone?: /** The work phone number of the negotiator */
string | undefined, mobilePhone?: /** The mobile phone number of the negotiator */
string | undefined, email?: /** The email address of the negotiator */
string | undefined, diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
Array<string> | undefined, diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
Array<string> | undefined, metadata?: /** App specific metadata to set against the negotiator */
Record<string, Record<string, never>> | undefined};