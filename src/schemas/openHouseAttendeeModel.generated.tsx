import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { appointmentAttendeeModel, AppointmentAttendeeModel } from '@/schemas/appointmentAttendeeModel.generated.tsx'

/** Representation of a calendar appointment */
export const openHouseAttendeeModel = /** Representation of a calendar appointment */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the open house attendee */
z.string().optional(), openHouseId: /** The unique identifier of the open house appointment */
z.string().optional(), created: /** The date and time when the open house attendee was created */
z.string().optional(), modified: /** The date and time when the open house attendee was last modified */
z.string().optional(), notes: /** The notes taken regarding the open house attendee */
z.string().optional(), interestLevel: /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
z.string().optional(), attendee: appointmentAttendeeModel.optional(), _eTag: /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
z.string().optional()});
/** Representation of a calendar appointment */
export type OpenHouseAttendeeModel = /** Representation of a calendar appointment */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the open house attendee */
string | undefined, openHouseId?: /** The unique identifier of the open house appointment */
string | undefined, created?: /** The date and time when the open house attendee was created */
string | undefined, modified?: /** The date and time when the open house attendee was last modified */
string | undefined, notes?: /** The notes taken regarding the open house attendee */
string | undefined, interestLevel?: /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
string | undefined, attendee?: AppointmentAttendeeModel | undefined, _eTag?: /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
string | undefined};