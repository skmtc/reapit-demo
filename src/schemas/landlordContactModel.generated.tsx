import { z } from 'zod'
import {
  landlordContactAddressModel,
  LandlordContactAddressModel,
} from '@/schemas/landlordContactAddressModel.generated.tsx'
import {
  additionalContactDetailModel,
  AdditionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact associated to a landlord */
export const landlordContactModel =
  /** A summarised view of the details of a contact associated to a landlord */
  z.object({
    /** The unique identifier of the contact */ id: z.string().optional(),
    /** The complete name of the contact or company */ name: z.string().optional(),
    /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().optional(),
    /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().optional(),
    /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().optional(),
    /** The date of birth of the contact (Available when 'type' is 'contact') */ dateOfBirth: z.string().optional(),
    /** The type of the contact (contact/company) */ type: z.string().optional(),
    /** The home phone number of the contact */ homePhone: z.string().optional(),
    /** The work phone number of the contact */ workPhone: z.string().optional(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional(),
    /** The email address of the contact */ email: z.string().optional(),
    /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    marketingConsent: z.string().optional(),
    primaryAddress: landlordContactAddressModel.optional(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional(),
  })
/** A summarised view of the details of a contact associated to a landlord */
export type LandlordContactModel =
  /** A summarised view of the details of a contact associated to a landlord */
  {
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
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    string | undefined
    primaryAddress?: LandlordContactAddressModel | undefined
    additionalContactDetails?: /** A collection of additional contact details */
    Array<AdditionalContactDetailModel> | undefined
  }
