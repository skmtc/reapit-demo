import { z } from 'zod'
import { tenancyContactAddressModel, TenancyContactAddressModel } from '@/schemas/tenancyContactAddressModel.generated.tsx'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact or company associated to a tenancy */
export const tenancyContactModel = /** A summarised view of the details of a contact or company associated to a tenancy */
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
z.string().optional(), paymentReference: /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
z.string().optional(), fromArchive: /** A flag denoting whether or not this roie on the system is now archived */
z.boolean().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
z.string().optional(), primaryAddress: tenancyContactAddressModel.optional(), occupyOn: /** The date the tenant moved in (or will move in) to the property */
z.string().optional(), vacateOn: /** The date the tenant vacated (or is due to vacate) the property */
z.string().optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalContactDetailModel).optional()});
/** A summarised view of the details of a contact or company associated to a tenancy */
export type TenancyContactModel = /** A summarised view of the details of a contact or company associated to a tenancy */
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
string | undefined, paymentReference?: /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
string | undefined, fromArchive?: /** A flag denoting whether or not this roie on the system is now archived */
boolean | undefined, marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
string | undefined, primaryAddress?: TenancyContactAddressModel | undefined, occupyOn?: /** The date the tenant moved in (or will move in) to the property */
string | undefined, vacateOn?: /** The date the tenant vacated (or is due to vacate) the property */
string | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalContactDetailModel> | undefined};