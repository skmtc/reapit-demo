import { z } from 'zod'

/** Request body used to set a tenancy responsibility */
export const createTenancyResponsibilityModel = z.object({
  /** The identifier of the associated to the responsibility */ typeId: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant) */ appliesTo: z.string().nullable().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
      /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
})
/** Request body used to set a tenancy responsibility */
export type CreateTenancyResponsibilityModel = {
  typeId?: /** The identifier of the associated to the responsibility */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  | {
        landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
        tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
      }
    | undefined
}
