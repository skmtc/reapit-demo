/** Details of an appointment's recurrence pattern */
export type UpdateAppointmentRecurrenceModel = {
  type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
  interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined
  until?: /** The date and time of the last occurrence of the appointment */ string | undefined
}
