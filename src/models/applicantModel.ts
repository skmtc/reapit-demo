import { z } from 'zod'

/** Representation of an applicant */
export const applicantModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the applicant */ id: z.string().nullable().optional(),
  /** The date and time when the applicant was created */ created: z.string().nullable().optional(),
  /** The date and time when the applicant was last modified */ modified: z.string().nullable().optional(),
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  marketingMode: z.string().nullable().optional(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
  currency: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().nullable().optional(),
  /** A free text field describing any adhoc buying or renting requirements */ notes: z.string().nullable().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().nullable().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().nullable().optional(),
  /** The status id of the applicant */ statusId: z.string().nullable().optional(),
  /** The date when the applicant was last contacted */ lastCall: z.string().nullable().optional(),
  /** The date when the applicant is next due to be contacted */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().nullable().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  type: z.array(z.string()).nullable().optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  style: z.array(z.string()).nullable().optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situation: z.array(z.string()).nullable().optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parking: z.array(z.string()).nullable().optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  age: z.array(z.string()).nullable().optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  locality: z.array(z.string()).nullable().optional(),
  /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  unmappedRequirements: z
    .array(
      /** Represents an unmapped requirement type */
      z.object({
        /** The type of unmapped requirement */ type: z.string().nullable().optional(),
        /** The value associated to the unmapped type */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMin: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMax: z.number().int().nullable().optional(),
  /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMin: z.number().int().nullable().optional(),
  /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMax: z.number().int().nullable().optional(),
  /** The applicant's location type (areas/addresses/none) */ locationType: z.string().nullable().optional(),
  /** The applicant's location options */ locationOptions: z.array(z.string()).nullable().optional(),
  /** The date and time the applicant was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag denoting whether or not this applicant is archived */ fromArchive: z.boolean().nullable().optional(),
  /** The details specific to applicants with a marketingMode of buying */
  buying: z
    .object({
      /** The lower bound of the applicant's budget */ priceFrom: z.number().int().nullable().optional(),
      /** The upper bound of the applicant's budget */ priceTo: z.number().int().nullable().optional(),
      /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).nullable().optional(),
      /** The identifier of the applicant's buying reason */ reasonId: z.string().nullable().optional(),
      /** The identifier of the applicant's selling position */ positionId: z.string().nullable().optional(),
      /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
      tenure: z.array(z.string()).nullable().optional(),
      /** The date when the applicant's current mortgage expires/is due for renewal */
      mortgageExpiry: z.string().nullable().optional(),
      /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
      leaseRemaining: z
        .object({
          /** The minimum number of years that must remain on the lease of a leasehold property */
          min: z.number().int().nullable().optional(),
          /** The maximum number of years that must remain on the lease of a leasehold property */
          max: z.number().int().nullable().optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  /** The details specific to applicants with a marketingMode of renting */
  renting: z
    .object({
      /** The date the applicant is looking to move to a new property */ moveDate: z.string().nullable().optional(),
      /** The applicant's preferred letting term (long/short/any) */ term: z.string().nullable().optional(),
      /** The lower bound of the applicant's budget */ rentFrom: z.number().nullable().optional(),
      /** The upper bound of the applicant's budget */ rentTo: z.number().nullable().optional(),
      /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
      rentFrequency: z.string().nullable().optional(),
      /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
      furnishing: z.array(z.string()).nullable().optional(),
      /** The identifier of the applicant's renting position */ positionId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The applicant's outdoor space requirements */
  externalArea: z
    .object({
      /** The unit of area that each amount corresponds to (acres/hectares) */ type: z.string().nullable().optional(),
      /** The minimum unit value of outside space that the applicant is looking for */
      amountFrom: z.number().nullable().optional(),
      /** The maximum unit value of outside space that the applicant is looking for */
      amountTo: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The applicant's indoor space requirements */
  internalArea: z
    .object({
      /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
      type: z.string().nullable().optional(),
      /** The unit value of inside space that the applicant is looking for */ amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** An applicant's source of enquiry */
  source: z
    .object({
      /** The unique identifier of the applicant's source */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** An applicant's commercial details */
  commercial: z
    .object({
      /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      useClass: z.array(z.string()).nullable().optional(),
      /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      floorLevel: z.array(z.string()).nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Details of regional information specific to Guernsey */
      ggy: z
        .object({
          /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
          market: z.array(z.string()).nullable().optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z
    .array(
      /** A summarised view of the details of a contact or company associated to an applicant */
      z.object({
        /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
        /** The complete name of the contact or company */ name: z.string().nullable().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
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
        /** The marketing consent status of the contact (grant/deny/notAsked) */
        marketingConsent: z.string().nullable().optional(),
        /** A flag denoting whether or not this relationship is archived */
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
  /** App specific metadata that has been set against the applicant */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the applicant. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
