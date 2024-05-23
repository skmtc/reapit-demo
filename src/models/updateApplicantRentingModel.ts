import { z } from 'zod'

/** The details specific to applicants with a marketingMode of renting */
export const updateApplicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */ moveDate: z.string().nullable().optional(),
  /** The applicant's preferred letting term (long/short/any) */ term: z.string().nullable().optional(),
  /** The lower bound of the applicant's budget */ rentFrom: z.number().nullable().optional(),
  /** The upper bound of the applicant's budget */ rentTo: z.number().nullable().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The identifier of the applicant's renting position */ positionId: z.string().nullable().optional(),
})
