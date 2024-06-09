import { z } from 'zod'

/** A summarised view of the details of a contact associated to an appointment attendee */
export const appointmentContactModel =
  /** A summarised view of the details of a contact associated to an appointment attendee */
  z.object({
    /** The unique identifier of the contact */ id: z.string().optional(),
    /** The name of the contact */ name: z.string().optional(),
    /** The home phone number of the contact */ homePhone: z.string().optional(),
    /** The work phone number of the contact */ workPhone: z.string().optional(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional(),
    /** The email address of the contact */ email: z.string().optional(),
    /** A flag determining if the related contact is archived */ fromArchive: z.boolean().optional(),
  })
/** A summarised view of the details of a contact associated to an appointment attendee */
export type AppointmentContactModel =
  /** A summarised view of the details of a contact associated to an appointment attendee */
  {
    id?: /** The unique identifier of the contact */ string | undefined
    name?: /** The name of the contact */ string | undefined
    homePhone?: /** The home phone number of the contact */ string | undefined
    workPhone?: /** The work phone number of the contact */ string | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | undefined
    email?: /** The email address of the contact */ string | undefined
    fromArchive?: /** A flag determining if the related contact is archived */ boolean | undefined
  }
