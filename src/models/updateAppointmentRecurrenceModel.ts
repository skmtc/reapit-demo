import { z } from 'zod'

/** Details of an appointment's recurrence pattern */
export const updateAppointmentRecurrenceModel = z.object({
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().nullable().optional(),
  /** The numeric value denoting how often the appointment will recur */
  interval: z.number().int().nullable().optional(),
  /** The date and time of the last occurrence of the appointment */ until: z.string().nullable().optional(),
})
