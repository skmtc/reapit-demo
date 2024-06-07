import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { tenancyBreakClauseBreakFromModel, TenancyBreakClauseBreakFromModel } from '@/schemas/tenancyBreakClauseBreakFromModel.generated.tsx'
import { tenancyBreakClauseNoticeRequiredModel, TenancyBreakClauseNoticeRequiredModel } from '@/schemas/tenancyBreakClauseNoticeRequiredModel.generated.tsx'
import { tenancyAgreementModel, TenancyAgreementModel } from '@/schemas/tenancyAgreementModel.generated.tsx'

/** Representation of a tenancy break clause */
export const tenancyBreakClauseModel = /** Representation of a tenancy break clause */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the break clause */
z.string().optional(), created: /** The date and time when the break clause was created */
z.string().optional(), modified: /** The date and time when the break clause last modified */
z.string().optional(), clauseTypeId: /** The identifier of the associated break clause */
z.string().optional(), description: /** The break clauses description */
z.string().optional(), active: /** The date the break clause became (or becomes) active */
z.string().optional(), appliesTo: /** The parties that the break clause applies to (landlord/tenant/mutual) */
z.string().optional(), letterText: /** Tenancy agreement text relating to the break clause */
z.string().optional(), breakFrom: tenancyBreakClauseBreakFromModel.optional(), noticeRequired: tenancyBreakClauseNoticeRequiredModel.optional(), agreements: tenancyAgreementModel.optional(), tenancyId: /** The unique identifier of the associated tenancy */
z.string().optional(), _eTag: /** The ETag for the current version of the break clause. Used for managing update concurrency */
z.string().optional()});
/** Representation of a tenancy break clause */
export type TenancyBreakClauseModel = /** Representation of a tenancy break clause */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the break clause */
string | undefined, created?: /** The date and time when the break clause was created */
string | undefined, modified?: /** The date and time when the break clause last modified */
string | undefined, clauseTypeId?: /** The identifier of the associated break clause */
string | undefined, description?: /** The break clauses description */
string | undefined, active?: /** The date the break clause became (or becomes) active */
string | undefined, appliesTo?: /** The parties that the break clause applies to (landlord/tenant/mutual) */
string | undefined, letterText?: /** Tenancy agreement text relating to the break clause */
string | undefined, breakFrom?: TenancyBreakClauseBreakFromModel | undefined, noticeRequired?: TenancyBreakClauseNoticeRequiredModel | undefined, agreements?: TenancyAgreementModel | undefined, tenancyId?: /** The unique identifier of the associated tenancy */
string | undefined, _eTag?: /** The ETag for the current version of the break clause. Used for managing update concurrency */
string | undefined};