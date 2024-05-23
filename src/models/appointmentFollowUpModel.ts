import { z } from 'zod'

/** Follow up information relating to an appointment */
export const appointmentFollowUpModel = z.object({
  /** The date when the appointment should be followed up */ due: z.string().nullable().optional(),
  /** The unique identifier of a pre-defined follow up response type */ responseId: z.string().nullable().optional(),
  /** Free text internal follow up notes to be stored against the appointment */
  notes: z.string().nullable().optional(),
})
