import { z } from 'zod'
import {
  createAppointmentAttendeeModel,
  CreateAppointmentAttendeeModel,
} from '@/schemas/createAppointmentAttendeeModel.generated.tsx'

/** Request body used to create a new open house attendee */
export const createOpenHouseAttendeeModel =
  /** Request body used to create a new open house attendee */
  z.object({
    /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    interestLevel: z.string().optional().nullable(),
    /** Notes on this open house attendee */ notes: z.string().optional().nullable(),
    attendee: createAppointmentAttendeeModel.optional().nullable(),
  })
/** Request body used to create a new open house attendee */
export type CreateOpenHouseAttendeeModel =
  /** Request body used to create a new open house attendee */
  {
    interestLevel?:
      | /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
      string
      | null
      | undefined
    notes?: /** Notes on this open house attendee */ string | null | undefined
    attendee?: CreateAppointmentAttendeeModel | null | undefined
  }
