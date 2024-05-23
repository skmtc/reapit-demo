import { z } from 'zod'

/** Representation of the configuration settings for terminology */
export const terminologyModel = z.object({
  /** Terminologies associated with the properties */
  properties: z
    .object({
      /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
      useSoldStc: z.boolean().nullable().optional(),
      /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
      useMarketAppraisal: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
})
