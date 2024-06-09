import { z } from 'zod'

/** Details relating to the shared ownership of the property */
export const propertySharedOwnershipModel =
  /** Details relating to the shared ownership of the property */
  z.object({
    /** The percentage of the shared ownership property being sold by the vendor */
    sharedPercentage: z.number().optional(),
    /** The rent payable on the remainder of the shared ownership property */ rent: z.number().optional(),
    /** The frequency at which the shared ownership rent should be paid */ rentFrequency: z.string().optional(),
  })
/** Details relating to the shared ownership of the property */
export type PropertySharedOwnershipModel =
  /** Details relating to the shared ownership of the property */
  {
    sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */
    number | undefined
    rent?: /** The rent payable on the remainder of the shared ownership property */ number | undefined
    rentFrequency?: /** The frequency at which the shared ownership rent should be paid */ string | undefined
  }
