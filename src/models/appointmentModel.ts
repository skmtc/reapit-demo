import { z } from 'zod'

/** Representation of a calendar appointment */
export const appointmentModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the appointment */ id: z.string().nullable().optional(),
  /** The date and time when the appointment was created */ created: z.string().nullable().optional(),
  /** The date and time when the appointment was last modified */ modified: z.string().nullable().optional(),
  /** The date and time when the appointment will start */ start: z.string().nullable().optional(),
  /** The date and time when the appointment will end */ end: z.string().nullable().optional(),
  /** The unique identifier of the appointment type */ typeId: z.string().nullable().optional(),
  /** A free text description about the appointment */ description: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment recurs */ recurring: z.boolean().nullable().optional(),
  /** Representation of an appointments recurrence details */
  recurrence: z
    .object({
      /** The recurrence interval */ interval: z.number().int().nullable().optional(),
      /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      type: z.string().nullable().optional(),
      /** The date and time of the last occurrence of the appointment */ until: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A flag denoting whether or not the appointment has been cancelled */ cancelled: z.boolean().nullable().optional(),
  /** Follow up information relating to an appointment */
  followUp: z
    .object({
      /** The date when the appointment should be followed up */ due: z.string().nullable().optional(),
      /** The unique identifier of a pre-defined follow up response type */
      responseId: z.string().nullable().optional(),
      /** Free text internal follow up notes to be stored against the appointment */
      notes: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The unique identifier of the property related to the appointment */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** An appointment attendee */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
      /** The type of attendee */ type: z.string().nullable().optional(),
      /** A collection of contacts relating to the attendee */
      contacts: z
        .array(
          /** A summarised view of the details of a contact associated to an appointment attendee */
          z.object({
            /** The unique identifier of the contact */ id: z.string().nullable().optional(),
            /** The name of the contact */ name: z.string().nullable().optional(),
            /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
            /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
            /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
            /** The email address of the contact */ email: z.string().nullable().optional(),
            /** A flag determining if the related contact is archived */ fromArchive: z.boolean().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
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
  /** App specific metadata that has been set against the appointment */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the appointment. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
