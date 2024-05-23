import { z } from 'zod'

/** Details relating to the shared ownership of the property */
export const createPropertySharedOwnershipModel = z.object({
  /** The percentage of the shared ownership property being sold by the vendor */
  sharedPercentage: z.number().nullable().optional(),
  /** The rent payable on the remainder of the shared ownership property */ rent: z.number().nullable().optional(),
  /** The frequency at which the shared ownership rent should be paid */
  rentFrequency: z.string().nullable().optional(),
})
