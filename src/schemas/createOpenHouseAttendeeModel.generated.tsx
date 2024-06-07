import { z } from 'zod'
import { createAppointmentAttendeeModel, CreateAppointmentAttendeeModel } from '@/schemas/createAppointmentAttendeeModel.generated.tsx'

/** Request body used to create a new open house attendee */
export const createOpenHouseAttendeeModel = /** Request body used to create a new open house attendee */
z.object({interestLevel: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
z.string().optional(), notes: /** Notes on this open house attendee */
z.string().optional(), attendee: createAppointmentAttendeeModel.optional()});
/** Request body used to create a new open house attendee */
export type CreateOpenHouseAttendeeModel = /** Request body used to create a new open house attendee */
{interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
string | undefined, notes?: /** Notes on this open house attendee */
string | undefined, attendee?: CreateAppointmentAttendeeModel | undefined};