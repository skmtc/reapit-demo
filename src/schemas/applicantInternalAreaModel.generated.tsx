import { z } from 'zod'

/** The applicant's indoor space requirements */
export const applicantInternalAreaModel = /** The applicant's indoor space requirements */
z.object({type: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
z.string().optional(), amount: /** The unit value of inside space that the applicant is looking for */
z.number().optional()});
/** The applicant's indoor space requirements */
export type ApplicantInternalAreaModel = /** The applicant's indoor space requirements */
{type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
string | undefined, amount?: /** The unit value of inside space that the applicant is looking for */
number | undefined};