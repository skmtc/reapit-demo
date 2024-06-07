import { z } from 'zod'
import { updateContactSourceModel, UpdateContactSourceModel } from '@/schemas/updateContactSourceModel.generated.tsx'
import { updateContactAddressModel, UpdateContactAddressModel } from '@/schemas/updateContactAddressModel.generated.tsx'

/** Request body used to update an existing contact */
export const updateContactModel = /** Request body used to update an existing contact */
z.object({title: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
z.string().optional(), forename: /** The contact's forename */
z.string().optional(), surname: /** The contact's surname */
z.string().optional(), dateOfBirth: /** The contact's date of birth */
z.string().optional(), active: /** A flag determining whether or not the contact is currently active */
z.boolean().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
z.string().optional(), source: updateContactSourceModel.optional(), homePhone: /** The home phone number of the contact */
z.string().optional(), workPhone: /** The work phone number of the contact */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact */
z.string().optional(), email: /** The email address of the contact */
z.string().optional(), officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
z.array(z.string()).optional(), categoryIds: /** A collection of categories associated to the contact. */
z.array(z.string()).optional(), primaryAddress: updateContactAddressModel.optional(), secondaryAddress: updateContactAddressModel.optional(), workAddress: updateContactAddressModel.optional(), communicationPreferenceLetter: /** A flag determining whether or not the contact is happy to receive communications by letter */
z.boolean().optional(), communicationPreferenceEmail: /** A flag determining whether or not the contact is happy to receive communications by email */
z.boolean().optional(), communicationPreferencePhone: /** A flag determining whether or not the contact is happy to receive communications by phone */
z.boolean().optional(), communicationPreferenceSMS: /** A flag determining whether or not the contact is happy to receive communications by SMS */
z.boolean().optional(), fromArchive: /** A flag determining whether the contact is archived */
z.boolean().optional(), metadata: /** App specific metadata to set against the contact */
z.record(z.string(), z.object({})).optional(), additionalContactDetails: /** A collection of additional contact details */
z.record(z.string(), z.string()).optional()});
/** Request body used to update an existing contact */
export type UpdateContactModel = /** Request body used to update an existing contact */
{title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
string | undefined, forename?: /** The contact's forename */
string | undefined, surname?: /** The contact's surname */
string | undefined, dateOfBirth?: /** The contact's date of birth */
string | undefined, active?: /** A flag determining whether or not the contact is currently active */
boolean | undefined, marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */
string | undefined, source?: UpdateContactSourceModel | undefined, homePhone?: /** The home phone number of the contact */
string | undefined, workPhone?: /** The work phone number of the contact */
string | undefined, mobilePhone?: /** The mobile phone number of the contact */
string | undefined, email?: /** The email address of the contact */
string | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
Array<string> | undefined, negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
Array<string> | undefined, categoryIds?: /** A collection of categories associated to the contact. */
Array<string> | undefined, primaryAddress?: UpdateContactAddressModel | undefined, secondaryAddress?: UpdateContactAddressModel | undefined, workAddress?: UpdateContactAddressModel | undefined, communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
boolean | undefined, communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
boolean | undefined, communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
boolean | undefined, communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
boolean | undefined, fromArchive?: /** A flag determining whether the contact is archived */
boolean | undefined, metadata?: /** App specific metadata to set against the contact */
Record<string, Record<string, never>> | undefined, additionalContactDetails?: /** A collection of additional contact details */
Record<string, string> | undefined};