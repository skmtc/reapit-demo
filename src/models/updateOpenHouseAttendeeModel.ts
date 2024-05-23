import { z } from 'zod'

/** Request body used to upda te a new open house attendee */
export const updateOpenHouseAttendeeModel = z.object({
  /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  interestLevel: z.string().nullable().optional(),
  /** Notes on this open house attendee */ notes: z.string().nullable().optional(),
})
