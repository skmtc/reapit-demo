import { z } from 'zod'
import { appointmentContactModel, AppointmentContactModel } from '@/schemas/appointmentContactModel.generated.tsx'

/** An appointment attendee */
export const appointmentAttendeeModel =
  /** An appointment attendee */
  z.object({
    /** The unique identifier of the attendee */ id: z.string().optional().nullable(),
    /** The type of attendee */ type: z.string().optional().nullable(),
    /** A collection of contacts relating to the attendee */
    contacts: z.array(appointmentContactModel).optional().nullable(),
  })
/** An appointment attendee */
export type AppointmentAttendeeModel =
  /** An appointment attendee */
  {
    id?: /** The unique identifier of the attendee */ string | null | undefined
    type?: /** The type of attendee */ string | null | undefined
    contacts?:
      | /** A collection of contacts relating to the attendee */
      Array<AppointmentContactModel>
      | null
      | undefined
  }
