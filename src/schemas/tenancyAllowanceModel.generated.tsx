import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { tenancyAgreementModel, TenancyAgreementModel } from '@/schemas/tenancyAgreementModel.generated.tsx'

/** Representation of a tenancy allowance */
export const tenancyAllowanceModel = /** Representation of a tenancy allowance */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the allowance */
z.string().optional(), created: /** The date and time when the allowance was created */
z.string().optional(), modified: /** The date and time when the allowance last modified */
z.string().optional(), typeId: /** The identifier of the associated allowance */
z.string().optional(), description: /** The break clauses description */
z.string().optional(), state: /** The state of the allowance (allowed/notAllowed) */
z.string().optional(), agreements: tenancyAgreementModel.optional(), letterText: /** Tenancy agreement text that relates to the allowance */
z.string().optional(), tenancyId: /** The unique identifier of the associated tenancy */
z.string().optional(), _eTag: /** The ETag for the current version of the allowance. Used for managing update concurrency */
z.string().optional()});
/** Representation of a tenancy allowance */
export type TenancyAllowanceModel = /** Representation of a tenancy allowance */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the allowance */
string | undefined, created?: /** The date and time when the allowance was created */
string | undefined, modified?: /** The date and time when the allowance last modified */
string | undefined, typeId?: /** The identifier of the associated allowance */
string | undefined, description?: /** The break clauses description */
string | undefined, state?: /** The state of the allowance (allowed/notAllowed) */
string | undefined, agreements?: TenancyAgreementModel | undefined, letterText?: /** Tenancy agreement text that relates to the allowance */
string | undefined, tenancyId?: /** The unique identifier of the associated tenancy */
string | undefined, _eTag?: /** The ETag for the current version of the allowance. Used for managing update concurrency */
string | undefined};