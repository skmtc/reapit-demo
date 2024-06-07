import { z } from 'zod'
import { createTenancyAgreementModel, CreateTenancyAgreementModel } from '@/schemas/createTenancyAgreementModel.generated.tsx'
import { createTenancyBreakFromModel, CreateTenancyBreakFromModel } from '@/schemas/createTenancyBreakFromModel.generated.tsx'
import { createTenancyNoticeRequiredModel, CreateTenancyNoticeRequiredModel } from '@/schemas/createTenancyNoticeRequiredModel.generated.tsx'

/** Request body used to update tenancy break clause */
export const createTenancyBreakClauseModel = /** Request body used to update tenancy break clause */
z.object({typeId: /** The identifier of the associated to the break clause */
z.string().optional(), active: /** The date the break clause becomes/became active */
z.string().optional(), appliesTo: /** The responsible party (landlord/tenant/mutual) */
z.string().optional(), agreements: createTenancyAgreementModel.optional(), breakFrom: createTenancyBreakFromModel.optional(), noticeRequired: createTenancyNoticeRequiredModel.optional()});
/** Request body used to update tenancy break clause */
export type CreateTenancyBreakClauseModel = /** Request body used to update tenancy break clause */
{typeId?: /** The identifier of the associated to the break clause */
string | undefined, active?: /** The date the break clause becomes/became active */
string | undefined, appliesTo?: /** The responsible party (landlord/tenant/mutual) */
string | undefined, agreements?: CreateTenancyAgreementModel | undefined, breakFrom?: CreateTenancyBreakFromModel | undefined, noticeRequired?: CreateTenancyNoticeRequiredModel | undefined};