import { z } from 'zod'

/** Representation of an appointments recurrence details */
export const recurrenceModel = /** Representation of an appointments recurrence details */
z.object({interval: /** The recurrence interval */
z.number().int().optional(), type: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
z.string().optional(), until: /** The date and time of the last occurrence of the appointment */
z.string().optional()});
/** Representation of an appointments recurrence details */
export type RecurrenceModel = /** Representation of an appointments recurrence details */
{interval?: /** The recurrence interval */
number | undefined, type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
string | undefined, until?: /** The date and time of the last occurrence of the appointment */
string | undefined};