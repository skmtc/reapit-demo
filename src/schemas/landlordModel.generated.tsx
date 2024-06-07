import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { landlordSourceModel, LandlordSourceModel } from '@/schemas/landlordSourceModel.generated.tsx'
import { landlordContactModel, LandlordContactModel } from '@/schemas/landlordContactModel.generated.tsx'

/** Representation of a landlord */
export const landlordModel = /** Representation of a landlord */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the landlord */
z.string().optional(), created: /** The date and time when the landlord was created */
z.string().optional(), modified: /** The date and time when the landlord was last modified */
z.string().optional(), active: /** A flag determining whether or not the landlord is currently active */
z.boolean().optional(), solicitorId: /** The unique identifier of the company acting as the landlord's solicitor */
z.string().optional(), officeId: /** The unique identifier of the office that is associated to the landlord */
z.string().optional(), source: landlordSourceModel.optional(), related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
z.array(landlordContactModel).optional(), metadata: /** App specific metadata that has been set against the landlord */
z.record(z.string(), z.object({})).optional(), extrasField: /** The requested extras fields */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the landlord. Used for managing update concurrency */
z.string().optional()});
/** Representation of a landlord */
export type LandlordModel = /** Representation of a landlord */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the landlord */
string | undefined, created?: /** The date and time when the landlord was created */
string | undefined, modified?: /** The date and time when the landlord was last modified */
string | undefined, active?: /** A flag determining whether or not the landlord is currently active */
boolean | undefined, solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
string | undefined, officeId?: /** The unique identifier of the office that is associated to the landlord */
string | undefined, source?: LandlordSourceModel | undefined, related?: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
Array<LandlordContactModel> | undefined, metadata?: /** App specific metadata that has been set against the landlord */
Record<string, Record<string, never>> | undefined, extrasField?: /** The requested extras fields */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the landlord. Used for managing update concurrency */
string | undefined};