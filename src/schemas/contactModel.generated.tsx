import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { contactSourceModel, ContactSourceModel } from '@/schemas/contactSourceModel.generated.tsx'
import { contactAddressModel, ContactAddressModel } from '@/schemas/contactAddressModel.generated.tsx'
import {
  additionalContactDetailModel,
  AdditionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'
import { contactRoleModel, ContactRoleModel } from '@/schemas/contactRoleModel.generated.tsx'

/** Representation of an individual contact */
export const contactModel =
  /** Representation of an individual contact */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the contact */ id: z.string().optional(),
    /** The date and time when the contact was created */ created: z.string().optional(),
    /** The date and time when the contact was last modified */ modified: z.string().optional(),
    /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().optional(),
    /** The contact's forename */ forename: z.string().optional(),
    /** The contact's surname */ surname: z.string().optional(),
    /** The contact's date of birth */ dateOfBirth: z.string().optional(),
    /** A flag determining whether or not the contact is currently active */ active: z.boolean().optional(),
    /** The marketing consent status of the contact (grant/deny/notAsked) */ marketingConsent: z.string().optional(),
    /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
    identityCheck: z.string().optional(),
    source: contactSourceModel.optional(),
    /** The home phone number of the contact */ homePhone: z.string().optional(),
    /** The work phone number of the contact */ workPhone: z.string().optional(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional(),
    /** The email address of the contact */ email: z.string().optional(),
    /** The date and time the contact was archived */ archivedOn: z.string().optional(),
    /** A flag determining whether or not the contact is archived */ fromArchive: z.boolean().optional(),
    primaryAddress: contactAddressModel.optional(),
    secondaryAddress: contactAddressModel.optional(),
    workAddress: contactAddressModel.optional(),
    /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional(),
    /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional(),
    /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).optional(),
    /** A flag determining whether or not the contact is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional(),
    /** A flag determining whether or not the contact is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional(),
    /** A flag determining whether or not the contact is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional(),
    /** A flag determining whether or not the contact is happy to receive communications by SMS */
    communicationPreferenceSMS: z.boolean().optional(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional(),
    /** App specific metadata that has been set against the contact */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the contact. Used for managing update concurrency */
    _eTag: z.string().optional(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional(),
    /** A list of relationships belonging to the contact. This is later removed from the response */
    relationships: z.array(contactRoleModel).optional(),
  })
/** Representation of an individual contact */
export type ContactModel =
  /** Representation of an individual contact */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the contact */ string | undefined
    created?: /** The date and time when the contact was created */ string | undefined
    modified?: /** The date and time when the contact was last modified */ string | undefined
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname?: /** The contact's surname */ string | undefined
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */ string | undefined
    identityCheck?: /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
    string | undefined
    source?: ContactSourceModel | undefined
    homePhone?: /** The home phone number of the contact */ string | undefined
    workPhone?: /** The work phone number of the contact */ string | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | undefined
    email?: /** The email address of the contact */ string | undefined
    archivedOn?: /** The date and time the contact was archived */ string | undefined
    fromArchive?: /** A flag determining whether or not the contact is archived */ boolean | undefined
    primaryAddress?: ContactAddressModel | undefined
    secondaryAddress?: ContactAddressModel | undefined
    workAddress?: ContactAddressModel | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string> | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined
    additionalContactDetails?: /** A collection of additional contact details */
    Array<AdditionalContactDetailModel> | undefined
    metadata?: /** App specific metadata that has been set against the contact */
    Record<string, Record<string, never>> | undefined
    _eTag?: /** The ETag for the current version of the contact. Used for managing update concurrency */
    string | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
    relationships?: /** A list of relationships belonging to the contact. This is later removed from the response */
    Array<ContactRoleModel> | undefined
  }
