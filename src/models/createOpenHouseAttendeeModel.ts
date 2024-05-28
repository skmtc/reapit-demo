import { z } from 'zod'
import {
  createAppointmentAttendeeModel,
  CreateAppointmentAttendeeModel,
} from '@/models/createAppointmentAttendeeModel.ts'

/** Request body used to create a new open house attendee */
export const createOpenHouseAttendeeModel = z.object({
  /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  interestLevel: z.string().nullable().optional(),
  /** Notes on this open house attendee */ notes: z.string().nullable().optional(),
  attendee: createAppointmentAttendeeModel.nullable().optional(),
})
/** Request body used to create a new open house attendee */
export type CreateOpenHouseAttendeeModel = {
  interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  string | undefined
  notes?: /** Notes on this open house attendee */ string | undefined
  attendee?: CreateAppointmentAttendeeModel | undefined
}
