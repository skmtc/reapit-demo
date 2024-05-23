import { z } from 'zod'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const propertyRegionalModel = z.object({
  /** Any specific details relating to the marketing of a property in Guernsey */
  ggy: z
    .object({
      /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
      market: z.array(z.string()).nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Any specific details relating to the marketing of a property in Ireland */
  irl: z
    .object({
      /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
      buildingEnergyRating: z
        .object({
          /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
          exempt: z.boolean().nullable().optional(),
          /** The BER rating of the property */ rating: z.string().nullable().optional(),
          /** The BER certificate reference number */ refNumber: z.string().nullable().optional(),
          /** The energy performance indicator for the property */ epi: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
})
