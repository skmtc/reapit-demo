import { z } from 'zod'

/** Representation of renewal options in a tenancy */
export const renewalOptionsModel = /** Representation of renewal options in a tenancy */
z.object({optionId: /** The unique identifier of the renewal option */
z.string().optional(), optionText: /** The associated renewal option text */
z.string().optional(), expiry: /** The renewal option expiry date */
z.string().optional(), conditionIds: /** The renewal options associated condition Ids */
z.array(z.string()).optional()});
/** Representation of renewal options in a tenancy */
export type RenewalOptionsModel = /** Representation of renewal options in a tenancy */
{optionId?: /** The unique identifier of the renewal option */
string | undefined, optionText?: /** The associated renewal option text */
string | undefined, expiry?: /** The renewal option expiry date */
string | undefined, conditionIds?: /** The renewal options associated condition Ids */
Array<string> | undefined};