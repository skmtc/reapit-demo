import { z } from 'zod'

/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createPropertyRegionalModel = z.object({
  /** Request body used to set the data specific to properties in Ireland */
  irl: z
    .object({
      /** Request body used to set the energy performance rating information for properties in Ireland */
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
