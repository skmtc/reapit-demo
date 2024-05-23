import { z } from 'zod'

/** Representation of a calendar appointment */
export const openHouseAttendeeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the open house attendee */ id: z.string().nullable().optional(),
  /** The unique identifier of the open house appointment */ openHouseId: z.string().nullable().optional(),
  /** The date and time when the open house attendee was created */ created: z.string().nullable().optional(),
  /** The date and time when the open house attendee was last modified */ modified: z.string().nullable().optional(),
  /** The notes taken regarding the open house attendee */ notes: z.string().nullable().optional(),
  /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
  interestLevel: z.string().nullable().optional(),
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
  /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
