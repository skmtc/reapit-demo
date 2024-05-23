import { z } from 'zod'

/** Representation of the payments and terms configuration for a company */
export const companyPaymentsModel = z.object({
  /** The identifier of the nominal code selected in the payments and terms configuration */
  nominalAccountId: z.string().nullable().optional(),
})
