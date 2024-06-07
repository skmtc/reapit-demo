import { z } from 'zod'
import { updateTenancyAgreementModel, UpdateTenancyAgreementModel } from '@/schemas/updateTenancyAgreementModel.generated.tsx'
import { updateTenancyBreakFromModel, UpdateTenancyBreakFromModel } from '@/schemas/updateTenancyBreakFromModel.generated.tsx'
import { updateTenancyNoticeRequiredModel, UpdateTenancyNoticeRequiredModel } from '@/schemas/updateTenancyNoticeRequiredModel.generated.tsx'

/** Request body used to update tenancy break clause */
export const updateTenancyBreakClauseModel = /** Request body used to update tenancy break clause */
z.object({active: /** The date the break clause becomes/became active */
z.string().optional(), appliesTo: /** The responsible party (landlord/tenant/mutual) */
z.string().optional(), agreements: updateTenancyAgreementModel.optional(), breakFrom: updateTenancyBreakFromModel.optional(), noticeRequired: updateTenancyNoticeRequiredModel.optional()});
/** Request body used to update tenancy break clause */
export type UpdateTenancyBreakClauseModel = /** Request body used to update tenancy break clause */
{active?: /** The date the break clause becomes/became active */
string | undefined, appliesTo?: /** The responsible party (landlord/tenant/mutual) */
string | undefined, agreements?: UpdateTenancyAgreementModel | undefined, breakFrom?: UpdateTenancyBreakFromModel | undefined, noticeRequired?: UpdateTenancyNoticeRequiredModel | undefined};