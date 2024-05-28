import { z } from 'zod'

/** Representation of an appointments recurrence details */
export const recurrenceModel = z.object({
  /** The recurrence interval */ interval: z.number().int().nullable().optional(),
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().nullable().optional(),
  /** The date and time of the last occurrence of the appointment */ until: z.string().nullable().optional(),
})
/** Representation of an appointments recurrence details */
export type RecurrenceModel = {
  interval?: /** The recurrence interval */ number | undefined
  type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
  until?: /** The date and time of the last occurrence of the appointment */ string | undefined
}
