import { z } from 'zod'

/** Represents an external attendee on an appointment */
export const createAppointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
  /** The type of attendee (applicant/contact/landlord/tenant) */ type: z.string().nullable().optional(),
})
