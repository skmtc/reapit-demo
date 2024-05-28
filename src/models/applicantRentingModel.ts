import { z } from 'zod'

/** The details specific to applicants with a marketingMode of renting */
export const applicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */ moveDate: z.string().nullable().optional(),
  /** The applicant's preferred letting term (long/short/any) */ term: z.string().nullable().optional(),
  /** The lower bound of the applicant's budget */ rentFrom: z.number().nullable().optional(),
  /** The upper bound of the applicant's budget */ rentTo: z.number().nullable().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The identifier of the applicant's renting position */ positionId: z.string().nullable().optional(),
})
/** The details specific to applicants with a marketingMode of renting */
export type ApplicantRentingModel = {
  moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
  term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
  rentFrom?: /** The lower bound of the applicant's budget */ number | undefined
  rentTo?: /** The upper bound of the applicant's budget */ number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  string | undefined
  furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
  Array<string> | undefined
  positionId?: /** The identifier of the applicant's renting position */ string | undefined
}
