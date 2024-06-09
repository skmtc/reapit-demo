import { z } from 'zod'

/** Follow up information relating to an appointment */
export const appointmentFollowUpModel =
  /** Follow up information relating to an appointment */
  z.object({
    /** The date when the appointment should be followed up */ due: z.string().optional(),
    /** The unique identifier of a pre-defined follow up response type */ responseId: z.string().optional(),
    /** Free text internal follow up notes to be stored against the appointment */ notes: z.string().optional(),
  })
/** Follow up information relating to an appointment */
export type AppointmentFollowUpModel =
  /** Follow up information relating to an appointment */
  {
    due?: /** The date when the appointment should be followed up */ string | undefined
    responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined
    notes?: /** Free text internal follow up notes to be stored against the appointment */ string | undefined
  }
