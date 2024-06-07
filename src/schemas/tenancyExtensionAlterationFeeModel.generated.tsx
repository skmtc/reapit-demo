import { z } from 'zod'

/** Represents a one off fee associated with tenancy extension or alteration */
export const tenancyExtensionAlterationFeeModel = /** Represents a one off fee associated with tenancy extension or alteration */
z.object({amount: /** The one fee amount */
z.number().optional(), summary: /** The one of fee summary text */
z.string().optional(), type: /** The fee type */
z.string().optional()});
/** Represents a one off fee associated with tenancy extension or alteration */
export type TenancyExtensionAlterationFeeModel = /** Represents a one off fee associated with tenancy extension or alteration */
{amount?: /** The one fee amount */
number | undefined, summary?: /** The one of fee summary text */
string | undefined, type?: /** The fee type */
string | undefined};