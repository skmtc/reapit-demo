import { z } from 'zod'

/** Representation of an offer */
export const offerModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the offer */ id: z.string().nullable().optional(),
  /** The the date and time when the offer was created */ created: z.string().nullable().optional(),
  /** The date and time when the offer was last modified */ modified: z.string().nullable().optional(),
  /** The currency that applies to monetary amounts exposed in the model */ currency: z.string().nullable().optional(),
  /** The unique identifier of the applicant associated to the offer */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the company associated to the offer */ companyId: z.string().nullable().optional(),
  /** The unique identifier of the contact associated to the offer */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the property associated to the offer */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().nullable().optional(),
  /** The date when the offer was made */ date: z.string().nullable().optional(),
  /** The monetary amount of the offer */ amount: z.number().nullable().optional(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string().nullable().optional(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().nullable().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().nullable().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().nullable().optional(),
  /** A collection of contacts associated to the offer */
  related: z
    .array(
      /** A summarised view of the details of a contact associated to an offer */
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
            /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
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
  /** App specific metadata that has been set against the offer */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the offer. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
