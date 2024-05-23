import { z } from 'zod'

export const vendorModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a vendor */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the vendor */ id: z.string().nullable().optional(),
        /** The date and time when the vendor was created */ created: z.string().nullable().optional(),
        /** The date and time when the vendor was last modified */ modified: z.string().nullable().optional(),
        /** The date the vendor was last called */ lastCall: z.string().nullable().optional(),
        /** The date the vendor is next due to be called */ nextCall: z.string().nullable().optional(),
        /** The unique identifier of the type of vendor */ typeId: z.string().nullable().optional(),
        /** The unique identifier of the reason the vendor is selling */
        sellingReasonId: z.string().nullable().optional(),
        /** The unique identifier of the solicitor associated to the vendor */
        solicitorId: z.string().nullable().optional(),
        /** The unique identifier of the property associated to the vendor */
        propertyId: z.string().nullable().optional(),
        /** Representation of a vendor's source */
        source: z
          .object({
            /** The unique identifier of the source of the vendor */ id: z.string().nullable().optional(),
            /** The source type (office/source) */ type: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
        related: z
          .array(
            /** A summarised view of the details of a contact or company associated to a vendor */
            z.object({
              /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
              /** The complete name of the contact or company */ name: z.string().nullable().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().nullable().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().nullable().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().nullable().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().nullable().optional(),
              /** The type of the contact (company/contact) */ type: z.string().nullable().optional(),
              /** The home phone number of the contact or company */ homePhone: z.string().nullable().optional(),
              /** The work phone number of the contact or company */ workPhone: z.string().nullable().optional(),
              /** The mobile phone number of the contact or company */ mobilePhone: z.string().nullable().optional(),
              /** The email address of the contact or company */ email: z.string().nullable().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
              marketingConsent: z.string().nullable().optional(),
              /** Flag to determine if this role on the system is now archived */
              fromArchive: z.boolean().nullable().optional(),
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
        /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
        correspondenceAddressType: z.string().nullable().optional(),
        /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
        negotiatorId: z.string().nullable().optional(),
        /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).nullable().optional(),
        /** The date and time the vendor was archived */ archivedOn: z.string().nullable().optional(),
        /** A flag determining whether or not the vendor is archived */ fromArchive: z.boolean().nullable().optional(),
        /** App specific metadata that has been set against the vendor */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** The ETag for the current version of the vendor. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
