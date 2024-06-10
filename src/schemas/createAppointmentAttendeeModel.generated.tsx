import { z } from 'zod'

/** Represents an external attendee on an appointment */
export const createAppointmentAttendeeModel =
  /** Represents an external attendee on an appointment */
  z.object({
    /** The unique identifier of the attendee */ id: z.string().optional().nullable(),
    /** The type of attendee (applicant/contact/landlord/tenant) */ type: z.string().optional().nullable(),
  })
/** Represents an external attendee on an appointment */
export type CreateAppointmentAttendeeModel =
  /** Represents an external attendee on an appointment */
  {
    id?: /** The unique identifier of the attendee */ string | null | undefined
    type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | null | undefined
  }
