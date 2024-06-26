import {
  CreateTenancyAgreementModel,
  createTenancyAgreementModel,
} from '@/schemas/createTenancyAgreementModel.generated.tsx'
import { z } from 'zod'

/** Request body used to set a tenancy responsibility */
export type CreateTenancyResponsibilityModel =
  /** Request body used to set a tenancy responsibility */
  {
    typeId?: /** The identifier of the associated to the responsibility */ string | null | undefined
    appliesTo?: /** The responsible party (landlord/tenant) */ string | null | undefined
    agreements?: CreateTenancyAgreementModel | null | undefined
  }
export const createTenancyResponsibilityModel =
  /** Request body used to set a tenancy responsibility */
  z.object({
    /** The identifier of the associated to the responsibility */ typeId: z.string().optional().nullable(),
    /** The responsible party (landlord/tenant) */ appliesTo: z.string().optional().nullable(),
    agreements: createTenancyAgreementModel.optional().nullable(),
  })
