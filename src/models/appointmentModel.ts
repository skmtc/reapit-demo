import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { recurrenceModel, RecurrenceModel } from '@/models/recurrenceModel.ts'
import { appointmentFollowUpModel, AppointmentFollowUpModel } from '@/models/appointmentFollowUpModel.ts'
import { appointmentAttendeeModel, AppointmentAttendeeModel } from '@/models/appointmentAttendeeModel.ts'
import { appointmentDocumentModel, AppointmentDocumentModel } from '@/models/appointmentDocumentModel.ts'

/** Representation of a calendar appointment */
export const appointmentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the appointment */ id: z.string().nullable().optional(),
  /** The date and time when the appointment was created */ created: z.string().nullable().optional(),
  /** The date and time when the appointment was last modified */ modified: z.string().nullable().optional(),
  /** The date and time when the appointment will start */ start: z.string().nullable().optional(),
  /** The date and time when the appointment will end */ end: z.string().nullable().optional(),
  /** The unique identifier of the appointment type */ typeId: z.string().nullable().optional(),
  /** A free text description about the appointment */ description: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment recurs */ recurring: z.boolean().nullable().optional(),
  recurrence: recurrenceModel.nullable().optional(),
  /** A flag denoting whether or not the appointment has been cancelled */ cancelled: z.boolean().nullable().optional(),
  followUp: appointmentFollowUpModel.nullable().optional(),
  /** The unique identifier of the property related to the appointment */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  attendee: appointmentAttendeeModel.nullable().optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().nullable().optional(),
  /** A flag determining whether or not the appointment is archived */ fromArchive: z.boolean().nullable().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().nullable().optional(),
  documents: appointmentDocumentModel.nullable().optional(),
  /** App specific metadata that has been set against the appointment */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the appointment. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a calendar appointment */
export type AppointmentModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the appointment */ string | undefined
  created?: /** The date and time when the appointment was created */ string | undefined
  modified?: /** The date and time when the appointment was last modified */ string | undefined
  start?: /** The date and time when the appointment will start */ string | undefined
  end?: /** The date and time when the appointment will end */ string | undefined
  typeId?: /** The unique identifier of the appointment type */ string | undefined
  description?: /** A free text description about the appointment */ string | undefined
  recurring?: /** A flag denoting whether or not the appointment recurs */ boolean | undefined
  recurrence?: RecurrenceModel | undefined
  cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | undefined
  followUp?: AppointmentFollowUpModel | undefined
  propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
  organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  Array<string> | undefined
  attendee?: AppointmentAttendeeModel | undefined
  attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
  accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  boolean | undefined
  isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  boolean | undefined
  virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
  negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  boolean | undefined
  attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
  boolean | undefined
  propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  boolean | undefined
  fromArchive?: /** A flag determining whether or not the appointment is archived */ boolean | undefined
  otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  string | undefined
  documents?: AppointmentDocumentModel | undefined
  metadata?: /** App specific metadata that has been set against the appointment */
  Record<string, Record<string, never>> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the appointment. Used for managing update concurrency */
  string | undefined
}
