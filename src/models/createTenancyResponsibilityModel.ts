import { z } from 'zod'
import { createTenancyAgreementModel, CreateTenancyAgreementModel } from '@/models/createTenancyAgreementModel.ts'

/** Request body used to set a tenancy responsibility */
export const createTenancyResponsibilityModel = z.object({
  /** The identifier of the associated to the responsibility */ typeId: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant) */ appliesTo: z.string().nullable().optional(),
  agreements: createTenancyAgreementModel.nullable().optional(),
})
/** Request body used to set a tenancy responsibility */
export type CreateTenancyResponsibilityModel = {
  typeId?: /** The identifier of the associated to the responsibility */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: CreateTenancyAgreementModel | undefined
}
