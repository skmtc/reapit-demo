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
    /** The unique identifier of the contact or company */ id: z.string().optional(),
    /** The complete name of the contact or company */ name: z.string().optional(),
    /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().optional(),
    /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().optional(),
    /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().optional(),
    /** The date of birth of the contact (Available when 'type' is 'contact') */ dateOfBirth: z.string().optional(),
    /** The type of the contact (company/contact) */ type: z.string().optional(),
    /** The home phone number of the contact or company */ homePhone: z.string().optional(),
    /** The work phone number of the contact or company */ workPhone: z.string().optional(),
    /** The mobile phone number of the contact or company */ mobilePhone: z.string().optional(),
    /** The email address of the contact or company */ email: z.string().optional(),
    /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
    paymentReference: z.string().optional(),
    /** A flag denoting whether or not this roie on the system is now archived */ fromArchive: z.boolean().optional(),
    /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    marketingConsent: z.string().optional(),
    primaryAddress: tenancyContactAddressModel.optional(),
    /** The date the tenant moved in (or will move in) to the property */ occupyOn: z.string().optional(),
    /** The date the tenant vacated (or is due to vacate) the property */ vacateOn: z.string().optional(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional(),
  })
/** A summarised view of the details of a contact or company associated to a tenancy */
export type TenancyContactModel =
  /** A summarised view of the details of a contact or company associated to a tenancy */
  {
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
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    string | undefined
    primaryAddress?: TenancyContactAddressModel | undefined
    occupyOn?: /** The date the tenant moved in (or will move in) to the property */ string | undefined
    vacateOn?: /** The date the tenant vacated (or is due to vacate) the property */ string | undefined
    additionalContactDetails?: /** A collection of additional contact details */
    Array<AdditionalContactDetailModel> | undefined
  }
