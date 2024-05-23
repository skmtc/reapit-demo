import { z } from 'zod'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const updateApplicantRegionalModel = z.object({
  /** Details of regional information specific to Guernsey */
  ggy: z
    .object({
      /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
      market: z.array(z.string()).nullable().optional(),
    })
    .nullable()
    .optional(),
})
