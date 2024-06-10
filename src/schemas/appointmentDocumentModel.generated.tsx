import { z } from 'zod'

/** A view of the documents associated to the appointment */
export const appointmentDocumentModel =
  /** A view of the documents associated to the appointment */
  z.object({
    /** The unique identifier of the draft property inspection report document */
    draftPropertyInspectionReportId: z.string().optional().nullable(),
    /** The unique identifier of the final property inspection report document */
    finalPropertyInspectionReportId: z.string().optional().nullable(),
  })
/** A view of the documents associated to the appointment */
export type AppointmentDocumentModel =
  /** A view of the documents associated to the appointment */
  {
    draftPropertyInspectionReportId?:
      | /** The unique identifier of the draft property inspection report document */
      string
      | null
      | undefined
    finalPropertyInspectionReportId?:
      | /** The unique identifier of the final property inspection report document */
      string
      | null
      | undefined
  }
