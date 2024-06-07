import { z } from 'zod'
import { applicantContactAddressModel, ApplicantContactAddressModel } from '@/schemas/applicantContactAddressModel.generated.tsx'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact or company associated to a vendor */
export const vendorContactModel = /** A summarised view of the details of a contact or company associated to a vendor */
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
z.string().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
z.string().optional(), fromArchive: /** Flag to determine if this role on the system is now archived */
z.boolean().optional(), primaryAddress: applicantContactAddressModel.optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalContactDetailModel).optional()});
/** A summarised view of the details of a contact or company associated to a vendor */
export type VendorContactModel = /** A summarised view of the details of a contact or company associated to a vendor */
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
string | undefined, marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
string | undefined, fromArchive?: /** Flag to determine if this role on the system is now archived */
boolean | undefined, primaryAddress?: ApplicantContactAddressModel | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalContactDetailModel> | undefined};