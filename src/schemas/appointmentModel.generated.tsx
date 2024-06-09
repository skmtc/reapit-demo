import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { recurrenceModel, RecurrenceModel } from '@/schemas/recurrenceModel.generated.tsx'
import { appointmentFollowUpModel, AppointmentFollowUpModel } from '@/schemas/appointmentFollowUpModel.generated.tsx'
import { appointmentAttendeeModel, AppointmentAttendeeModel } from '@/schemas/appointmentAttendeeModel.generated.tsx'
import { appointmentDocumentModel, AppointmentDocumentModel } from '@/schemas/appointmentDocumentModel.generated.tsx'

/** Representation of a calendar appointment */
export const appointmentModel =
  /** Representation of a calendar appointment */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the appointment */ id: z.string().optional(),
    /** The date and time when the appointment was created */ created: z.string().optional(),
    /** The date and time when the appointment was last modified */ modified: z.string().optional(),
    /** The date and time when the appointment will start */ start: z.string().optional(),
    /** The date and time when the appointment will end */ end: z.string().optional(),
    /** The unique identifier of the appointment type */ typeId: z.string().optional(),
    /** A free text description about the appointment */ description: z.string().optional(),
    /** A flag denoting whether or not the appointment recurs */ recurring: z.boolean().optional(),
    recurrence: recurrenceModel.optional(),
    /** A flag denoting whether or not the appointment has been cancelled */ cancelled: z.boolean().optional(),
    followUp: appointmentFollowUpModel.optional(),
    /** The unique identifier of the property related to the appointment */ propertyId: z.string().optional(),
    /** The unique identifier of the negotiator that organised the appointment */ organiserId: z.string().optional(),
    /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional(),
    /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional(),
    attendee: appointmentAttendeeModel.optional(),
    /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().optional(),
    /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    accompanied: z.boolean().optional(),
    /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    isRepeat: z.boolean().optional(),
    /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().optional(),
    /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    negotiatorConfirmed: z.boolean().optional(),
    /** A flag denoting whether or not the attendee has confirmed their attendance */
    attendeeConfirmed: z.boolean().optional(),
    /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    propertyConfirmed: z.boolean().optional(),
    /** A flag determining whether or not the appointment is archived */ fromArchive: z.boolean().optional(),
    /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    otherAgentId: z.string().optional(),
    documents: appointmentDocumentModel.optional(),
    /** App specific metadata that has been set against the appointment */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the appointment. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of a calendar appointment */
export type AppointmentModel =
  /** Representation of a calendar appointment */
  {
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
