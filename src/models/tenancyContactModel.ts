import { z } from 'zod'
import { tenancyContactAddressModel, TenancyContactAddressModel } from '@/models/tenancyContactAddressModel.ts'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/models/additionalContactDetailModel.ts'

/** A summarised view of the details of a contact or company associated to a tenancy */
export const tenancyContactModel = z.object({
  /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (company/contact) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact or company */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact or company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact or company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact or company */ email: z.string().nullable().optional(),
  /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
  paymentReference: z.string().nullable().optional(),
  /** A flag denoting whether or not this roie on the system is now archived */
  fromArchive: z.boolean().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().nullable().optional(),
  primaryAddress: tenancyContactAddressModel.nullable().optional(),
  /** The date the tenant moved in (or will move in) to the property */ occupyOn: z.string().nullable().optional(),
  /** The date the tenant vacated (or is due to vacate) the property */ vacateOn: z.string().nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** A summarised view of the details of a contact or company associated to a tenancy */
export type TenancyContactModel = {
  id?: /** The unique identifier of the contact or company */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (company/contact) */ string | undefined
  homePhone?: /** The home phone number of the contact or company */ string | undefined
  workPhone?: /** The work phone number of the contact or company */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact or company */ string | undefined
  email?: /** The email address of the contact or company */ string | undefined
  paymentReference?: /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
  string | undefined
  fromArchive?: /** A flag denoting whether or not this roie on the system is now archived */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */ string | undefined
  primaryAddress?: TenancyContactAddressModel | undefined
  occupyOn?: /** The date the tenant moved in (or will move in) to the property */ string | undefined
  vacateOn?: /** The date the tenant vacated (or is due to vacate) the property */ string | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
