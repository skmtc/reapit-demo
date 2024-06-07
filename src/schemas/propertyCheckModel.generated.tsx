import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a check */
export const propertyCheckModel = /** Representation of a check */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the check */
z.string().optional(), created: /** The date and time when the check was created */
z.string().optional(), modified: /** The date and time when the check was last modified */
z.string().optional(), description: /** Textual description of what the check relates to */
z.string().optional(), status: /** The status of the check (needed/notNeeded/arranging/completed) */
z.string().optional(), type: /** The type of the check (preInstruction) */
z.string().optional(), propertyId: /** The unique identifier of the property that this check relates to */
z.string().optional(), _eTag: /** The ETag for the current version of the check. Used for managing update concurrency */
z.string().optional()});
/** Representation of a check */
export type PropertyCheckModel = /** Representation of a check */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the check */
string | undefined, created?: /** The date and time when the check was created */
string | undefined, modified?: /** The date and time when the check was last modified */
string | undefined, description?: /** Textual description of what the check relates to */
string | undefined, status?: /** The status of the check (needed/notNeeded/arranging/completed) */
string | undefined, type?: /** The type of the check (preInstruction) */
string | undefined, propertyId?: /** The unique identifier of the property that this check relates to */
string | undefined, _eTag?: /** The ETag for the current version of the check. Used for managing update concurrency */
string | undefined};