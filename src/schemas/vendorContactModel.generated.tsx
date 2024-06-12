import {
  ApplicantContactAddressModel,
  applicantContactAddressModel,
} from '@/schemas/applicantContactAddressModel.generated.tsx'
import {
  AdditionalContactDetailModel,
  additionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'
import { z } from 'zod'

/** A summarised view of the details of a contact or company associated to a vendor */
export type VendorContactModel =
  /** A summarised view of the details of a contact or company associated to a vendor */
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
    marketingConsent?:
      | /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
      string
      | null
      | undefined
    fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | null | undefined
    primaryAddress?: ApplicantContactAddressModel | null | undefined
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalContactDetailModel>
      | null
      | undefined
  }
/** A summarised view of the details of a contact or company associated to a vendor */
export const vendorContactModel =
  /** A summarised view of the details of a contact or company associated to a vendor */
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
    /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
    marketingConsent: z.string().optional().nullable(),
    /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().optional().nullable(),
    primaryAddress: applicantContactAddressModel.optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional().nullable(),
  })
