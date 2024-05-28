import { z } from 'zod'

/** Details of an appointment's recurrence pattern */
export const createAppointmentRecurrenceModel = z.object({
  /** The numeric value denoting how often the appointment will recur */
  interval: z.number().int().nullable().optional(),
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().nullable().optional(),
  /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
  until: z.string().nullable().optional(),
})
/** Details of an appointment's recurrence pattern */
export type CreateAppointmentRecurrenceModel = {
  interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined
  type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
  until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
  string | undefined
}
