import { z } from 'zod'
import { updateAppointmentAttendeeModel, UpdateAppointmentAttendeeModel } from '@/schemas/updateAppointmentAttendeeModel.generated.tsx'
import { updateAppointmentFollowUpModel, UpdateAppointmentFollowUpModel } from '@/schemas/updateAppointmentFollowUpModel.generated.tsx'
import { updateAppointmentRecurrenceModel, UpdateAppointmentRecurrenceModel } from '@/schemas/updateAppointmentRecurrenceModel.generated.tsx'
import { updateAppointmentDocumentModel, UpdateAppointmentDocumentModel } from '@/schemas/updateAppointmentDocumentModel.generated.tsx'

/** Request body used to update an existing calendar appointment */
export const updateAppointmentModel = /** Request body used to update an existing calendar appointment */
z.object({start: /** The date and time when the appointment will start */
z.string().optional(), end: /** The date and time when the appointment will end */
z.string().optional(), followUpOn: /** The date when the appointment should be followed up */
z.string().optional(), typeId: /** The unique identifier of the appointment type */
z.string().optional(), description: /** A free text description about the appointment */
z.string().optional(), propertyId: /** The unique identifier of the property related to the appointment */
z.string().optional(), otherAgentId: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
z.string().optional(), organiserId: /** The unique identifier of the negotiator that organised the appointment */
z.string().optional(), cancelled: /** A flag denoting whether or not the appointment has been cancelled */
z.boolean().optional(), negotiatorIds: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
z.array(z.string()).optional(), officeIds: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), attendee: updateAppointmentAttendeeModel.optional(), accompanied: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
z.boolean().optional(), virtual: /** A flag denoting whether or not the appointment is virtual */
z.boolean().optional(), isRepeat: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
z.boolean().optional(), negotiatorConfirmed: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
z.boolean().optional(), attendeeConfirmed: /** A flag denoting whether or not the attendee has confirmed their attendance */
z.boolean().optional(), propertyConfirmed: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
z.boolean().optional(), attended: /** The attendance status of the appointment (notSet/noShow/attended) */
z.string().optional(), followUp: updateAppointmentFollowUpModel.optional(), recurrence: updateAppointmentRecurrenceModel.optional(), documents: updateAppointmentDocumentModel.optional(), metadata: /** App specific metadata to set against the appointment */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing calendar appointment */
export type UpdateAppointmentModel = /** Request body used to update an existing calendar appointment */
{start?: /** The date and time when the appointment will start */
string | undefined, end?: /** The date and time when the appointment will end */
string | undefined, followUpOn?: /** The date when the appointment should be followed up */
string | undefined, typeId?: /** The unique identifier of the appointment type */
string | undefined, description?: /** A free text description about the appointment */
string | undefined, propertyId?: /** The unique identifier of the property related to the appointment */
string | undefined, otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
string | undefined, organiserId?: /** The unique identifier of the negotiator that organised the appointment */
string | undefined, cancelled?: /** A flag denoting whether or not the appointment has been cancelled */
boolean | undefined, negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
Array<string> | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
Array<string> | undefined, attendee?: UpdateAppointmentAttendeeModel | undefined, accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
boolean | undefined, virtual?: /** A flag denoting whether or not the appointment is virtual */
boolean | undefined, isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
boolean | undefined, negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
boolean | undefined, attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
boolean | undefined, propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
boolean | undefined, attended?: /** The attendance status of the appointment (notSet/noShow/attended) */
string | undefined, followUp?: UpdateAppointmentFollowUpModel | undefined, recurrence?: UpdateAppointmentRecurrenceModel | undefined, documents?: UpdateAppointmentDocumentModel | undefined, metadata?: /** App specific metadata to set against the appointment */
Record<string, Record<string, never>> | undefined};