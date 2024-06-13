import { z } from 'zod'

/** Representation of party agreements to a specific clause in a tenancy agreement */
export type TenancyAgreementModel =
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  {
    landlord?: /** A flag to determine if the landlord has agreed */ boolean | null | undefined
    tenant?: /** A flag to determine if the tenant has agreed */ boolean | null | undefined
  }
/** Representation of party agreements to a specific clause in a tenancy agreement */
export const tenancyAgreementModel =
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  z.object({
    /** A flag to determine if the landlord has agreed */ landlord: z.boolean().optional().nullable(),
    /** A flag to determine if the tenant has agreed */ tenant: z.boolean().optional().nullable(),
  })
