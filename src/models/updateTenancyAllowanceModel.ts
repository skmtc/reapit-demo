import { z } from 'zod'

/** Request body used to update tenancy allowance */
export const updateTenancyAllowanceModel = z.object({
  /** The state of the allowance (allowed/notAllowed) */ state: z.string().nullable().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
      /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
})
