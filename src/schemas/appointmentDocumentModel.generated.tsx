import { z } from 'zod'

/** A view of the documents associated to the appointment */
export const appointmentDocumentModel = /** A view of the documents associated to the appointment */
z.object({draftPropertyInspectionReportId: /** The unique identifier of the draft property inspection report document */
z.string().optional(), finalPropertyInspectionReportId: /** The unique identifier of the final property inspection report document */
z.string().optional()});
/** A view of the documents associated to the appointment */
export type AppointmentDocumentModel = /** A view of the documents associated to the appointment */
{draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
string | undefined, finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
string | undefined};