import { z } from 'zod'
import { offerContactAddressModel, OfferContactAddressModel } from '@/schemas/offerContactAddressModel.generated.tsx'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact associated to an offer */
export const offerContactModel = /** A summarised view of the details of a contact associated to an offer */
z.object({id: /** The unique identifier of the contact */
z.string().optional(), name: /** The complete name of the contact or company */
z.string().optional(), title: /** The title of the contact (Available when 'type' is 'contact') */
z.string().optional(), forename: /** The forename of the contact (Available when 'type' is 'contact') */
z.string().optional(), surname: /** The surname of the contact (Available when 'type' is 'contact') */
z.string().optional(), dateOfBirth: /** The date of birth of the contact (Available when 'type' is 'contact') */
z.string().optional(), type: /** The type of the contact (contact/company) */
z.string().optional(), homePhone: /** The home phone number of the contact */
z.string().optional(), workPhone: /** The work phone number of the contact */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact */
z.string().optional(), email: /** The email address of the contact */
z.string().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
z.string().optional(), primaryAddress: offerContactAddressModel.optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalContactDetailModel).optional()});
/** A summarised view of the details of a contact associated to an offer */
export type OfferContactModel = /** A summarised view of the details of a contact associated to an offer */
{id?: /** The unique identifier of the contact */
string | undefined, name?: /** The complete name of the contact or company */
string | undefined, title?: /** The title of the contact (Available when 'type' is 'contact') */
string | undefined, forename?: /** The forename of the contact (Available when 'type' is 'contact') */
string | undefined, surname?: /** The surname of the contact (Available when 'type' is 'contact') */
string | undefined, dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */
string | undefined, type?: /** The type of the contact (contact/company) */
string | undefined, homePhone?: /** The home phone number of the contact */
string | undefined, workPhone?: /** The work phone number of the contact */
string | undefined, mobilePhone?: /** The mobile phone number of the contact */
string | undefined, email?: /** The email address of the contact */
string | undefined, marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
string | undefined, primaryAddress?: OfferContactAddressModel | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalContactDetailModel> | undefined};