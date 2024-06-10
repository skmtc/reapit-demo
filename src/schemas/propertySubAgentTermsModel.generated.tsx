import { z } from 'zod'

/** Representation of the sub agent terms */
export const propertySubAgentTermsModel =
  /** Representation of the sub agent terms */
  z.object({
    /** A flag denoting whether or not fee is available */ feeAvailable: z.boolean().optional().nullable(),
    /** The type of fee (percent/fixed/callForFees) */ type: z.string().optional().nullable(),
    /** The fee amount */ amount: z.number().optional().nullable(),
  })
/** Representation of the sub agent terms */
export type PropertySubAgentTermsModel =
  /** Representation of the sub agent terms */
  {
    feeAvailable?: /** A flag denoting whether or not fee is available */ boolean | null | undefined
    type?: /** The type of fee (percent/fixed/callForFees) */ string | null | undefined
    amount?: /** The fee amount */ number | null | undefined
  }
