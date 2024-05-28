import { z } from 'zod'

/** The details specific to renting enquiry. When type is renting. */
export const createEnquiryRentingModel = z.object({
  /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().int().nullable().optional(),
  /** The upper bound of the prospective tenant's budget */ rentTo: z.number().int().nullable().optional(),
  /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
  rentFrequency: z.string().nullable().optional(),
})
/** The details specific to renting enquiry. When type is renting. */
export type CreateEnquiryRentingModel = {
  rentFrom?: /** The lower bound of the prospective tenant's budget */ number | undefined
  rentTo?: /** The upper bound of the prospective tenant's budget */ number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
  string | undefined
}