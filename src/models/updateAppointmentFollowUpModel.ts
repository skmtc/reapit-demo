/** Represents the follow up information on a single appointment */
export type UpdateAppointmentFollowUpModel = {
  responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined
  notes?: /** The internal follow up notes to be stored against the appointment */ string | undefined
}
