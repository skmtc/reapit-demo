import { z } from 'zod'

/** The details specific to applicants with a marketingMode of renting */
export type ApplicantRentingModel =
  /** The details specific to applicants with a marketingMode of renting */
  {
    moveDate?: /** The date the applicant is looking to move to a new property */ string | null | undefined
    term?: /** The applicant's preferred letting term (long/short/any) */ string | null | undefined
    rentFrom?: /** The lower bound of the applicant's budget */ number | null | undefined
    rentTo?: /** The upper bound of the applicant's budget */ number | null | undefined
    rentFrequency?:
      | /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
      string
      | null
      | undefined
    furnishing?:
      | /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
      Array<string>
      | null
      | undefined
    positionId?: /** The identifier of the applicant's renting position */ string | null | undefined
  }
/** The details specific to applicants with a marketingMode of renting */
export const applicantRentingModel =
  /** The details specific to applicants with a marketingMode of renting */
  z.object({
    /** The date the applicant is looking to move to a new property */ moveDate: z.string().optional().nullable(),
    /** The applicant's preferred letting term (long/short/any) */ term: z.string().optional().nullable(),
    /** The lower bound of the applicant's budget */ rentFrom: z.number().optional().nullable(),
    /** The upper bound of the applicant's budget */ rentTo: z.number().optional().nullable(),
    /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
    rentFrequency: z.string().optional().nullable(),
    /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
    furnishing: z.array(z.string()).optional().nullable(),
    /** The identifier of the applicant's renting position */ positionId: z.string().optional().nullable(),
  })
