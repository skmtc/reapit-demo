import { z } from 'zod'

/** Request body used to update a tenancy renewal check */
export const updateTenancyRenewalCheckModel = /** Request body used to update a tenancy renewal check */
z.object({status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
z.string().optional(), metadata: /** App specific metadata to set against the tenancy renewal check */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update a tenancy renewal check */
export type UpdateTenancyRenewalCheckModel = /** Request body used to update a tenancy renewal check */
{status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
string | undefined, metadata?: /** App specific metadata to set against the tenancy renewal check */
Record<string, Record<string, never>> | undefined};