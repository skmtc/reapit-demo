import { z } from 'zod'
import { createEnquiryAddressModel, CreateEnquiryAddressModel } from '@/schemas/createEnquiryAddressModel.generated.tsx'
import { createEnquiryBuyingModel, CreateEnquiryBuyingModel } from '@/schemas/createEnquiryBuyingModel.generated.tsx'
import { createEnquiryRentingModel, CreateEnquiryRentingModel } from '@/schemas/createEnquiryRentingModel.generated.tsx'

/** Request body used to create an enquiry */
export const createEnquiryModel =
  /** Request body used to create an enquiry */
  z.object({
    /** The title of the individual making the enquiry */ title: z.string(),
    /** The forename of the individual making the enquiry */ forename: z.string(),
    /** The surname of the individual making the enquiry */ surname: z.string(),
    /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
    position: z.string().optional(),
    /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    enquiryType: z.string(),
    /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    message: z.string(),
    /** The unique identifier of the related office */ officeId: z.string(),
    /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    marketingConsent: z.string(),
    /** The name of the source that the enquiry was generated from */ sourceName: z.string(),
    /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
    homePhone: z.string().optional(),
    /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
    workPhone: z.string().optional(),
    /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
    mobilePhone: z.string().optional(),
    /** The email of the individual making the enquiry (Required when no other contact details are given) */
    email: z.string().optional(),
    address: createEnquiryAddressModel.optional(),
    buying: createEnquiryBuyingModel.optional(),
    renting: createEnquiryRentingModel.optional(),
    /** The number of bedrooms the prospective buyer or tenant requires */ bedrooms: z.number().int().optional(),
    /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
    propertyIds: z.array(z.string()).optional(),
  })
/** Request body used to create an enquiry */
export type CreateEnquiryModel =
  /** Request body used to create an enquiry */
  {
    title: /** The title of the individual making the enquiry */ string
    forename: /** The forename of the individual making the enquiry */ string
    surname: /** The surname of the individual making the enquiry */ string
    position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
    string | undefined
    enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    string
    message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    string
    officeId: /** The unique identifier of the related office */ string
    marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    string
    sourceName: /** The name of the source that the enquiry was generated from */ string
    homePhone?: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    workPhone?: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    email?: /** The email of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    address?: CreateEnquiryAddressModel | undefined
    buying?: CreateEnquiryBuyingModel | undefined
    renting?: CreateEnquiryRentingModel | undefined
    bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */ number | undefined
    propertyIds?: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
    Array<string> | undefined
  }
