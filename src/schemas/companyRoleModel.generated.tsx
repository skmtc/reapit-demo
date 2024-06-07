import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of the roles that an individual companies possesses */
export const companyRoleModel = /** Representation of the roles that an individual companies possesses */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the relationship */
z.string().optional(), created: /** The date and time when the relationship was created */
z.string().optional(), modified: /** The date and time when the relationship was last modified */
z.string().optional(), companyId: /** The unique identifier of the related company */
z.string().optional(), associatedType: /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
z.string().optional(), associatedId: /** The unique identifier of the related entity */
z.string().optional(), fromArchive: /** Flag to determine if this role on the system is now archived */
z.boolean().optional()});
/** Representation of the roles that an individual companies possesses */
export type CompanyRoleModel = /** Representation of the roles that an individual companies possesses */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the relationship */
string | undefined, created?: /** The date and time when the relationship was created */
string | undefined, modified?: /** The date and time when the relationship was last modified */
string | undefined, companyId?: /** The unique identifier of the related company */
string | undefined, associatedType?: /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
string | undefined, associatedId?: /** The unique identifier of the related entity */
string | undefined, fromArchive?: /** Flag to determine if this role on the system is now archived */
boolean | undefined};