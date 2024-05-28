import { z } from 'zod'

/** Representation of the sub agent terms */
export const propertySubAgentTermsModel = z.object({
  /** A flag denoting whether or not fee is available */ feeAvailable: z.boolean().nullable().optional(),
  /** The type of fee (percent/fixed/callForFees) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
})
/** Representation of the sub agent terms */
export type PropertySubAgentTermsModel = {
  feeAvailable?: /** A flag denoting whether or not fee is available */ boolean | undefined
  type?: /** The type of fee (percent/fixed/callForFees) */ string | undefined
  amount?: /** The fee amount */ number | undefined
}
