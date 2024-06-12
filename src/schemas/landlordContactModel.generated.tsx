import {
  LandlordContactAddressModel,
  landlordContactAddressModel,
} from '@/schemas/landlordContactAddressModel.generated.tsx'
import {
  AdditionalContactDetailModel,
  additionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'
import { z } from 'zod'

/** A summarised view of the details of a contact associated to a landlord */
export type LandlordContactModel =
  /** A summarised view of the details of a contact associated to a landlord */
  {
    id?: /** The unique identifier of the contact */ string | null | undefined
    name?: /** The complete name of the contact or company */ string | null | undefined
    title?: /** The title of the contact (Available when 'type' is 'contact') */ string | null | undefined
    forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | null | undefined
    surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | null | undefined
    dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | null | undefined
    type?: /** The type of the contact (contact/company) */ string | null | undefined
    homePhone?: /** The home phone number of the contact */ string | null | undefined
    workPhone?: /** The work phone number of the contact */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | null | undefined
    email?: /** The email address of the contact */ string | null | undefined
    marketingConsent?:
      | /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
      string
      | null
      | undefined
    primaryAddress?: LandlordContactAddressModel | null | undefined
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalContactDetailModel>
      | null
      | undefined
  }
/** A summarised view of the details of a contact associated to a landlord */
export const landlordContactModel =
  /** A summarised view of the details of a contact associated to a landlord */
  z.object({
    /** The unique identifier of the contact */ id: z.string().optional().nullable(),
    /** The complete name of the contact or company */ name: z.string().optional().nullable(),
    /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().optional().nullable(),
    /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().optional().nullable(),
    /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().optional().nullable(),
    /** The date of birth of the contact (Available when 'type' is 'contact') */
    dateOfBirth: z.string().optional().nullable(),
    /** The type of the contact (contact/company) */ type: z.string().optional().nullable(),
    /** The home phone number of the contact */ homePhone: z.string().optional().nullable(),
    /** The work phone number of the contact */ workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the contact */ email: z.string().optional().nullable(),
    /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    marketingConsent: z.string().optional().nullable(),
    primaryAddress: landlordContactAddressModel.optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional().nullable(),
  })
