/** Represents an external attendee on an appointment */
export type UpdateAppointmentAttendeeModel = {
  id?: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
  string | undefined
  type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined
  confirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */ boolean | undefined
}
