import { z } from 'zod'
import { applicantContactAddressModel, ApplicantContactAddressModel } from '@/schemas/applicantContactAddressModel.generated.tsx'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact or company associated to an applicant */
export const applicantContactModel = /** A summarised view of the details of a contact or company associated to an applicant */
z.object({id: /** The unique identifier of the contact or company */
z.string().optional(), name: /** The complete name of the contact or company */
z.string().optional(), title: /** The title of the contact (Available when 'type' is 'contact') */
z.string().optional(), forename: /** The forename of the contact (Available when 'type' is 'contact') */
z.string().optional(), surname: /** The surname of the contact (Available when 'type' is 'contact') */
z.string().optional(), dateOfBirth: /** The date of birth of the contact (Available when 'type' is 'contact') */
z.string().optional(), type: /** The type of the contact (company/contact) */
z.string().optional(), homePhone: /** The home phone number of the contact or company */
z.string().optional(), workPhone: /** The work phone number of the contact or company */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact or company */
z.string().optional(), email: /** The email address of the contact or company */
z.string().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
z.string().optional(), fromArchive: /** A flag denoting whether or not this relationship is archived */
z.boolean().optional(), primaryAddress: applicantContactAddressModel.optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalContactDetailModel).optional()});
/** A summarised view of the details of a contact or company associated to an applicant */
export type ApplicantContactModel = /** A summarised view of the details of a contact or company associated to an applicant */
{id?: /** The unique identifier of the contact or company */
string | undefined, name?: /** The complete name of the contact or company */
string | undefined, title?: /** The title of the contact (Available when 'type' is 'contact') */
string | undefined, forename?: /** The forename of the contact (Available when 'type' is 'contact') */
string | undefined, surname?: /** The surname of the contact (Available when 'type' is 'contact') */
string | undefined, dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */
string | undefined, type?: /** The type of the contact (company/contact) */
string | undefined, homePhone?: /** The home phone number of the contact or company */
string | undefined, workPhone?: /** The work phone number of the contact or company */
string | undefined, mobilePhone?: /** The mobile phone number of the contact or company */
string | undefined, email?: /** The email address of the contact or company */
string | undefined, marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */
string | undefined, fromArchive?: /** A flag denoting whether or not this relationship is archived */
boolean | undefined, primaryAddress?: ApplicantContactAddressModel | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalContactDetailModel> | undefined};