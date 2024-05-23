import { z } from 'zod'

/** A view of the documents associated to the appointment */
export const updateAppointmentDocumentModel = z.object({
  /** The unique identifier of the draft property inspection report document */
  draftPropertyInspectionReportId: z.string().nullable().optional(),
  /** The unique identifier of the final property inspection report document */
  finalPropertyInspectionReportId: z.string().nullable().optional(),
})
