import { UpdateAppointmentAttendeeModel } from '@/models/updateAppointmentAttendeeModel.ts'
import { UpdateAppointmentFollowUpModel } from '@/models/updateAppointmentFollowUpModel.ts'
import { UpdateAppointmentRecurrenceModel } from '@/models/updateAppointmentRecurrenceModel.ts'
import { UpdateAppointmentDocumentModel } from '@/models/updateAppointmentDocumentModel.ts'

/** Request body used to update an existing calendar appointment */
export type UpdateAppointmentModel = {
  start?: /** The date and time when the appointment will start */ string | undefined
  end?: /** The date and time when the appointment will end */ string | undefined
  followUpOn?: /** The date when the appointment should be followed up */ string | undefined
  typeId?: /** The unique identifier of the appointment type */ string | undefined
  description?: /** A free text description about the appointment */ string | undefined
  propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
  otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  string | undefined
  organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
  cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  Array<string> | undefined
  attendee?: UpdateAppointmentAttendeeModel | undefined
  accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  boolean | undefined
  virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
  isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  boolean | undefined
  negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  boolean | undefined
  attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
  boolean | undefined
  propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  boolean | undefined
  attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
  followUp?: UpdateAppointmentFollowUpModel | undefined
  recurrence?: UpdateAppointmentRecurrenceModel | undefined
  documents?: UpdateAppointmentDocumentModel | undefined
  metadata?: /** App specific metadata to set against the appointment */
  Record<string, Record<string, never>> | undefined
}
