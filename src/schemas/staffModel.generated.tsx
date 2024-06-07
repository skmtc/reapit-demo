import { z } from 'zod'

/** Representation of a staff member */
export const staffModel = /** Representation of a staff member */
z.object({name: /** The staff member's name */
z.string().optional(), active: /** A flag determining whether or not the staff member is currently active */
z.boolean().optional(), jobTitle: /** The staff member's job title */
z.string().optional(), workPhone: /** The staff member's work phone */
z.string().optional(), mobilePhone: /** The staff member's mobile phone */
z.string().optional(), email: /** The staff member's email */
z.string().optional(), salutation: /** The staff member's preferred salutation */
z.string().optional()});
/** Representation of a staff member */
export type StaffModel = /** Representation of a staff member */
{name?: /** The staff member's name */
string | undefined, active?: /** A flag determining whether or not the staff member is currently active */
boolean | undefined, jobTitle?: /** The staff member's job title */
string | undefined, workPhone?: /** The staff member's work phone */
string | undefined, mobilePhone?: /** The staff member's mobile phone */
string | undefined, email?: /** The staff member's email */
string | undefined, salutation?: /** The staff member's preferred salutation */
string | undefined};