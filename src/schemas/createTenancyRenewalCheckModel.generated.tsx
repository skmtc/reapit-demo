import { z } from 'zod'

/** Request body used to create a new tenancy renewal check */
export const createTenancyRenewalCheckModel = /** Request body used to create a new tenancy renewal check */
z.object({status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
z.string(), checkTypeId: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
z.string().optional(), description: /** The name of this tenancy check */
z.string().optional(), metadata: /** App specific metadata to set against the tenancy renewal check */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new tenancy renewal check */
export type CreateTenancyRenewalCheckModel = /** Request body used to create a new tenancy renewal check */
{status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
string, checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
string | undefined, description?: /** The name of this tenancy check */
string | undefined, metadata?: /** App specific metadata to set against the tenancy renewal check */
Record<string, Record<string, never>> | undefined};