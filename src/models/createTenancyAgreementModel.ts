import { z } from 'zod'

/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export const createTenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
  /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
})
