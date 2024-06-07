import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { tenancyAgreementModel, TenancyAgreementModel } from '@/schemas/tenancyAgreementModel.generated.tsx'

/** Representation of a tenancies responsibility */
export const tenancyResponsibilityModel = /** Representation of a tenancies responsibility */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the responsibility */
z.string().optional(), created: /** The date and time when the responsibility was created */
z.string().optional(), modified: /** The date and time when the responsibility last modified */
z.string().optional(), typeId: /** The identifier of the associated to the responsibility */
z.string().optional(), description: /** The responsibilities description */
z.string().optional(), appliesTo: /** The responsible party (landlord/tenant) */
z.string().optional(), agreements: tenancyAgreementModel.optional(), letterText: /** Tenancy agreement text that relates to the responsibility */
z.string().optional(), tenancyId: /** The unique identifier of the associated tenancy */
z.string().optional(), _eTag: /** The ETag for the current version of the responsibility. Used for managing update concurrency */
z.string().optional()});
/** Representation of a tenancies responsibility */
export type TenancyResponsibilityModel = /** Representation of a tenancies responsibility */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the responsibility */
string | undefined, created?: /** The date and time when the responsibility was created */
string | undefined, modified?: /** The date and time when the responsibility last modified */
string | undefined, typeId?: /** The identifier of the associated to the responsibility */
string | undefined, description?: /** The responsibilities description */
string | undefined, appliesTo?: /** The responsible party (landlord/tenant) */
string | undefined, agreements?: TenancyAgreementModel | undefined, letterText?: /** Tenancy agreement text that relates to the responsibility */
string | undefined, tenancyId?: /** The unique identifier of the associated tenancy */
string | undefined, _eTag?: /** The ETag for the current version of the responsibility. Used for managing update concurrency */
string | undefined};