import { z } from 'zod'
import { createTenancyAgreementModel, CreateTenancyAgreementModel } from '@/schemas/createTenancyAgreementModel.generated.tsx'

/** Request body used to set a tenancy allowance */
export const createTenancyAllowanceModel = /** Request body used to set a tenancy allowance */
z.object({typeId: /** The identifier of the associated to the allowance */
z.string().optional(), state: /** The state of the allowance (allowed/notAllowed) */
z.string().optional(), agreements: createTenancyAgreementModel.optional()});
/** Request body used to set a tenancy allowance */
export type CreateTenancyAllowanceModel = /** Request body used to set a tenancy allowance */
{typeId?: /** The identifier of the associated to the allowance */
string | undefined, state?: /** The state of the allowance (allowed/notAllowed) */
string | undefined, agreements?: CreateTenancyAgreementModel | undefined};