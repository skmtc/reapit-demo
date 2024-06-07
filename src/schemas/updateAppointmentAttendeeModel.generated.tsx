import { z } from 'zod'

/** Represents an external attendee on an appointment */
export const updateAppointmentAttendeeModel = /** Represents an external attendee on an appointment */
z.object({id: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
z.string().optional(), type: /** The type of attendee (applicant/contact/landlord/tenant) */
z.string().optional(), confirmed: /** A flag denoting whether or not the attendee has confirmed their attendance */
z.boolean().optional()});
/** Represents an external attendee on an appointment */
export type UpdateAppointmentAttendeeModel = /** Represents an external attendee on an appointment */
{id?: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
string | undefined, type?: /** The type of attendee (applicant/contact/landlord/tenant) */
string | undefined, confirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
boolean | undefined};