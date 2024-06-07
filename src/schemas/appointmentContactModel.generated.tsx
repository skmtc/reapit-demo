import { z } from 'zod'

/** A summarised view of the details of a contact associated to an appointment attendee */
export const appointmentContactModel = /** A summarised view of the details of a contact associated to an appointment attendee */
z.object({id: /** The unique identifier of the contact */
z.string().optional(), name: /** The name of the contact */
z.string().optional(), homePhone: /** The home phone number of the contact */
z.string().optional(), workPhone: /** The work phone number of the contact */
z.string().optional(), mobilePhone: /** The mobile phone number of the contact */
z.string().optional(), email: /** The email address of the contact */
z.string().optional(), fromArchive: /** A flag determining if the related contact is archived */
z.boolean().optional()});
/** A summarised view of the details of a contact associated to an appointment attendee */
export type AppointmentContactModel = /** A summarised view of the details of a contact associated to an appointment attendee */
{id?: /** The unique identifier of the contact */
string | undefined, name?: /** The name of the contact */
string | undefined, homePhone?: /** The home phone number of the contact */
string | undefined, workPhone?: /** The work phone number of the contact */
string | undefined, mobilePhone?: /** The mobile phone number of the contact */
string | undefined, email?: /** The email address of the contact */
string | undefined, fromArchive?: /** A flag determining if the related contact is archived */
boolean | undefined};