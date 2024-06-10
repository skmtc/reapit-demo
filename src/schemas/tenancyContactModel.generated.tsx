import { z } from 'zod'
import {
  tenancyContactAddressModel,
  TenancyContactAddressModel,
} from '@/schemas/tenancyContactAddressModel.generated.tsx'
import {
  additionalContactDetailModel,
  AdditionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact or company associated to a tenancy */
export const tenancyContactModel =
  /** A summarised view of the details of a contact or company associated to a tenancy */
  z.object({
    /** The unique identifier of the contact or company */ id: z.string().optional().nullable(),
    /** The complete name of the contact or company */ name: z.string().optional().nullable(),
    /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().optional().nullable(),
    /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().optional().nullable(),
    /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().optional().nullable(),
    /** The date of birth of the contact (Available when 'type' is 'contact') */
    dateOfBirth: z.string().optional().nullable(),
    /** The type of the contact (company/contact) */ type: z.string().optional().nullable(),
    /** The home phone number of the contact or company */ homePhone: z.string().optional().nullable(),
    /** The work phone number of the contact or company */ workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the contact or company */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the contact or company */ email: z.string().optional().nullable(),
    /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
    paymentReference: z.string().optional().nullable(),
    /** A flag denoting whether or not this roie on the system is now archived */
    fromArchive: z.boolean().optional().nullable(),
    /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    marketingConsent: z.string().optional().nullable(),
    primaryAddress: tenancyContactAddressModel.optional().nullable(),
    /** The date the tenant moved in (or will move in) to the property */ occupyOn: z.string().optional().nullable(),
    /** The date the tenant vacated (or is due to vacate) the property */ vacateOn: z.string().optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional().nullable(),
  })
/** A summarised view of the details of a contact or company associated to a tenancy */
export type TenancyContactModel =
  /** A summarised view of the details of a contact or company associated to a tenancy */
  {
    id?: /** The unique identifier of the contact or company */ string | null | undefined
    name?: /** The complete name of the contact or company */ string | null | undefined
    title?: /** The title of the contact (Available when 'type' is 'contact') */ string | null | undefined
    forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | null | undefined
    surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | null | undefined
    dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | null | undefined
    type?: /** The type of the contact (company/contact) */ string | null | undefined
    homePhone?: /** The home phone number of the contact or company */ string | null | undefined
    workPhone?: /** The work phone number of the contact or company */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the contact or company */ string | null | undefined
    email?: /** The email address of the contact or company */ string | null | undefined
    paymentReference?:
      | /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
      string
      | null
      | undefined
    fromArchive?:
      | /** A flag denoting whether or not this roie on the system is now archived */
      boolean
      | null
      | undefined
    marketingConsent?:
      | /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
      string
      | null
      | undefined
    primaryAddress?: TenancyContactAddressModel | null | undefined
    occupyOn?: /** The date the tenant moved in (or will move in) to the property */ string | null | undefined
    vacateOn?: /** The date the tenant vacated (or is due to vacate) the property */ string | null | undefined
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalContactDetailModel>
      | null
      | undefined
  }
