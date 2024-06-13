import { CreateEnquiryAddressModel, createEnquiryAddressModel } from '@/schemas/createEnquiryAddressModel.generated.tsx'
import { CreateEnquiryBuyingModel, createEnquiryBuyingModel } from '@/schemas/createEnquiryBuyingModel.generated.tsx'
import { CreateEnquiryRentingModel, createEnquiryRentingModel } from '@/schemas/createEnquiryRentingModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create an enquiry */
export type CreateEnquiryModel =
  /** Request body used to create an enquiry */
  {
    title: /** The title of the individual making the enquiry */ string
    forename: /** The forename of the individual making the enquiry */ string
    surname: /** The surname of the individual making the enquiry */ string
    position?:
      | /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
      string
      | null
      | undefined
    enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    string
    message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    string
    officeId: /** The unique identifier of the related office */ string
    marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    string
    sourceName: /** The name of the source that the enquiry was generated from */ string
    homePhone?:
      | /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
      string
      | null
      | undefined
    workPhone?:
      | /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
      string
      | null
      | undefined
    mobilePhone?:
      | /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
      string
      | null
      | undefined
    email?:
      | /** The email of the individual making the enquiry (Required when no other contact details are given) */
      string
      | null
      | undefined
    address?: CreateEnquiryAddressModel | null | undefined
    buying?: CreateEnquiryBuyingModel | null | undefined
    renting?: CreateEnquiryRentingModel | null | undefined
    bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */ number | null | undefined
    propertyIds?:
      | /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
      Array<string>
      | null
      | undefined
  }
export const createEnquiryModel =
  /** Request body used to create an enquiry */
  z.object({
    /** The title of the individual making the enquiry */ title: z.string(),
    /** The forename of the individual making the enquiry */ forename: z.string(),
    /** The surname of the individual making the enquiry */ surname: z.string(),
    /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
    position: z.string().optional().nullable(),
    /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    enquiryType: z.string(),
    /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    message: z.string(),
    /** The unique identifier of the related office */ officeId: z.string(),
    /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    marketingConsent: z.string(),
    /** The name of the source that the enquiry was generated from */ sourceName: z.string(),
    /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
    homePhone: z.string().optional().nullable(),
    /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
    workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
    mobilePhone: z.string().optional().nullable(),
    /** The email of the individual making the enquiry (Required when no other contact details are given) */
    email: z.string().optional().nullable(),
    address: createEnquiryAddressModel.optional().nullable(),
    buying: createEnquiryBuyingModel.optional().nullable(),
    renting: createEnquiryRentingModel.optional().nullable(),
    /** The number of bedrooms the prospective buyer or tenant requires */
    bedrooms: z.number().int().optional().nullable(),
    /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
    propertyIds: z.array(z.string()).optional().nullable(),
  })
