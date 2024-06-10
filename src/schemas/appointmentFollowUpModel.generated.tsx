import { z } from 'zod'

/** Follow up information relating to an appointment */
export const appointmentFollowUpModel =
  /** Follow up information relating to an appointment */
  z.object({
    /** The date when the appointment should be followed up */ due: z.string().optional().nullable(),
    /** The unique identifier of a pre-defined follow up response type */ responseId: z.string().optional().nullable(),
    /** Free text internal follow up notes to be stored against the appointment */
    notes: z.string().optional().nullable(),
  })
/** Follow up information relating to an appointment */
export type AppointmentFollowUpModel =
  /** Follow up information relating to an appointment */
  {
    due?: /** The date when the appointment should be followed up */ string | null | undefined
    responseId?: /** The unique identifier of a pre-defined follow up response type */ string | null | undefined
    notes?: /** Free text internal follow up notes to be stored against the appointment */ string | null | undefined
  }
