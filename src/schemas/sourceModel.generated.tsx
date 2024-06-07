import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a source of business */
export const sourceModel = /** Representation of a source of business */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the source */
z.string().optional(), created: /** The date and time when the source was created */
z.string().optional(), modified: /** The date and time when the source was last modified */
z.string().optional(), name: /** The name of the source or advertising publication */
z.string().optional(), type: /** The type of the source (source/advertisement) */
z.string().optional(), officeIds: /** A collection of the unique identifiers of offices that regularly get business from the source */
z.array(z.string()).optional(), departmentIds: /** A collection of unique identifiers of departments that regularly get business from the source */
z.array(z.string()).optional(), _eTag: /** The ETag for the current version of the source. Used for managing update concurrency */
z.string().optional()});
/** Representation of a source of business */
export type SourceModel = /** Representation of a source of business */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the source */
string | undefined, created?: /** The date and time when the source was created */
string | undefined, modified?: /** The date and time when the source was last modified */
string | undefined, name?: /** The name of the source or advertising publication */
string | undefined, type?: /** The type of the source (source/advertisement) */
string | undefined, officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
Array<string> | undefined, departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
Array<string> | undefined, _eTag?: /** The ETag for the current version of the source. Used for managing update concurrency */
string | undefined};