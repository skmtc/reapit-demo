import { z } from 'zod'

/** The details specific to a buying enquiry */
export const createEnquiryBuyingModel = z.object({
  /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().nullable().optional(),
})
/** The details specific to a buying enquiry */
export type CreateEnquiryBuyingModel = {
  priceFrom?: /** The lower bound of the prospective buyer's budget */ number | undefined
  priceTo?: /** The upper bound of the prospective buyer's budget */ number | undefined
}
