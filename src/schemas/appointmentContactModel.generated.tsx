import { z } from 'zod'

/** A summarised view of the details of a contact associated to an appointment attendee */
export type AppointmentContactModel =
  /** A summarised view of the details of a contact associated to an appointment attendee */
  {
    id?: /** The unique identifier of the contact */ string | null | undefined
    name?: /** The name of the contact */ string | null | undefined
    homePhone?: /** The home phone number of the contact */ string | null | undefined
    workPhone?: /** The work phone number of the contact */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | null | undefined
    email?: /** The email address of the contact */ string | null | undefined
    fromArchive?: /** A flag determining if the related contact is archived */ boolean | null | undefined
  }
/** A summarised view of the details of a contact associated to an appointment attendee */
export const appointmentContactModel =
  /** A summarised view of the details of a contact associated to an appointment attendee */
  z.object({
    /** The unique identifier of the contact */ id: z.string().optional().nullable(),
    /** The name of the contact */ name: z.string().optional().nullable(),
    /** The home phone number of the contact */ homePhone: z.string().optional().nullable(),
    /** The work phone number of the contact */ workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the contact */ email: z.string().optional().nullable(),
    /** A flag determining if the related contact is archived */ fromArchive: z.boolean().optional().nullable(),
  })
