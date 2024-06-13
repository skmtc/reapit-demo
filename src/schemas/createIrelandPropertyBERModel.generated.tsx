import { z } from 'zod'

/** Request body used to set the energy performance rating information for properties in Ireland */
export type CreateIrelandPropertyBERModel =
  /** Request body used to set the energy performance rating information for properties in Ireland */
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
/** Request body used to set the energy performance rating information for properties in Ireland */
export const createIrelandPropertyBERModel =
  /** Request body used to set the energy performance rating information for properties in Ireland */
  z.object({
    /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
    exempt: z.boolean().optional().nullable(),
    /** The BER rating of the property */ rating: z.string().optional().nullable(),
    /** The BER certificate reference number */ refNumber: z.string().optional().nullable(),
    /** The energy performance indicator for the property */ epi: z.string().optional().nullable(),
  })
