import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { contactSourceModel, ContactSourceModel } from '@/schemas/contactSourceModel.generated.tsx'
import { contactAddressModel, ContactAddressModel } from '@/schemas/contactAddressModel.generated.tsx'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/schemas/additionalContactDetailModel.generated.tsx'
import { contactRoleModel, ContactRoleModel } from '@/schemas/contactRoleModel.generated.tsx'

/** Representation of an individual contact */
export const contactModel = /** Representation of an individual contact */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the contact */
z.string().optional(), created: /** The date and time when the contact was created */
z.string().optional(), modified: /** The date and time when the contact was last modified */
z.string().optional(), title: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
z.string().optional(), forename: /** The contact's forename */
z.string().optional(), surname: /** The contact's surname */
z.string().optional(), dateOfBirth: /** The contact's date of birth */
z.string().optional(), active: /** A flag determining whether or not the contact is currently active */
z.boolean().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
z.string().optional(), identityCheck: /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
z.string().optional(), source: contactSourceModel.optional(), homePhone: /** The home phone number of the contact */
z.string().optional(), workPhone: /** The work phone number of the contact */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact */
z.string().optional(), email: /** The email address of the contact */
z.string().optional(), archivedOn: /** The date and time the contact was archived */
z.string().optional(), fromArchive: /** A flag determining whether or not the contact is archived */
z.boolean().optional(), primaryAddress: contactAddressModel.optional(), secondaryAddress: contactAddressModel.optional(), workAddress: contactAddressModel.optional(), officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
z.array(z.string()).optional(), categoryIds: /** A collection of categories associated to the contact. */
z.array(z.string()).optional(), communicationPreferenceLetter: /** A flag determining whether or not the contact is happy to receive communications by letter */
z.boolean().optional(), communicationPreferenceEmail: /** A flag determining whether or not the contact is happy to receive communications by email */
z.boolean().optional(), communicationPreferencePhone: /** A flag determining whether or not the contact is happy to receive communications by phone */
z.boolean().optional(), communicationPreferenceSMS: /** A flag determining whether or not the contact is happy to receive communications by SMS */
z.boolean().optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalContactDetailModel).optional(), metadata: /** App specific metadata that has been set against the contact */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the contact. Used for managing update concurrency */
z.string().optional(), extrasField: /** The requested extras fields */
z.record(z.string(), z.object({})).optional(), relationships: /** A list of relationships belonging to the contact. This is later removed from the response */
z.array(contactRoleModel).optional()});
/** Representation of an individual contact */
export type ContactModel = /** Representation of an individual contact */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the contact */
string | undefined, created?: /** The date and time when the contact was created */
string | undefined, modified?: /** The date and time when the contact was last modified */
string | undefined, title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
string | undefined, forename?: /** The contact's forename */
string | undefined, surname?: /** The contact's surname */
string | undefined, dateOfBirth?: /** The contact's date of birth */
string | undefined, active?: /** A flag determining whether or not the contact is currently active */
boolean | undefined, marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */
string | undefined, identityCheck?: /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
string | undefined, source?: ContactSourceModel | undefined, homePhone?: /** The home phone number of the contact */
string | undefined, workPhone?: /** The work phone number of the contact */
string | undefined, mobilePhone?: /** The mobile phone number of the contact */
string | undefined, email?: /** The email address of the contact */
string | undefined, archivedOn?: /** The date and time the contact was archived */
string | undefined, fromArchive?: /** A flag determining whether or not the contact is archived */
boolean | undefined, primaryAddress?: ContactAddressModel | undefined, secondaryAddress?: ContactAddressModel | undefined, workAddress?: ContactAddressModel | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
Array<string> | undefined, negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
Array<string> | undefined, categoryIds?: /** A collection of categories associated to the contact. */
Array<string> | undefined, communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
boolean | undefined, communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
boolean | undefined, communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
boolean | undefined, communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
boolean | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalContactDetailModel> | undefined, metadata?: /** App specific metadata that has been set against the contact */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the contact. Used for managing update concurrency */
string | undefined, extrasField?: /** The requested extras fields */
Record<string, Record<string, never>> | undefined, relationships?: /** A list of relationships belonging to the contact. This is later removed from the response */
Array<ContactRoleModel> | undefined};