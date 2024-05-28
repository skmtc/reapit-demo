import { z } from 'zod'

/** The details specific to enquiries with a type of lettingsApplicant */
export const enquiryRentingModel = z.object({
  /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().nullable().optional(),
  /** The upper bound of the prospective tenant's budget */ rentTo: z.number().nullable().optional(),
  /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
})
/** The details specific to enquiries with a type of lettingsApplicant */
export type EnquiryRentingModel = {
  rentFrom?: /** The lower bound of the prospective tenant's budget */ number | undefined
  rentTo?: /** The upper bound of the prospective tenant's budget */ number | undefined
  rentFrequency?: /** How often the tenant would like to pay the rent (weekly/monthly/annually) */ string | undefined
}
