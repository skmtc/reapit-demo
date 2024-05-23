import { z } from 'zod'

/** Request body used to create a new calendar appointment */
export const createAppointmentModel = z.object({
  /** The date and time when the appointment will start */ start: z.string(),
  /** The date and time when the appointment will end */ end: z.string(),
  /** The date when the appointment should be followed up */ followUpOn: z.string().nullable().optional(),
  /** The unique identifier of the appointment type */ typeId: z.string(),
  /** A free text description about the appointment */ description: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** Represents an external attendee on an appointment */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
      /** The type of attendee (applicant/contact/landlord/tenant) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The unique identifier of the property related to the appointment */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().nullable().optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().nullable().optional(),
  /** Details of an appointment's recurrence pattern */
  recurrence: z
    .object({
      /** The numeric value denoting how often the appointment will recur */
      interval: z.number().int().nullable().optional(),
      /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      type: z.string().nullable().optional(),
      /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
      until: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A view of the documents associated to the appointment */
  documents: z
    .object({
      /** The unique identifier of the draft property inspection report document */
      draftPropertyInspectionReportId: z.string().nullable().optional(),
      /** The unique identifier of the final property inspection report document */
      finalPropertyInspectionReportId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** App specific metadata to set against the appointment */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
