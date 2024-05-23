import { z } from 'zod'

/** Representation of a company */
export const companyModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the company */ id: z.string().nullable().optional(),
  /** The date and time when the company was created */ created: z.string().nullable().optional(),
  /** The date and time when the company was last modified */ modified: z.string().nullable().optional(),
  /** The name of the company */ name: z.string().nullable().optional(),
  /** The branch name of the company */ branch: z.string().nullable().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().nullable().optional(),
  /** A flag determining whether or not the company is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the company (deny/notAsked) */ marketingConsent: z.string().nullable().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()).nullable().optional(),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().nullable().optional(),
  /** The work phone number of the company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the company */ email: z.string().nullable().optional(),
  /** The date and time the company was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the company is archived */ fromArchive: z.boolean().nullable().optional(),
  /** Representation of the physical address of a building or premise */
  address: z
    .object({
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides within */ country: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of the payments and terms configuration for a company */
  payments: z
    .object({
      /** The identifier of the nominal code selected in the payments and terms configuration */
      nominalAccountId: z.string().nullable().optional(),
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
  /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().nullable().optional(),
  /** App specific metadata that has been set against the company */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the company. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** A list of relationships belonging to the company. This is later removed from the response */
  relationships: z
    .array(
      /** Representation of the roles that an individual companies possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the relationship */ id: z.string().nullable().optional(),
        /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
        /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
        /** The unique identifier of the related company */ companyId: z.string().nullable().optional(),
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
