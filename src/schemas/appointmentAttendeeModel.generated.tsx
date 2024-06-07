import { z } from 'zod'
import { appointmentContactModel, AppointmentContactModel } from '@/schemas/appointmentContactModel.generated.tsx'

/** An appointment attendee */
export const appointmentAttendeeModel = /** An appointment attendee */
z.object({id: /** The unique identifier of the attendee */
z.string().optional(), type: /** The type of attendee */
z.string().optional(), contacts: /** A collection of contacts relating to the attendee */
z.array(appointmentContactModel).optional()});
/** An appointment attendee */
export type AppointmentAttendeeModel = /** An appointment attendee */
{id?: /** The unique identifier of the attendee */
string | undefined, type?: /** The type of attendee */
string | undefined, contacts?: /** A collection of contacts relating to the attendee */
Array<AppointmentContactModel> | undefined};