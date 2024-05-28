import { z } from 'zod'

/** A view of the documents associated to the appointment */
export const appointmentDocumentModel = z.object({
  /** The unique identifier of the draft property inspection report document */
  draftPropertyInspectionReportId: z.string().nullable().optional(),
  /** The unique identifier of the final property inspection report document */
  finalPropertyInspectionReportId: z.string().nullable().optional(),
})
/** A view of the documents associated to the appointment */
export type AppointmentDocumentModel = {
  draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
  string | undefined
  finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
  string | undefined
}
