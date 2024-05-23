import { z } from 'zod'

/** A summarised view of the details of a contact or company associated to an applicant */
export const applicantContactModel = z.object({
  /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (company/contact) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact or company */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact or company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact or company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact or company */ email: z.string().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().nullable().optional(),
        /** The contact detail */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
