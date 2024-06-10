import { z } from 'zod'

/** The details specific to enquiries with a type of lettingsApplicant */
export const enquiryRentingModel =
  /** The details specific to enquiries with a type of lettingsApplicant */
  z.object({
    /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().optional().nullable(),
    /** The upper bound of the prospective tenant's budget */ rentTo: z.number().optional().nullable(),
    /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
    rentFrequency: z.string().optional().nullable(),
  })
/** The details specific to enquiries with a type of lettingsApplicant */
export type EnquiryRentingModel =
  /** The details specific to enquiries with a type of lettingsApplicant */
  {
    rentFrom?: /** The lower bound of the prospective tenant's budget */ number | null | undefined
    rentTo?: /** The upper bound of the prospective tenant's budget */ number | null | undefined
    rentFrequency?:
      | /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
      string
      | null
      | undefined
  }
