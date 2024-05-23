import { z } from 'zod'

/** Terminologies associated with the properties */
export const propertyTerminologyModel = z.object({
  /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
  useSoldStc: z.boolean().nullable().optional(),
  /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
  useMarketAppraisal: z.boolean().nullable().optional(),
})
