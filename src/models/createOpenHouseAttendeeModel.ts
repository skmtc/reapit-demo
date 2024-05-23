import { z } from 'zod'

/** Request body used to create a new open house attendee */
export const createOpenHouseAttendeeModel = z.object({
  /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  interestLevel: z.string().nullable().optional(),
  /** Notes on this open house attendee */ notes: z.string().nullable().optional(),
  /** Represents an external attendee on an appointment */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
      /** The type of attendee (applicant/contact/landlord/tenant) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})
