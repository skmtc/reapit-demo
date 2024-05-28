import { z } from 'zod'
import { appointmentContactModel, AppointmentContactModel } from '@/models/appointmentContactModel.ts'

/** An appointment attendee */
export const appointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
  /** The type of attendee */ type: z.string().nullable().optional(),
  /** A collection of contacts relating to the attendee */
  contacts: z.array(appointmentContactModel).nullable().optional(),
})
/** An appointment attendee */
export type AppointmentAttendeeModel = {
  id?: /** The unique identifier of the attendee */ string | undefined
  type?: /** The type of attendee */ string | undefined
  contacts?: /** A collection of contacts relating to the attendee */ Array<AppointmentContactModel> | undefined
}
