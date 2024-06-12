import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { ContactSourceModel, contactSourceModel } from '@/schemas/contactSourceModel.generated.tsx'
import { ContactAddressModel, contactAddressModel } from '@/schemas/contactAddressModel.generated.tsx'
import {
  AdditionalContactDetailModel,
  additionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'
import { ContactRoleModel, contactRoleModel } from '@/schemas/contactRoleModel.generated.tsx'
import { z } from 'zod'

export type ContactModel =
  /** Representation of an individual contact */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the contact */ string | null | undefined
    created?: /** The date and time when the contact was created */ string | null | undefined
    modified?: /** The date and time when the contact was last modified */ string | null | undefined
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | null | undefined
    forename?: /** The contact's forename */ string | null | undefined
    surname?: /** The contact's surname */ string | null | undefined
    dateOfBirth?: /** The contact's date of birth */ string | null | undefined
    active?: /** A flag determining whether or not the contact is currently active */ boolean | null | undefined
    marketingConsent?:
      | /** The marketing consent status of the contact (grant/deny/notAsked) */
      string
      | null
      | undefined
    identityCheck?:
      | /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
      string
      | null
      | undefined
    source?: ContactSourceModel | null | undefined
    homePhone?: /** The home phone number of the contact */ string | null | undefined
    workPhone?: /** The work phone number of the contact */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | null | undefined
    email?: /** The email address of the contact */ string | null | undefined
    archivedOn?: /** The date and time the contact was archived */ string | null | undefined
    fromArchive?: /** A flag determining whether or not the contact is archived */ boolean | null | undefined
    primaryAddress?: ContactAddressModel | null | undefined
    secondaryAddress?: ContactAddressModel | null | undefined
    workAddress?: ContactAddressModel | null | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    negotiatorIds?:
      | /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
      Array<string>
      | null
      | undefined
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | null | undefined
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
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalContactDetailModel>
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against the contact */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the contact. Used for managing update concurrency */
      string
      | null
      | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | null | undefined
    relationships?:
      | /** A list of relationships belonging to the contact. This is later removed from the response */
      Array<ContactRoleModel>
      | null
      | undefined
  }
/** Representation of an individual contact */
export const contactModel =
  /** Representation of an individual contact */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the contact */ id: z.string().optional().nullable(),
    /** The date and time when the contact was created */ created: z.string().optional().nullable(),
    /** The date and time when the contact was last modified */ modified: z.string().optional().nullable(),
    /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().optional().nullable(),
    /** The contact's forename */ forename: z.string().optional().nullable(),
    /** The contact's surname */ surname: z.string().optional().nullable(),
    /** The contact's date of birth */ dateOfBirth: z.string().optional().nullable(),
    /** A flag determining whether or not the contact is currently active */ active: z.boolean().optional().nullable(),
    /** The marketing consent status of the contact (grant/deny/notAsked) */
    marketingConsent: z.string().optional().nullable(),
    /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
    identityCheck: z.string().optional().nullable(),
    source: contactSourceModel.optional().nullable(),
    /** The home phone number of the contact */ homePhone: z.string().optional().nullable(),
    /** The work phone number of the contact */ workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the contact */ email: z.string().optional().nullable(),
    /** The date and time the contact was archived */ archivedOn: z.string().optional().nullable(),
    /** A flag determining whether or not the contact is archived */ fromArchive: z.boolean().optional().nullable(),
    primaryAddress: contactAddressModel.optional().nullable(),
    secondaryAddress: contactAddressModel.optional().nullable(),
    workAddress: contactAddressModel.optional().nullable(),
    /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional().nullable(),
    /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional().nullable(),
    /** A flag determining whether or not the contact is happy to receive communications by SMS */
    communicationPreferenceSMS: z.boolean().optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional().nullable(),
    /** App specific metadata that has been set against the contact */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the contact. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional().nullable(),
    /** A list of relationships belonging to the contact. This is later removed from the response */
    relationships: z.array(contactRoleModel).optional().nullable(),
  })
