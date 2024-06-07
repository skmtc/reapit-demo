import { z } from 'zod'
import { createEnquiryAddressModel, CreateEnquiryAddressModel } from '@/schemas/createEnquiryAddressModel.generated.tsx'
import { createEnquiryBuyingModel, CreateEnquiryBuyingModel } from '@/schemas/createEnquiryBuyingModel.generated.tsx'
import { createEnquiryRentingModel, CreateEnquiryRentingModel } from '@/schemas/createEnquiryRentingModel.generated.tsx'

/** Request body used to create an enquiry */
export const createEnquiryModel = /** Request body used to create an enquiry */
z.object({title: /** The title of the individual making the enquiry */
z.string(), forename: /** The forename of the individual making the enquiry */
z.string(), surname: /** The surname of the individual making the enquiry */
z.string(), position: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
z.string().optional(), enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
z.string(), message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
z.string(), officeId: /** The unique identifier of the related office */
z.string(), marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
z.string(), sourceName: /** The name of the source that the enquiry was generated from */
z.string(), homePhone: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
z.string().optional(), workPhone: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
z.string().optional(), mobilePhone: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
z.string().optional(), email: /** The email of the individual making the enquiry (Required when no other contact details are given) */
z.string().optional(), address: createEnquiryAddressModel.optional(), buying: createEnquiryBuyingModel.optional(), renting: createEnquiryRentingModel.optional(), bedrooms: /** The number of bedrooms the prospective buyer or tenant requires */
z.number().int().optional(), propertyIds: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
z.array(z.string()).optional()});
/** Request body used to create an enquiry */
export type CreateEnquiryModel = /** Request body used to create an enquiry */
{title: /** The title of the individual making the enquiry */
string, forename: /** The forename of the individual making the enquiry */
string, surname: /** The surname of the individual making the enquiry */
string, position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
string | undefined, enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
string, message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
string, officeId: /** The unique identifier of the related office */
string, marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
string, sourceName: /** The name of the source that the enquiry was generated from */
string, homePhone?: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
string | undefined, workPhone?: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
string | undefined, mobilePhone?: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
string | undefined, email?: /** The email of the individual making the enquiry (Required when no other contact details are given) */
string | undefined, address?: CreateEnquiryAddressModel | undefined, buying?: CreateEnquiryBuyingModel | undefined, renting?: CreateEnquiryRentingModel | undefined, bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */
number | undefined, propertyIds?: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
Array<string> | undefined};