import { z } from 'zod'

/** Details of an appointment's recurrence pattern */
export const updateAppointmentRecurrenceModel = /** Details of an appointment's recurrence pattern */
z.object({type: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
z.string().optional(), interval: /** The numeric value denoting how often the appointment will recur */
z.number().int().optional(), until: /** The date and time of the last occurrence of the appointment */
z.string().optional()});
/** Details of an appointment's recurrence pattern */
export type UpdateAppointmentRecurrenceModel = /** Details of an appointment's recurrence pattern */
{type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
string | undefined, interval?: /** The numeric value denoting how often the appointment will recur */
number | undefined, until?: /** The date and time of the last occurrence of the appointment */
string | undefined};