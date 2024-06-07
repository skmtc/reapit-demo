import { z } from 'zod'
import { createTenancyAgreementModel, CreateTenancyAgreementModel } from '@/schemas/createTenancyAgreementModel.generated.tsx'

/** Request body used to set a tenancy responsibility */
export const createTenancyResponsibilityModel = /** Request body used to set a tenancy responsibility */
z.object({typeId: /** The identifier of the associated to the responsibility */
z.string().optional(), appliesTo: /** The responsible party (landlord/tenant) */
z.string().optional(), agreements: createTenancyAgreementModel.optional()});
/** Request body used to set a tenancy responsibility */
export type CreateTenancyResponsibilityModel = /** Request body used to set a tenancy responsibility */
{typeId?: /** The identifier of the associated to the responsibility */
string | undefined, appliesTo?: /** The responsible party (landlord/tenant) */
string | undefined, agreements?: CreateTenancyAgreementModel | undefined};