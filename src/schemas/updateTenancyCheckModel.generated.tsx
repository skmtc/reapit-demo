import { z } from 'zod'

/** Model for updat of an existing tenancy check */
export const updateTenancyCheckModel = /** Model for updat of an existing tenancy check */
z.object({status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
z.string().optional(), metadata: /** App specific metadata to set against the tenancy check */
z.record(z.string(), z.object({})).optional()});
/** Model for updat of an existing tenancy check */
export type UpdateTenancyCheckModel = /** Model for updat of an existing tenancy check */
{status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
string | undefined, metadata?: /** App specific metadata to set against the tenancy check */
Record<string, Record<string, never>> | undefined};