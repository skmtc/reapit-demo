import { z } from 'zod'

/** The details specific to a buying enquiry */
export type CreateEnquiryBuyingModel =
  /** The details specific to a buying enquiry */
  {
    priceFrom?: /** The lower bound of the prospective buyer's budget */ number | null | undefined
    priceTo?: /** The upper bound of the prospective buyer's budget */ number | null | undefined
  }
/** The details specific to a buying enquiry */
export const createEnquiryBuyingModel =
  /** The details specific to a buying enquiry */
  z.object({
    /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().optional().nullable(),
    /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().optional().nullable(),
  })
