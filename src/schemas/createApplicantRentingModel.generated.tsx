import { z } from 'zod'

/** The details specific to applicants with a marketingMode of renting */
export const createApplicantRentingModel = /** The details specific to applicants with a marketingMode of renting */
z.object({moveDate: /** The date the applicant is looking to move to a new property */
z.string().optional(), term: /** The applicant's preferred letting term (long/short/any) */
z.string().optional(), rentFrom: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
z.number().optional(), rentTo: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
z.number().optional(), rentFrequency: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
z.string().optional(), furnishing: /** A list of property furnishing requirements taken from the full listing of the associated department */
z.array(z.string()).optional(), positionId: /** The identifier of the applicant's renting position */
z.string().optional()});
/** The details specific to applicants with a marketingMode of renting */
export type CreateApplicantRentingModel = /** The details specific to applicants with a marketingMode of renting */
{moveDate?: /** The date the applicant is looking to move to a new property */
string | undefined, term?: /** The applicant's preferred letting term (long/short/any) */
string | undefined, rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
number | undefined, rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
number | undefined, rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
string | undefined, furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
Array<string> | undefined, positionId?: /** The identifier of the applicant's renting position */
string | undefined};