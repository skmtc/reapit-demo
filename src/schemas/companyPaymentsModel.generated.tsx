import { z } from 'zod'

/** Representation of the payments and terms configuration for a company */
export const companyPaymentsModel =
  /** Representation of the payments and terms configuration for a company */
  z.object({
    /** The identifier of the nominal code selected in the payments and terms configuration */
    nominalAccountId: z.string().optional().nullable(),
  })
/** Representation of the payments and terms configuration for a company */
export type CompanyPaymentsModel =
  /** Representation of the payments and terms configuration for a company */
  {
    nominalAccountId?:
      | /** The identifier of the nominal code selected in the payments and terms configuration */
      string
      | null
      | undefined
  }
