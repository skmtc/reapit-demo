import { z } from 'zod'
import { offerContactAddressModel, OfferContactAddressModel } from '@/models/offerContactAddressModel.ts'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/models/additionalContactDetailModel.ts'

/** A summarised view of the details of a contact associated to an offer */
export const offerContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (contact/company) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().nullable().optional(),
  primaryAddress: offerContactAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** A summarised view of the details of a contact associated to an offer */
export type OfferContactModel = {
  id?: /** The unique identifier of the contact */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (contact/company) */ string | undefined
  homePhone?: /** The home phone number of the contact */ string | undefined
  workPhone?: /** The work phone number of the contact */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */ string | undefined
  primaryAddress?: OfferContactAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
