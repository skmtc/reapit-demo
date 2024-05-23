import { z } from 'zod'

/** Representation of an individual contact */
export const contactModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The date and time when the contact was created */ created: z.string().nullable().optional(),
  /** The date and time when the contact was last modified */ modified: z.string().nullable().optional(),
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
  /** The contact's forename */ forename: z.string().nullable().optional(),
  /** The contact's surname */ surname: z.string().nullable().optional(),
  /** The contact's date of birth */ dateOfBirth: z.string().nullable().optional(),
  /** A flag determining whether or not the contact is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().nullable().optional(),
  /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
  identityCheck: z.string().nullable().optional(),
  /** Representation of a contact's source */
  source: z
    .object({
      /** The unique identifier of the source of the contact */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** The date and time the contact was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the contact is archived */ fromArchive: z.boolean().nullable().optional(),
  /** Representation of the physical address of a building or premise */
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
  /** Representation of the physical address of a building or premise */
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
  /** Representation of the physical address of a building or premise */
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
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().nullable().optional(),
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
  /** App specific metadata that has been set against the contact */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the contact. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** A list of relationships belonging to the contact. This is later removed from the response */
  relationships: z
    .array(
      /** Representation of the roles that an individual contacts possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the relationship */ id: z.string().nullable().optional(),
        /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
        /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
        /** The unique identifier of the related contact */ contactId: z.string().nullable().optional(),
        /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
        associatedType: z.string().nullable().optional(),
        /** The unique identifier of the related entity */ associatedId: z.string().nullable().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
