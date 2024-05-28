import { z } from 'zod'

/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export const irelandPropertyBERModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  exempt: z.boolean().nullable().optional(),
  /** The BER rating of the property */ rating: z.string().nullable().optional(),
  /** The BER certificate reference number */ refNumber: z.string().nullable().optional(),
  /** The energy performance indicator for the property */ epi: z.string().nullable().optional(),
})
/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export type IrelandPropertyBERModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  boolean | undefined
  rating?: /** The BER rating of the property */ string | undefined
  refNumber?: /** The BER certificate reference number */ string | undefined
  epi?: /** The energy performance indicator for the property */ string | undefined
}
