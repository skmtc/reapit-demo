import { z } from 'zod'

/** Request body used to create a new contact */
export const createContactModel = z.object({
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
  /** The contact's forename */ forename: z.string().nullable().optional(),
  /** The contact's surname */ surname: z.string(),
  /** The contact's date of birth */ dateOfBirth: z.string().nullable().optional(),
  /** A flag determining whether or not the contact is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */ marketingConsent: z.string(),
  /** Request body used to set the source of a new contact */
  source: z
    .object({
      /** The unique identifier of the source of the contact */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The home phone number of the contact (Required when no other contact details are provided) */
  homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact (Required when no other contact details are provided) */
  workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact (Required when no other contact details are provided) */
  mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact (Required when no other contact details are provided) */
  email: z.string().nullable().optional(),
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()),
  /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).nullable().optional(),
  /** Request body used to set an address against a new contact */
  primaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().nullable().optional(),
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set an address against a new contact */
  secondaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().nullable().optional(),
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set an address against a new contact */
  workAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().nullable().optional(),
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().nullable().optional(),
  /** App specific metadata to set against the contact */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
