import { z } from 'zod'
import { updateTenancyAgreementModel, UpdateTenancyAgreementModel } from '@/schemas/updateTenancyAgreementModel.generated.tsx'

/** Request body used to update tenancy responsibility */
export const updateTenancyResponsibilityModel = /** Request body used to update tenancy responsibility */
z.object({appliesTo: /** The responsible party (landlord/tenant) */
z.string().optional(), agreements: updateTenancyAgreementModel.optional()});
/** Request body used to update tenancy responsibility */
export type UpdateTenancyResponsibilityModel = /** Request body used to update tenancy responsibility */
{appliesTo?: /** The responsible party (landlord/tenant) */
string | undefined, agreements?: UpdateTenancyAgreementModel | undefined};