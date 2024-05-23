import { z } from 'zod'

/** Request body used to create a buying enquiry */
export const enquiryBuyingModel = z.object({
  /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().nullable().optional(),
})
