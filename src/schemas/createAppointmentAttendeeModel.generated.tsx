import { z } from 'zod'

/** Represents an external attendee on an appointment */
export const createAppointmentAttendeeModel = /** Represents an external attendee on an appointment */
z.object({id: /** The unique identifier of the attendee */
z.string().optional(), type: /** The type of attendee (applicant/contact/landlord/tenant) */
z.string().optional()});
/** Represents an external attendee on an appointment */
export type CreateAppointmentAttendeeModel = /** Represents an external attendee on an appointment */
{id?: /** The unique identifier of the attendee */
string | undefined, type?: /** The type of attendee (applicant/contact/landlord/tenant) */
string | undefined};