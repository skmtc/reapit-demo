import { z } from 'zod'
import { createContactSourceModel, CreateContactSourceModel } from '@/schemas/createContactSourceModel.generated.tsx'
import { createContactAddressModel, CreateContactAddressModel } from '@/schemas/createContactAddressModel.generated.tsx'

/** Request body used to create a new contact */
export const createContactModel = /** Request body used to create a new contact */
z.object({title: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
z.string().optional(), forename: /** The contact's forename */
z.string().optional(), surname: /** The contact's surname */
z.string(), dateOfBirth: /** The contact's date of birth */
z.string().optional(), active: /** A flag determining whether or not the contact is currently active */
z.boolean().optional(), marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
z.string(), source: createContactSourceModel.optional(), homePhone: /** The home phone number of the contact (Required when no other contact details are provided) */
z.string().optional(), workPhone: /** The work phone number of the contact (Required when no other contact details are provided) */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact (Required when no other contact details are provided) */
z.string().optional(), email: /** The email address of the contact (Required when no other contact details are provided) */
z.string().optional(), officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
z.array(z.string()), negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
z.array(z.string()), categoryIds: /** A collection of categories associated to the contact. */
z.array(z.string()).optional(), primaryAddress: createContactAddressModel.optional(), secondaryAddress: createContactAddressModel.optional(), workAddress: createContactAddressModel.optional(), communicationPreferenceLetter: /** A flag determining whether or not the contact is happy to receive communications by letter */
z.boolean().optional(), communicationPreferenceEmail: /** A flag determining whether or not the contact is happy to receive communications by email */
z.boolean().optional(), communicationPreferencePhone: /** A flag determining whether or not the contact is happy to receive communications by phone */
z.boolean().optional(), communicationPreferenceSMS: /** A flag determining whether or not the contact is happy to receive communications by SMS */
z.boolean().optional(), metadata: /** App specific metadata to set against the contact */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new contact */
export type CreateContactModel = /** Request body used to create a new contact */
{title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
string | undefined, forename?: /** The contact's forename */
string | undefined, surname: /** The contact's surname */
string, dateOfBirth?: /** The contact's date of birth */
string | undefined, active?: /** A flag determining whether or not the contact is currently active */
boolean | undefined, marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
string, source?: CreateContactSourceModel | undefined, homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
string | undefined, workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
string | undefined, mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
string | undefined, email?: /** The email address of the contact (Required when no other contact details are provided) */
string | undefined, officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
Array<string>, negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
Array<string>, categoryIds?: /** A collection of categories associated to the contact. */
Array<string> | undefined, primaryAddress?: CreateContactAddressModel | undefined, secondaryAddress?: CreateContactAddressModel | undefined, workAddress?: CreateContactAddressModel | undefined, communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
boolean | undefined, communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
boolean | undefined, communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
boolean | undefined, communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
boolean | undefined, metadata?: /** App specific metadata to set against the contact */
Record<string, Record<string, never>> | undefined};