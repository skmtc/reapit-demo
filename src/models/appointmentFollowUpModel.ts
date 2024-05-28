import { z } from 'zod'

/** Follow up information relating to an appointment */
export const appointmentFollowUpModel = z.object({
  /** The date when the appointment should be followed up */ due: z.string().nullable().optional(),
  /** The unique identifier of a pre-defined follow up response type */ responseId: z.string().nullable().optional(),
  /** Free text internal follow up notes to be stored against the appointment */
  notes: z.string().nullable().optional(),
})
/** Follow up information relating to an appointment */
export type AppointmentFollowUpModel = {
  due?: /** The date when the appointment should be followed up */ string | undefined
  responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined
  notes?: /** Free text internal follow up notes to be stored against the appointment */ string | undefined
}
