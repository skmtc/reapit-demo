import { z } from 'zod'

/** Details of an appointment's recurrence pattern */
export type CreateAppointmentRecurrenceModel =
  /** Details of an appointment's recurrence pattern */
  {
    interval?: /** The numeric value denoting how often the appointment will recur */ number | null | undefined
    type?:
      | /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      string
      | null
      | undefined
    until?:
      | /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
      string
      | null
      | undefined
  }
/** Details of an appointment's recurrence pattern */
export const createAppointmentRecurrenceModel =
  /** Details of an appointment's recurrence pattern */
  z.object({
    /** The numeric value denoting how often the appointment will recur */
    interval: z.number().int().optional().nullable(),
    /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
    type: z.string().optional().nullable(),
    /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
    until: z.string().optional().nullable(),
  })
