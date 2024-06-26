import { z } from 'zod'

/** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
export type TenancyArrearsModel =
  /** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
  {
    chaseArrears?: /** A flag determining whether or not tenancy arrears should be chased */ boolean | null | undefined
    paymentPlan?:
      | /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
      string
      | null
      | undefined
  }
/** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
export const tenancyArrearsModel =
  /** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
  z.object({
    /** A flag determining whether or not tenancy arrears should be chased */
    chaseArrears: z.boolean().optional().nullable(),
    /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
    paymentPlan: z.string().optional().nullable(),
  })
