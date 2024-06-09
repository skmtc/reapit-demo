import { z } from 'zod'

/** The details specific to applicants with a marketingMode of renting */
export const createApplicantRentingModel =
  /** The details specific to applicants with a marketingMode of renting */
  z.object({
    /** The date the applicant is looking to move to a new property */ moveDate: z.string().optional(),
    /** The applicant's preferred letting term (long/short/any) */ term: z.string().optional(),
    /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
    rentFrom: z.number().optional(),
    /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
    rentTo: z.number().optional(),
    /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
    rentFrequency: z.string().optional(),
    /** A list of property furnishing requirements taken from the full listing of the associated department */
    furnishing: z.array(z.string()).optional(),
    /** The identifier of the applicant's renting position */ positionId: z.string().optional(),
  })
/** The details specific to applicants with a marketingMode of renting */
export type CreateApplicantRentingModel =
  /** The details specific to applicants with a marketingMode of renting */
  {
    moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
    term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
    rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
    number | undefined
    rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
    number | undefined
    rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
    string | undefined
    furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
    Array<string> | undefined
    positionId?: /** The identifier of the applicant's renting position */ string | undefined
  }
