import { z } from 'zod'

/** Representation of a contact */
export const referralContactModel = /** Representation of a contact */
z.object({id: z.string().optional(), title: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
z.string().optional(), forename: /** The contact's forename */
z.string().optional(), surname: /** The contact's surname */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact */
z.string().optional(), email: /** The email address of the contact */
z.string().optional()});
/** Representation of a contact */
export type ReferralContactModel = /** Representation of a contact */
{id?: string | undefined, title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
string | undefined, forename?: /** The contact's forename */
string | undefined, surname?: /** The contact's surname */
string | undefined, mobilePhone?: /** The mobile phone number of the contact */
string | undefined, email?: /** The email address of the contact */
string | undefined};