import { z } from 'zod'

/** The details specific to applicants with a marketingMode of renting */
export type CreateApplicantRentingModel =
  /** The details specific to applicants with a marketingMode of renting */
  {
    moveDate?: /** The date the applicant is looking to move to a new property */ string | null | undefined
    term?: /** The applicant's preferred letting term (long/short/any) */ string | null | undefined
    rentFrom?:
      | /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
      number
      | null
      | undefined
    rentTo?:
      | /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
      number
      | null
      | undefined
    rentFrequency?:
      | /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
      string
      | null
      | undefined
    furnishing?:
      | /** A list of property furnishing requirements taken from the full listing of the associated department */
      Array<string>
      | null
      | undefined
    positionId?: /** The identifier of the applicant's renting position */ string | null | undefined
  }
/** The details specific to applicants with a marketingMode of renting */
export const createApplicantRentingModel =
  /** The details specific to applicants with a marketingMode of renting */
  z.object({
    /** The date the applicant is looking to move to a new property */ moveDate: z.string().optional().nullable(),
    /** The applicant's preferred letting term (long/short/any) */ term: z.string().optional().nullable(),
    /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
    rentFrom: z.number().optional().nullable(),
    /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
    rentTo: z.number().optional().nullable(),
    /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
    rentFrequency: z.string().optional().nullable(),
    /** A list of property furnishing requirements taken from the full listing of the associated department */
    furnishing: z.array(z.string()).optional().nullable(),
    /** The identifier of the applicant's renting position */ positionId: z.string().optional().nullable(),
  })
