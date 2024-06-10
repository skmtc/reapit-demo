import { z } from 'zod'

/** Representation of an appointments recurrence details */
export const recurrenceModel =
  /** Representation of an appointments recurrence details */
  z.object({
    /** The recurrence interval */ interval: z.number().int().optional().nullable(),
    /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
    type: z.string().optional().nullable(),
    /** The date and time of the last occurrence of the appointment */ until: z.string().optional().nullable(),
  })
/** Representation of an appointments recurrence details */
export type RecurrenceModel =
  /** Representation of an appointments recurrence details */
  {
    interval?: /** The recurrence interval */ number | null | undefined
    type?:
      | /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      string
      | null
      | undefined
    until?: /** The date and time of the last occurrence of the appointment */ string | null | undefined
  }
