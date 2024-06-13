import { CreateContactSourceModel, createContactSourceModel } from '@/schemas/createContactSourceModel.generated.tsx'
import { CreateContactAddressModel, createContactAddressModel } from '@/schemas/createContactAddressModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new contact */
export type CreateContactModel =
  /** Request body used to create a new contact */
  {
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | null | undefined
    forename?: /** The contact's forename */ string | null | undefined
    surname: /** The contact's surname */ string
    dateOfBirth?: /** The contact's date of birth */ string | null | undefined
    active?: /** A flag determining whether or not the contact is currently active */ boolean | null | undefined
    marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */ string
    source?: CreateContactSourceModel | null | undefined
    homePhone?:
      | /** The home phone number of the contact (Required when no other contact details are provided) */
      string
      | null
      | undefined
    workPhone?:
      | /** The work phone number of the contact (Required when no other contact details are provided) */
      string
      | null
      | undefined
    mobilePhone?:
      | /** The mobile phone number of the contact (Required when no other contact details are provided) */
      string
      | null
      | undefined
    email?:
      | /** The email address of the contact (Required when no other contact details are provided) */
      string
      | null
      | undefined
    officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string>
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | null | undefined
    primaryAddress?: CreateContactAddressModel | null | undefined
    secondaryAddress?: CreateContactAddressModel | null | undefined
    workAddress?: CreateContactAddressModel | null | undefined
    communicationPreferenceLetter?:
      | /** A flag determining whether or not the contact is happy to receive communications by letter */
      boolean
      | null
      | undefined
    communicationPreferenceEmail?:
      | /** A flag determining whether or not the contact is happy to receive communications by email */
      boolean
      | null
      | undefined
    communicationPreferencePhone?:
      | /** A flag determining whether or not the contact is happy to receive communications by phone */
      boolean
      | null
      | undefined
    communicationPreferenceSMS?:
      | /** A flag determining whether or not the contact is happy to receive communications by SMS */
      boolean
      | null
      | undefined
    metadata?:
      | /** App specific metadata to set against the contact */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createContactModel =
  /** Request body used to create a new contact */
  z.object({
    /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().optional().nullable(),
    /** The contact's forename */ forename: z.string().optional().nullable(),
    /** The contact's surname */ surname: z.string(),
    /** The contact's date of birth */ dateOfBirth: z.string().optional().nullable(),
    /** A flag determining whether or not the contact is currently active */ active: z.boolean().optional().nullable(),
    /** The marketing consent status of the contact (grant/deny/notAsked) */ marketingConsent: z.string(),
    source: createContactSourceModel.optional().nullable(),
    /** The home phone number of the contact (Required when no other contact details are provided) */
    homePhone: z.string().optional().nullable(),
    /** The work phone number of the contact (Required when no other contact details are provided) */
    workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the contact (Required when no other contact details are provided) */
    mobilePhone: z.string().optional().nullable(),
    /** The email address of the contact (Required when no other contact details are provided) */
    email: z.string().optional().nullable(),
    /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()),
    /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()),
    /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).optional().nullable(),
    primaryAddress: createContactAddressModel.optional().nullable(),
    secondaryAddress: createContactAddressModel.optional().nullable(),
    workAddress: createContactAddressModel.optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by SMS */
    communicationPreferenceSMS: z.boolean().optional().nullable(),
    /** App specific metadata to set against the contact */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
