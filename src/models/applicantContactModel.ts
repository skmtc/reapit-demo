import { z } from 'zod'
import { applicantContactAddressModel, ApplicantContactAddressModel } from '@/models/applicantContactAddressModel.ts'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/models/additionalContactDetailModel.ts'

/** A summarised view of the details of a contact or company associated to an applicant */
export const applicantContactModel = z.object({
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
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
  primaryAddress: applicantContactAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** A summarised view of the details of a contact or company associated to an applicant */
export type ApplicantContactModel = {
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
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */ string | undefined
  fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | undefined
  primaryAddress?: ApplicantContactAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
