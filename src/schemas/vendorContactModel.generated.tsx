import { z } from 'zod'
import {
  applicantContactAddressModel,
  ApplicantContactAddressModel,
} from '@/schemas/applicantContactAddressModel.generated.tsx'
import {
  additionalContactDetailModel,
  AdditionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'

/** A summarised view of the details of a contact or company associated to a vendor */
export const vendorContactModel =
  /** A summarised view of the details of a contact or company associated to a vendor */
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
    /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    marketingConsent: z.string().optional(),
    /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().optional(),
    primaryAddress: applicantContactAddressModel.optional(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional(),
  })
/** A summarised view of the details of a contact or company associated to a vendor */
export type VendorContactModel =
  /** A summarised view of the details of a contact or company associated to a vendor */
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
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    string | undefined
    fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | undefined
    primaryAddress?: ApplicantContactAddressModel | undefined
    additionalContactDetails?: /** A collection of additional contact details */
    Array<AdditionalContactDetailModel> | undefined
  }
