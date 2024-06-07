import { z } from 'zod'
import { createAppointmentAttendeeModel, CreateAppointmentAttendeeModel } from '@/schemas/createAppointmentAttendeeModel.generated.tsx'
import { createAppointmentRecurrenceModel, CreateAppointmentRecurrenceModel } from '@/schemas/createAppointmentRecurrenceModel.generated.tsx'
import { createAppointmentDocumentModel, CreateAppointmentDocumentModel } from '@/schemas/createAppointmentDocumentModel.generated.tsx'

/** Request body used to create a new calendar appointment */
export const createAppointmentModel = /** Request body used to create a new calendar appointment */
z.object({start: /** The date and time when the appointment will start */
z.string(), end: /** The date and time when the appointment will end */
z.string(), followUpOn: /** The date when the appointment should be followed up */
z.string().optional(), typeId: /** The unique identifier of the appointment type */
z.string(), description: /** A free text description about the appointment */
z.string().optional(), organiserId: /** The unique identifier of the negotiator that organised the appointment */
z.string().optional(), negotiatorIds: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
z.array(z.string()).optional(), officeIds: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), attendee: createAppointmentAttendeeModel.optional(), propertyId: /** The unique identifier of the property related to the appointment */
z.string().optional(), otherAgentId: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
z.string().optional(), accompanied: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
z.boolean().optional(), negotiatorConfirmed: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
z.boolean().optional(), attendeeConfirmed: /** A flag denoting whether or not the attendee has confirmed their attendance */
z.boolean().optional(), propertyConfirmed: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
z.boolean().optional(), virtual: /** A flag denoting whether or not the appointment is virtual */
z.boolean().optional(), isRepeat: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
z.boolean().optional(), attended: /** The attendance status of the appointment (notSet/noShow/attended) */
z.string().optional(), recurrence: createAppointmentRecurrenceModel.optional(), documents: createAppointmentDocumentModel.optional(), metadata: /** App specific metadata to set against the appointment */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new calendar appointment */
export type CreateAppointmentModel = /** Request body used to create a new calendar appointment */
{start: /** The date and time when the appointment will start */
string, end: /** The date and time when the appointment will end */
string, followUpOn?: /** The date when the appointment should be followed up */
string | undefined, typeId: /** The unique identifier of the appointment type */
string, description?: /** A free text description about the appointment */
string | undefined, organiserId?: /** The unique identifier of the negotiator that organised the appointment */
string | undefined, negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
Array<string> | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
Array<string> | undefined, attendee?: CreateAppointmentAttendeeModel | undefined, propertyId?: /** The unique identifier of the property related to the appointment */
string | undefined, otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
string | undefined, accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
boolean | undefined, negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
boolean | undefined, attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
boolean | undefined, propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
boolean | undefined, virtual?: /** A flag denoting whether or not the appointment is virtual */
boolean | undefined, isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
boolean | undefined, attended?: /** The attendance status of the appointment (notSet/noShow/attended) */
string | undefined, recurrence?: CreateAppointmentRecurrenceModel | undefined, documents?: CreateAppointmentDocumentModel | undefined, metadata?: /** App specific metadata to set against the appointment */
Record<string, Record<string, never>> | undefined};