import { z } from 'zod'
import { appointmentContactModel, AppointmentContactModel } from '@/schemas/appointmentContactModel.generated.tsx'

/** An appointment attendee */
export const appointmentAttendeeModel =
  /** An appointment attendee */
  z.object({
    /** The unique identifier of the attendee */ id: z.string().optional(),
    /** The type of attendee */ type: z.string().optional(),
    /** A collection of contacts relating to the attendee */ contacts: z.array(appointmentContactModel).optional(),
  })
/** An appointment attendee */
export type AppointmentAttendeeModel =
  /** An appointment attendee */
  {
    id?: /** The unique identifier of the attendee */ string | undefined
    type?: /** The type of attendee */ string | undefined
    contacts?: /** A collection of contacts relating to the attendee */ Array<AppointmentContactModel> | undefined
  }
