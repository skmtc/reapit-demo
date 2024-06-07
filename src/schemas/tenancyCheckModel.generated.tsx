import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export const tenancyCheckModel = /** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the tenancy check */
z.string().optional(), created: /** The date and time when the tenancy check was created */
z.string().optional(), modified: /** The date and time when the tenancy check was last modified */
z.string().optional(), description: /** Textual description of what the tenancy check relates to */
z.string().optional(), status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
z.string().optional(), type: /** The type of the tenancy check (preTenancy/postTenancy) */
z.string().optional(), checkTypeId: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
z.string().optional(), tenancyId: /** The unique identifier of the tenancy that this check relates to */
z.string().optional(), metadata: /** App specific metadata that has been set against the tenancy check */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
z.string().optional()});
/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export type TenancyCheckModel = /** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the tenancy check */
string | undefined, created?: /** The date and time when the tenancy check was created */
string | undefined, modified?: /** The date and time when the tenancy check was last modified */
string | undefined, description?: /** Textual description of what the tenancy check relates to */
string | undefined, status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
string | undefined, type?: /** The type of the tenancy check (preTenancy/postTenancy) */
string | undefined, checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
string | undefined, tenancyId?: /** The unique identifier of the tenancy that this check relates to */
string | undefined, metadata?: /** App specific metadata that has been set against the tenancy check */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
string | undefined};