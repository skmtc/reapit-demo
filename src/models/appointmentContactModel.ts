import { z } from 'zod'

/** A summarised view of the details of a contact associated to an appointment attendee */
export const appointmentContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The name of the contact */ name: z.string().nullable().optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** A flag determining if the related contact is archived */ fromArchive: z.boolean().nullable().optional(),
})
