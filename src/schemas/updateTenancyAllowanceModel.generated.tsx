import { z } from 'zod'
import { updateTenancyAgreementModel, UpdateTenancyAgreementModel } from '@/schemas/updateTenancyAgreementModel.generated.tsx'

/** Request body used to update tenancy allowance */
export const updateTenancyAllowanceModel = /** Request body used to update tenancy allowance */
z.object({state: /** The state of the allowance (allowed/notAllowed) */
z.string().optional(), agreements: updateTenancyAgreementModel.optional()});
/** Request body used to update tenancy allowance */
export type UpdateTenancyAllowanceModel = /** Request body used to update tenancy allowance */
{state?: /** The state of the allowance (allowed/notAllowed) */
string | undefined, agreements?: UpdateTenancyAgreementModel | undefined};