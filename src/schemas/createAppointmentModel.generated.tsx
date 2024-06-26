import {
  CreateAppointmentAttendeeModel,
  createAppointmentAttendeeModel,
} from '@/schemas/createAppointmentAttendeeModel.generated.tsx'
import {
  CreateAppointmentRecurrenceModel,
  createAppointmentRecurrenceModel,
} from '@/schemas/createAppointmentRecurrenceModel.generated.tsx'
import {
  CreateAppointmentDocumentModel,
  createAppointmentDocumentModel,
} from '@/schemas/createAppointmentDocumentModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new calendar appointment */
export type CreateAppointmentModel =
  /** Request body used to create a new calendar appointment */
  {
    start: /** The date and time when the appointment will start */ string
    end: /** The date and time when the appointment will end */ string
    followUpOn?: /** The date when the appointment should be followed up */ string | null | undefined
    typeId: /** The unique identifier of the appointment type */ string
    description?: /** A free text description about the appointment */ string | null | undefined
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
    attendee?: CreateAppointmentAttendeeModel | null | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */ string | null | undefined
    otherAgentId?:
      | /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
      string
      | null
      | undefined
    accompanied?:
      | /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
      boolean
      | null
      | undefined
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
    virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | null | undefined
    isRepeat?:
      | /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
      boolean
      | null
      | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | null | undefined
    recurrence?: CreateAppointmentRecurrenceModel | null | undefined
    documents?: CreateAppointmentDocumentModel | null | undefined
    metadata?:
      | /** App specific metadata to set against the appointment */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createAppointmentModel =
  /** Request body used to create a new calendar appointment */
  z.object({
    /** The date and time when the appointment will start */ start: z.string(),
    /** The date and time when the appointment will end */ end: z.string(),
    /** The date when the appointment should be followed up */ followUpOn: z.string().optional().nullable(),
    /** The unique identifier of the appointment type */ typeId: z.string(),
    /** A free text description about the appointment */ description: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that organised the appointment */
    organiserId: z.string().optional().nullable(),
    /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    attendee: createAppointmentAttendeeModel.optional().nullable(),
    /** The unique identifier of the property related to the appointment */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    otherAgentId: z.string().optional().nullable(),
    /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    accompanied: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    negotiatorConfirmed: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the attendee has confirmed their attendance */
    attendeeConfirmed: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    propertyConfirmed: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    isRepeat: z.boolean().optional().nullable(),
    /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().optional().nullable(),
    recurrence: createAppointmentRecurrenceModel.optional().nullable(),
    documents: createAppointmentDocumentModel.optional().nullable(),
    /** App specific metadata to set against the appointment */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
