import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { RecurrenceModel, recurrenceModel } from '@/schemas/recurrenceModel.generated.tsx'
import { AppointmentFollowUpModel, appointmentFollowUpModel } from '@/schemas/appointmentFollowUpModel.generated.tsx'
import { AppointmentAttendeeModel, appointmentAttendeeModel } from '@/schemas/appointmentAttendeeModel.generated.tsx'
import { AppointmentDocumentModel, appointmentDocumentModel } from '@/schemas/appointmentDocumentModel.generated.tsx'
import { z } from 'zod'

export type AppointmentModel =
  /** Representation of a calendar appointment */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the appointment */ string | null | undefined
    created?: /** The date and time when the appointment was created */ string | null | undefined
    modified?: /** The date and time when the appointment was last modified */ string | null | undefined
    start?: /** The date and time when the appointment will start */ string | null | undefined
    end?: /** The date and time when the appointment will end */ string | null | undefined
    typeId?: /** The unique identifier of the appointment type */ string | null | undefined
    description?: /** A free text description about the appointment */ string | null | undefined
    recurring?: /** A flag denoting whether or not the appointment recurs */ boolean | null | undefined
    recurrence?: RecurrenceModel | null | undefined
    cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | null | undefined
    followUp?: AppointmentFollowUpModel | null | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */ string | null | undefined
    organiserId?:
      | /** The unique identifier of the negotiator that organised the appointment */
      string
      | null
      | undefined
    negotiatorIds?:
      | /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
      Array<string>
      | null
      | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    attendee?: AppointmentAttendeeModel | null | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | null | undefined
    accompanied?:
      | /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
      boolean
      | null
      | undefined
    isRepeat?:
      | /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
      boolean
      | null
      | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | null | undefined
    negotiatorConfirmed?:
      | /** A flag denoting whether or not the main negotiator has confirmed their attendance */
      boolean
      | null
      | undefined
    attendeeConfirmed?:
      | /** A flag denoting whether or not the attendee has confirmed their attendance */
      boolean
      | null
      | undefined
    propertyConfirmed?:
      | /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
      boolean
      | null
      | undefined
    fromArchive?: /** A flag determining whether or not the appointment is archived */ boolean | null | undefined
    otherAgentId?:
      | /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
      string
      | null
      | undefined
    documents?: AppointmentDocumentModel | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the appointment */
      Record<string, Record<string, never>>
      | null
      | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | null | undefined
    _eTag?:
      | /** The ETag for the current version of the appointment. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a calendar appointment */
export const appointmentModel =
  /** Representation of a calendar appointment */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the appointment */ id: z.string().optional().nullable(),
    /** The date and time when the appointment was created */ created: z.string().optional().nullable(),
    /** The date and time when the appointment was last modified */ modified: z.string().optional().nullable(),
    /** The date and time when the appointment will start */ start: z.string().optional().nullable(),
    /** The date and time when the appointment will end */ end: z.string().optional().nullable(),
    /** The unique identifier of the appointment type */ typeId: z.string().optional().nullable(),
    /** A free text description about the appointment */ description: z.string().optional().nullable(),
    /** A flag denoting whether or not the appointment recurs */ recurring: z.boolean().optional().nullable(),
    recurrence: recurrenceModel.optional().nullable(),
    /** A flag denoting whether or not the appointment has been cancelled */
    cancelled: z.boolean().optional().nullable(),
    followUp: appointmentFollowUpModel.optional().nullable(),
    /** The unique identifier of the property related to the appointment */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that organised the appointment */
    organiserId: z.string().optional().nullable(),
    /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    attendee: appointmentAttendeeModel.optional().nullable(),
    /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().optional().nullable(),
    /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    accompanied: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    isRepeat: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    negotiatorConfirmed: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the attendee has confirmed their attendance */
    attendeeConfirmed: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    propertyConfirmed: z.boolean().optional().nullable(),
    /** A flag determining whether or not the appointment is archived */ fromArchive: z.boolean().optional().nullable(),
    /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    otherAgentId: z.string().optional().nullable(),
    documents: appointmentDocumentModel.optional().nullable(),
    /** App specific metadata that has been set against the appointment */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the appointment. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
