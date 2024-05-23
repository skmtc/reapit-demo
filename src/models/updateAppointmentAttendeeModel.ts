import { z } from 'zod'

/** Represents an external attendee on an appointment */
export const updateAppointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
  id: z.string().nullable().optional(),
  /** The type of attendee (applicant/contact/landlord/tenant) */ type: z.string().nullable().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  confirmed: z.boolean().nullable().optional(),
})
