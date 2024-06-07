import { z } from 'zod'

/** Details of an appointment's recurrence pattern */
export const createAppointmentRecurrenceModel = /** Details of an appointment's recurrence pattern */
z.object({interval: /** The numeric value denoting how often the appointment will recur */
z.number().int().optional(), type: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
z.string().optional(), until: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
z.string().optional()});
/** Details of an appointment's recurrence pattern */
export type CreateAppointmentRecurrenceModel = /** Details of an appointment's recurrence pattern */
{interval?: /** The numeric value denoting how often the appointment will recur */
number | undefined, type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
string | undefined, until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
string | undefined};