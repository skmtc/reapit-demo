import { z } from 'zod'

/** Request body used to create a buying enquiry */
export type EnquiryBuyingModel =
  /** Request body used to create a buying enquiry */
  {
    priceFrom?: /** The lower bound of the prospective buyer's budget */ number | null | undefined
    priceTo?: /** The upper bound of the prospective buyer's budget */ number | null | undefined
  }
/** Request body used to create a buying enquiry */
export const enquiryBuyingModel =
  /** Request body used to create a buying enquiry */
  z.object({
    /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().optional().nullable(),
    /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().optional().nullable(),
  })
