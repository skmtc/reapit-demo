import { z } from 'zod'

/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export type IrelandPropertyBERModel =
  /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
  {
    exempt?:
      | /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
      boolean
      | null
      | undefined
    rating?: /** The BER rating of the property */ string | null | undefined
    refNumber?: /** The BER certificate reference number */ string | null | undefined
    epi?: /** The energy performance indicator for the property */ string | null | undefined
  }
/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export const irelandPropertyBERModel =
  /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
  z.object({
    /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
    exempt: z.boolean().optional().nullable(),
    /** The BER rating of the property */ rating: z.string().optional().nullable(),
    /** The BER certificate reference number */ refNumber: z.string().optional().nullable(),
    /** The energy performance indicator for the property */ epi: z.string().optional().nullable(),
  })
