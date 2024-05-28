import { z } from 'zod'

/** Representation of party agreements to a specific clause in a tenancy agreement */
export const tenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
  /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
})
/** Representation of party agreements to a specific clause in a tenancy agreement */
export type TenancyAgreementModel = {
  landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
  tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
}
