import { z } from 'zod'
import { createContactSourceModel, CreateContactSourceModel } from '@/schemas/createContactSourceModel.generated.tsx'
import { createContactAddressModel, CreateContactAddressModel } from '@/schemas/createContactAddressModel.generated.tsx'

/** Request body used to create a new contact */
export const createContactModel =
  /** Request body used to create a new contact */
  z.object({
    /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().optional(),
    /** The contact's forename */ forename: z.string().optional(),
    /** The contact's surname */ surname: z.string(),
    /** The contact's date of birth */ dateOfBirth: z.string().optional(),
    /** A flag determining whether or not the contact is currently active */ active: z.boolean().optional(),
    /** The marketing consent status of the contact (grant/deny/notAsked) */ marketingConsent: z.string(),
    source: createContactSourceModel.optional(),
    /** The home phone number of the contact (Required when no other contact details are provided) */
    homePhone: z.string().optional(),
    /** The work phone number of the contact (Required when no other contact details are provided) */
    workPhone: z.string().optional(),
    /** The mobile phone number of the contact (Required when no other contact details are provided) */
    mobilePhone: z.string().optional(),
    /** The email address of the contact (Required when no other contact details are provided) */
    email: z.string().optional(),
    /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()),
    /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()),
    /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).optional(),
    primaryAddress: createContactAddressModel.optional(),
    secondaryAddress: createContactAddressModel.optional(),
    workAddress: createContactAddressModel.optional(),
    /** A flag determining whether or not the contact is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional(),
    /** A flag determining whether or not the contact is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional(),
    /** A flag determining whether or not the contact is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional(),
    /** A flag determining whether or not the contact is happy to receive communications by SMS */
    communicationPreferenceSMS: z.boolean().optional(),
    /** App specific metadata to set against the contact */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new contact */
export type CreateContactModel =
  /** Request body used to create a new contact */
  {
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname: /** The contact's surname */ string
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
    marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */ string
    source?: CreateContactSourceModel | undefined
    homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    email?: /** The email address of the contact (Required when no other contact details are provided) */
    string | undefined
    officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string>
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
    primaryAddress?: CreateContactAddressModel | undefined
    secondaryAddress?: CreateContactAddressModel | undefined
    workAddress?: CreateContactAddressModel | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata to set against the contact */ Record<string, Record<string, never>> | undefined
  }
