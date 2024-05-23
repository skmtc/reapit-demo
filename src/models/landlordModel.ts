import { z } from 'zod'

/** Representation of a landlord */
export const landlordModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the landlord */ id: z.string().nullable().optional(),
  /** The date and time when the landlord was created */ created: z.string().nullable().optional(),
  /** The date and time when the landlord was last modified */ modified: z.string().nullable().optional(),
  /** A flag determining whether or not the landlord is currently active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string().nullable().optional(),
  /** Representation of a landlord's source */
  source: z
    .object({
      /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z
    .array(
      /** A summarised view of the details of a contact associated to a landlord */
      z.object({
        /** The unique identifier of the contact */ id: z.string().nullable().optional(),
        /** The complete name of the contact or company */ name: z.string().nullable().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
        /** The forename of the contact (Available when 'type' is 'contact') */
        forename: z.string().nullable().optional(),
        /** The surname of the contact (Available when 'type' is 'contact') */
        surname: z.string().nullable().optional(),
        /** The date of birth of the contact (Available when 'type' is 'contact') */
        dateOfBirth: z.string().nullable().optional(),
        /** The type of the contact (contact/company) */ type: z.string().nullable().optional(),
        /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
        /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
        /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
        /** The email address of the contact */ email: z.string().nullable().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
        marketingConsent: z.string().nullable().optional(),
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
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().nullable().optional(),
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
      }),
    )
    .nullable()
    .optional(),
  /** App specific metadata that has been set against the landlord */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the landlord. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
