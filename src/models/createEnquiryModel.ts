import { z } from 'zod'

/** Request body used to create an enquiry */
export const createEnquiryModel = z.object({
  /** The title of the individual making the enquiry */ title: z.string(),
  /** The forename of the individual making the enquiry */ forename: z.string(),
  /** The surname of the individual making the enquiry */ surname: z.string(),
  /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  position: z.string().nullable().optional(),
  /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  enquiryType: z.string(),
  /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  message: z.string(),
  /** The unique identifier of the related office */ officeId: z.string(),
  /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  marketingConsent: z.string(),
  /** The name of the source that the enquiry was generated from */ sourceName: z.string(),
  /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
  homePhone: z.string().nullable().optional(),
  /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
  workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
  mobilePhone: z.string().nullable().optional(),
  /** The email of the individual making the enquiry (Required when no other contact details are given) */
  email: z.string().nullable().optional(),
  /** Request body used to create a enquiries address */
  address: z
    .object({
      /** Sets the building name */ buildingName: z.string().nullable().optional(),
      /** Sets the building number */ buildingNumber: z.string().nullable().optional(),
      /** Sets the first line of the address */ line1: z.string().nullable().optional(),
      /** Sets the second line of the address */ line2: z.string().nullable().optional(),
      /** Sets the third line of the address */ line3: z.string().nullable().optional(),
      /** Sets the fourth line of the address */ line4: z.string().nullable().optional(),
      /** Sets the postcode */ postcode: z.string().nullable().optional(),
      /** Sets the ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The details specific to a buying enquiry */
  buying: z
    .object({
      /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().nullable().optional(),
      /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The details specific to renting enquiry. When type is renting. */
  renting: z
    .object({
      /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().int().nullable().optional(),
      /** The upper bound of the prospective tenant's budget */ rentTo: z.number().int().nullable().optional(),
      /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
      rentFrequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The number of bedrooms the prospective buyer or tenant requires */
  bedrooms: z.number().int().nullable().optional(),
  /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  propertyIds: z.array(z.string()).nullable().optional(),
})
