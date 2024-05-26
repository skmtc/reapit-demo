import { z } from 'zod'

/** Request body used to create a new applicant */
export const createApplicantModel = z.object({
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ marketingMode: z.string(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  currency: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().nullable().optional(),
  /** A free text field describing any adhoc buying or renting requirements */ notes: z.string().nullable().optional(),
  /** The status id of the applicant */ statusId: z.string().nullable().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().nullable().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().nullable().optional(),
  /** The date when the applicant was last contacted */ lastCall: z.string().nullable().optional(),
  /** The date when the applicant is next due to be contacted */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().nullable().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).nullable().optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).nullable().optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).nullable().optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).nullable().optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).nullable().optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).nullable().optional(),
  /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  /** The minimum number of bedrooms the applicant requires */ bedroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms the applicant requires */ bedroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of reception rooms the applicant requires */
  receptionsMin: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms the applicant requires */
  receptionsMax: z.number().int().nullable().optional(),
  /** The minimum number of bathrooms the applicant requires */ bathroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms the applicant requires */ bathroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of parking spaces the applicant requires */
  parkingSpacesMin: z.number().int().nullable().optional(),
  /** The maximum number of parking spaces the applicant requires */
  parkingSpacesMax: z.number().int().nullable().optional(),
  /** The applicant's location type (areas/addresses/none) */ locationType: z.string().nullable().optional(),
  /** The applicant's location options */ locationOptions: z.array(z.string()).nullable().optional(),
  /** The details specific to applicants with a marketingMode of buying */
  buying: z
    .object({
      /** The identifier of the applicant's buying reason */ reasonId: z.string().nullable().optional(),
      /** The identifier of the applicant's selling position */ positionId: z.string().nullable().optional(),
      /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
      priceFrom: z.number().int().nullable().optional(),
      /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
      priceTo: z.number().int().nullable().optional(),
      /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).nullable().optional(),
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
      /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
      rentFrom: z.number().nullable().optional(),
      /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
      rentTo: z.number().nullable().optional(),
      /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
      rentFrequency: z.string().nullable().optional(),
      /** A list of property furnishing requirements taken from the full listing of the associated department */
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
  officeIds: z.array(z.string()),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z.array(
    /** Request body used to create a relationship between an applicant and a contact or company */
    z.object({
      /** The unique identifier of the contact or company to create a relationship with */ associatedId: z.string(),
      /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
    }),
  ),
  /** App specific metadata to set against the applicant */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new applicant */
export type CreateApplicantModel = {
  marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ string
  currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  string | undefined
  active?: /** A flag determining whether or not the applicant is actively looking for a property */ boolean | undefined
  notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
  statusId?: /** The status id of the applicant */ string | undefined
  sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  string | undefined
  lastCall?: /** The date when the applicant was last contacted */ string | undefined
  nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
  departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string
  solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined
  potentialClient?: /** A flag determining whether or not the applicant is a potential client */ boolean | undefined
  type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  bedroomsMin?: /** The minimum number of bedrooms the applicant requires */ number | undefined
  bedroomsMax?: /** The maximum number of bedrooms the applicant requires */ number | undefined
  receptionsMin?: /** The minimum number of reception rooms the applicant requires */ number | undefined
  receptionsMax?: /** The maximum number of reception rooms the applicant requires */ number | undefined
  bathroomsMin?: /** The minimum number of bathrooms the applicant requires */ number | undefined
  bathroomsMax?: /** The maximum number of bathrooms the applicant requires */ number | undefined
  parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */ number | undefined
  parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */ number | undefined
  locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined
  locationOptions?: /** The applicant's location options */ Array<string> | undefined
  buying?: /** The details specific to applicants with a marketingMode of buying */
  | {
        reasonId?: /** The identifier of the applicant's buying reason */ string | undefined
        positionId?: /** The identifier of the applicant's selling position */ string | undefined
        priceFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
        number | undefined
        priceTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
        number | undefined
        decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
        Array<string> | undefined
        tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
        Array<string> | undefined
        mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */
        string | undefined
        leaseRemaining?: /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
        | {
              min?: /** The minimum number of years that must remain on the lease of a leasehold property */
              number | undefined
              max?: /** The maximum number of years that must remain on the lease of a leasehold property */
              number | undefined
            }
          | undefined
      }
    | undefined
  renting?: /** The details specific to applicants with a marketingMode of renting */
  | {
        moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
        term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
        rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
        number | undefined
        rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
        number | undefined
        rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
        string | undefined
        furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
        Array<string> | undefined
        positionId?: /** The identifier of the applicant's renting position */ string | undefined
      }
    | undefined
  externalArea?: /** The applicant's outdoor space requirements */
  | {
        type?: /** The unit of area that each amount corresponds to (acres/hectares) */ string | undefined
        amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */ number | undefined
        amountTo?: /** The maximum unit value of outside space that the applicant is looking for */ number | undefined
      }
    | undefined
  internalArea?: /** The applicant's indoor space requirements */
  | {
        type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */ string | undefined
        amount?: /** The unit value of inside space that the applicant is looking for */ number | undefined
      }
    | undefined
  source?: /** An applicant's source of enquiry */
  | {
        id?: /** The unique identifier of the applicant's source */ string | undefined
        type?: /** The source type (office/source) */ string | undefined
      }
    | undefined
  regional?: /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  | {
        ggy?: /** Details of regional information specific to Guernsey */
        | {
              market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
              Array<string> | undefined
            }
          | undefined
      }
    | undefined
  officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  Array<string>
  negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  Array<string>
  related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  Array</** Request body used to create a relationship between an applicant and a contact or company */
  {
    associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
    associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
  }>
  metadata?: /** App specific metadata to set against the applicant */ Record<string, Record<string, never>> | undefined
}
