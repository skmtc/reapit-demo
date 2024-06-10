import { z } from 'zod'

/** The details specific to renting enquiry. When type is renting. */
export const createEnquiryRentingModel =
  /** The details specific to renting enquiry. When type is renting. */
  z.object({
    /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().int().optional().nullable(),
    /** The upper bound of the prospective tenant's budget */ rentTo: z.number().int().optional().nullable(),
    /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
    rentFrequency: z.string().optional().nullable(),
  })
/** The details specific to renting enquiry. When type is renting. */
export type CreateEnquiryRentingModel =
  /** The details specific to renting enquiry. When type is renting. */
  {
    rentFrom?: /** The lower bound of the prospective tenant's budget */ number | null | undefined
    rentTo?: /** The upper bound of the prospective tenant's budget */ number | null | undefined
    rentFrequency?:
      | /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
      string
      | null
      | undefined
  }
