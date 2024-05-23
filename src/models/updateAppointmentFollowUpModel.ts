import { z } from 'zod'

/** Represents the follow up information on a single appointment */
export const updateAppointmentFollowUpModel = z.object({
  /** The unique identifier of a pre-defined follow up response type */ responseId: z.string().nullable().optional(),
  /** The internal follow up notes to be stored against the appointment */ notes: z.string().nullable().optional(),
})
